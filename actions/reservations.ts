"use server"

import { MAX_PARTICIPANTS, defaultHours, products } from "@/config/reservation_form"
import { prisma } from "@/libs/db"
import { ReservationFormSchema } from "@/schemas"
import { ReservationType } from "@prisma/client"
import { format } from "date-fns"
import { z } from "zod"

export const getDisabledDates = async () => {
    const todayDate = format(new Date(), "yyyy-MM-dd")
    const disabledDates = await prisma.disabledDatesReservation.findMany({
        select: {
            date: true
        },
        where: {
            date: {
                gte: todayDate
            }
        }
    })

    return disabledDates.map(date => date.date)
}

export const getHoursByDay = async (pickedDate: Date, participants: number) => {
    const preparedDate = format(pickedDate, "yyyy-MM-dd")

    const disabledDates = await getDisabledDates()
    if (disabledDates.includes(preparedDate)) {
        return []
    }

    const hours = await prisma.observatoryOpenDay.findMany({
        include: { reservations: { select: { participants: true }}},
        where: {
            date: preparedDate,
        }
    })

    const responseHours = defaultHours.map(item => { return { ...item, active: true }})
    hours.forEach(hour => {
        const hourIndex = responseHours.findIndex(h => h.hour === hour.hour)
        if (hourIndex !== -1) {
            responseHours[hourIndex].active = hour.reservations.reduce((acc, res) => acc + res.participants, 0) + participants < MAX_PARTICIPANTS
        }
    })

    return responseHours
}

export const sendReservation = async (values: z.infer<typeof ReservationFormSchema>) => {
    try {
        const { name, email, phone, participations, type, activity, lang, day, hour, newsletter, needReceipt } = ReservationFormSchema.parse(values)

        const preparedDate = format(day, "yyyy-MM-dd")
        const key = `${type}_${activity}_${lang}`
        
        const priceForOneParticipant = products.find(product => product.key === key)?.price || 0
        const amount = type === "INDIVIDUAL" ? priceForOneParticipant * participations : priceForOneParticipant

        const exsistingDay = await prisma.observatoryOpenDay.findFirst({
            where: {
                date: preparedDate,
                hour
            }
        })

        let dayId = ""

        if (!exsistingDay) {
            const inserted = await prisma.observatoryOpenDay.create({
                data: {
                    date: preparedDate,
                    hour,
                    maxParticipants: MAX_PARTICIPANTS
                }
            })
            dayId = inserted.id
        }
        dayId = exsistingDay?.id || dayId

        await prisma.reservation.create({
            data: {
                name,
                email,
                phone,
                participants: participations,
                type: key as ReservationType,
                date: preparedDate,
                hour,
                amount,
                needReceipt,
                observatoryDayId: dayId
            }
        })

        return { success: true, message: "Rezerwacja została wysłana" }
    } catch (error) {
        console.error(error)
        if (error instanceof z.ZodError) {
            return { success: false, message: error.errors[0].message }
        } else {
            return { success: false, message: "Podczas przesyłania rezerwacji wystąpił błąd" }
        }
    }
}