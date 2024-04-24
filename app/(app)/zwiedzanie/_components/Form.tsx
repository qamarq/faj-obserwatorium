"use client"

import { EvervaultCard, Icon } from '@/components/ui/evervault-card'
import { MAX_PARTICIPANTS, defaultHours, formSteps, products } from '@/config/reservation_form'
import { Button, Checkbox, CheckboxGroup, Input, Radio, RadioGroup, cn } from '@nextui-org/react'
import React, { useEffect, useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { pl } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Loader2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { ZodError, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReservationFormSchema } from '@/schemas'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Icons } from '@/components/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { getDisabledDates, getHoursByDay, sendReservation } from '@/actions/reservations'
import { format } from 'date-fns'
import { toast } from 'sonner'

export default function FormComponent() {
    const [step, setStep] = useState(1)
    const [isLoadingHours, startTransitionHours] = React.useTransition()
    const [isLoadingDisabledDates, startTransitionDisabledDates] = React.useTransition()
    const [disabledDates, setDisabledDates] = useState<Date[]>()
    const [hours, setHours] = useState<{hour: string, active: boolean}[]>(defaultHours)
    const [isPending, startTransition] = React.useTransition()

    const firstTimeFetch = React.useRef(true)

    useEffect(() => {
        if (firstTimeFetch.current) {
            startTransitionDisabledDates(async () => {
                const response = await getDisabledDates()
                setDisabledDates(response.map(date => new Date(date)))
            })

            firstTimeFetch.current = false
            return
        }
    }, [])

    const form = useForm<z.infer<typeof ReservationFormSchema>>({
        resolver: zodResolver(ReservationFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            participations: 1,
            type: undefined,
            activity: undefined,
            lang: undefined,
            day: undefined,
            hour: undefined,
            acceptRules: false,
            needReceipt: false,
            newsletter: false,
        },
    })

    const day = form.watch('day')
    const type = form.watch('type')
    const activity = form.watch('activity')
    const lang = form.watch('lang')
    const acceptRules = form.watch('acceptRules')
    const newsletter = form.watch('newsletter')

    useEffect(() => {
        if (day) {
            setHours(defaultHours)
            form.resetField('hour')
            startTransitionHours(async () => {
                const participations = form.getValues('participations')
                const response = await getHoursByDay(day, participations)
                setHours(response)
            })
        }
    }, [day])

    function onSubmit(values: z.infer<typeof ReservationFormSchema>) {
        startTransition(async () => {
            await sendReservation(values)
                .then(data => {
                    if (data.success) {
                        toast.success(data.message)
                        setStep(6)
                    } else {
                        toast.error(data.message)
                    }
                })
        })
    }

    const isFirstStepCompleted = type !== undefined
    const isSecondStepCompleted = activity !== undefined && lang !== undefined
    const isThirdStepCompleted = day !== undefined && form.watch('hour') !== undefined && hours.find(hour => hour.hour === form.watch('hour'))?.active && form.watch('hour') !== ""
    const isFourthStepCompleted = form.watch('name') !== "" && form.watch('email') !== "" && form.watch('phone') !== "" && form.watch('acceptRules') !== false

    const currentChoosenActivityName = useMemo(() => {
        const currentKey = `${type}_${activity}_${lang}`
        const currentName = products.find(product => product.key === currentKey)?.name || "Nieznana aktywność"
        return currentName
    }, [type, activity, lang])

    const handleSubmitFormFunction = () => {
        try {
            const values = form.getValues()
            ReservationFormSchema.parse(values as z.infer<typeof ReservationFormSchema>)
            form.handleSubmit(onSubmit)
        } catch (error) {
            if (error instanceof ZodError) {
                toast.error(error.errors[0].message)
            } else {
                toast.error("Wystąpił błąd podczas walidacji formularza")
            }
        }
    }

    return (
        <section className="w-full min-h-[45dvh] flex items-center text-white justify-center bg-stars-image bg-center bg-cover py-10">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold mb-10">
                    Zarezerwuj termin
                </h1>

                <AnimatePresence>
                    {step === 6 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-10 backdrop-blur-sm rounded-lg bg-gray-400/20 h-[90vh] w-full flex flex-col justify-center items-center"
                        >
                            <div className='flex flex-col items-center'>
                                <div className='w-[100px] h-[100px] bg-emerald-500 flex items-center justify-center rounded-full'>
                                    <Icons.success className='h-12 w-12' />
                                </div>

                                <h1 className='text-3xl font-semibold mt-8'>Przesłano formularz pomyślnie!</h1>
                                <h2 className='text-lg mt-4 text-slate-200 text-center text-balance w-full max-w-[700px] font-light'>Twoja rezerwacja trafiła do weryfikacji i w ciągu następnych 24h zostanie rozpatrzona. Potwierdzenie rezerwacji otrzymasz na <span className='font-semibold text-primary-500'>{form.getValues("email")}</span>. Do zobaczenia w obserwatorium! 😁</h2>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {step <= 5 && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="p-10 backdrop-blur-sm rounded-lg bg-gray-400/20 h-[90vh] w-full flex flex-col">
                            <AnimatePresence>
                                <div className="items-center grid grid-cols-5 text-lg">
                                    {formSteps.map((formStep, index) => (
                                        <button
                                            key={formStep.name}
                                            // onClick={() => setStep(index + 1)}
                                            className="flex flex-col">
                                            <div
                                                className={cn('flex items-center px-2', {
                                                    'text-amber-500':
                                                        step === index + 1,
                                                })}>
                                                <div className="mr-2">
                                                    <formStep.icon size={24} />
                                                </div>
                                                <p className="leading-none">
                                                    {index + 1}. {formStep.name}
                                                </p>
                                            </div>
                                            <span
                                                className={cn(
                                                    'bg-white h-[2px] w-full mt-4',
                                                    { '!bg-amber-500': step === index + 1 }
                                                )}></span>
                                        </button>
                                    ))}
                                </div>
                            </AnimatePresence>
                            <div className="mt-[40px] w-full flex flex-col items-center grow">
                                <h1 className="text-3xl font-normal mb-6">
                                    {step}. {formSteps[step - 1].name}
                                </h1>

                                {step === 1 && (
                                    <>
                                        <div className='flex flex-col'>
                                            <div className="grid grid-cols-2 gap-10">
                                                <FormField
                                                    control={form.control}
                                                    name="type"
                                                    disabled={isPending}
                                                    render={({ field }) => (
                                                        <>
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2]  flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "INDIVIDUAL" })}
                                                                onClick={() => {field.onChange("INDIVIDUAL"); form.resetField("activity")}}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Zwiedzanie indywidualne" size='lg' />

                                                                <h2 className="text-white mt-4 text-sm font-medium">
                                                                    Wybierz zwiedzanie indywidualne, jeśli
                                                                    chcesz zwiedzić obserwatorium
                                                                    samodzielnie.
                                                                </h2>
                                                            </button>

                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "GROUP" })}
                                                                onClick={() => {field.onChange("GROUP"); form.resetField("activity")}}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Zwiedzanie grupowe" size='lg' />

                                                                <h2 className="text-white mt-4 text-sm font-medium">
                                                                    Wybierz zwiedzanie grupowe, jeśli chcesz
                                                                    zwiedzić obserwatorium w grupie.
                                                                </h2>
                                                            </button>
                                                        </>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="participations"
                                                disabled={isPending}
                                                render={({ field }) => (
                                                    <FormItem className='flex w-full max-w-[380px] mt-5 bg-black/20 rounded-lg p-6 flex-col mx-auto'>
                                                        <FormLabel htmlFor='participations'>
                                                            Liczba uczestników
                                                        </FormLabel>
                                                        <div className='bg-black/20 rounded-lg px-4 py-3 flex items-center max-w-xs mt-10 relative'>
                                                            <button 
                                                                type='button'
                                                                className='w-[50px] flex items-center justify-center absolute left-0 inset-y-0 bg-amber-500 rounded-l-lg disabled:bg-slate-600/50' 
                                                                onClick={() => field.onChange(field.value - 1)} 
                                                                disabled={field.value <= 1}
                                                            >
                                                                <Icons.minus />
                                                            </button>
                                                            <input
                                                                {...field}
                                                                type='number'
                                                                min={1}
                                                                max={MAX_PARTICIPANTS}
                                                                pattern="[0-9]*" 
                                                                inputMode="numeric"
                                                                readOnly
                                                                id="participations"
                                                                name="participations"
                                                                className='w-full bg-transparent text-center focus:outline-none formPart text-xl'
                                                            />
                                                            <button 
                                                                type='button'
                                                                className='w-[50px] flex items-center justify-center absolute right-0 inset-y-0 bg-amber-500 rounded-r-lg disabled:bg-slate-600/50' 
                                                                onClick={() => field.onChange(field.value + 1)} 
                                                                disabled={field.value >= MAX_PARTICIPANTS}
                                                            >
                                                                <Icons.plus />
                                                            </button>
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className='w-full max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
                                            <Button variant='flat' type='button'>
                                                Wstecz
                                            </Button>
                                            <Button variant='solid' type='button' color='primary' isDisabled={!isFirstStepCompleted} onClick={() => setStep(2)}>
                                                Przejdź dalej
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name="activity"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <>
                                                    {form.getValues('type') === 'INDIVIDUAL' && (
                                                        <div className="grid grid-cols-1 gap-10">
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "NORMAL" })}
                                                                onClick={() => {
                                                                    field.onChange("NORMAL");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Zwiedzanie biletowane" size="lg" />

                                                                <h2 className="text-white mt-4 text-sm font-medium text-center w-full">
                                                                    (bilet normalny 25zł, bilet ulgowy 15zł)
                                                                </h2>
                                                            </button>  
                                                        </div>
                                                    )}
                                                    {form.getValues('type') === 'GROUP' && (
                                                        <div className="grid grid-cols-5 gap-4">
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "SHORT" })}
                                                                onClick={() => {
                                                                    field.onChange("SHORT");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Grupowe - skrócone" size="sm" />

                                                                <h2 className="text-white mt-4 text-sm font-medium w-full">
                                                                    Skrócone w języku polskim (1h, min. 450zł) / angielskim (1h, min. 540zł)
                                                                </h2>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "FULL" })}
                                                                onClick={() => {
                                                                    field.onChange("FULL");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Grupowe - pełne" size="sm" />

                                                                <h2 className="text-white mt-4 text-sm font-medium w-full">
                                                                    Pełne w języku polskim (2h, min. 690zł) / angielskim (2h, min. 840zł)
                                                                </h2>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "EDUCATIONAL_WORKSHOP" })}
                                                                onClick={() => {
                                                                    field.onChange("EDUCATIONAL_WORKSHOP");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Warsztaty edukacyjne" size="sm" />

                                                                <h2 className="text-white mt-4 text-sm font-medium w-full">
                                                                    (45 minut, min. 400zł)
                                                                </h2>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "EVENING_OBSERVATION" })}
                                                                onClick={() => {
                                                                    field.onChange("EVENING_OBSERVATION");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Obserwacje wieczorne" size="sm" />

                                                                <h2 className="text-white mt-4 text-sm font-medium w-full">
                                                                    (min. 200zł/1h)
                                                                </h2>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className={cn("border border-black/[0.2] flex flex-col items-start max-w-sm p-4 relative h-[30rem] bg-black/20 cursor-pointer", { '!border-amber-500 !bg-amber-900/20': field.value === "POP_SCIENCE_LECTURE" })}
                                                                onClick={() => {
                                                                    field.onChange("POP_SCIENCE_LECTURE");
                                                                    form.setValue('lang', "PL");
                                                                }}>
                                                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
                                                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

                                                                <EvervaultCard text="Wykład popularnonaukowy" size="sm" />

                                                                <h2 className="text-white mt-4 text-sm font-medium w-full">
                                                                (min. 500 zł)
                                                                </h2>
                                                            </button>
                                                        </div>   
                                                    )}
                                                </>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="lang"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <FormItem className='flex w-full max-w-[380px] mt-5 bg-black/20 rounded-lg py-3 px-5'>
                                                    <RadioGroup
                                                        classNames={{
                                                            label: 'text-white',
                                                        }}
                                                        label="Wybierz język"
                                                        {...field}
                                                    >
                                                        <Radio value="PL" classNames={{label: 'text-white'}}>
                                                            Język polski
                                                        </Radio>
                                                        {(form.getValues('activity') === "SHORT" || form.getValues('activity') === "FULL") && (
                                                            <Radio value="EN" classNames={{label: 'text-white'}}>
                                                                Język angielski
                                                            </Radio>                           
                                                        )}
                                                    </RadioGroup>
                                                </FormItem>
                                            )}
                                        />
                            
                                        <div className='w-full max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
                                            <Button variant='flat' type='button' onClick={() => setStep(1)}>
                                                Wstecz
                                            </Button>
                                            <Button variant='solid' type='button' color='primary' isDisabled={!isSecondStepCompleted} onClick={() => setStep(3)}>
                                                Przejdź dalej
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <div className='flex flex-col items-center space-y-3'>
                                        <FormField
                                            control={form.control}
                                            name="day"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <>
                                                    <div className='relative'>
                                                        <DayPicker
                                                            mode="single"
                                                            locale={pl}
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={[ { before: new Date() }, new Date(), ...disabledDates || [] ]}
                                                            className={"px-3"}
                                                            classNames={{
                                                                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                                                                month: 'space-y-4',
                                                                caption:
                                                                    'flex justify-center bg-white/10 rounded-md py-1 px-2 relative items-center',
                                                                caption_label: 'text-sm font-medium uppercase',
                                                                nav: 'space-x-1 flex items-center',
                                                                nav_button: cn(
                                                                    buttonVariants({
                                                                        variant: 'outline',
                                                                    }),
                                                                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
                                                                ),
                                                                nav_button_previous: 'absolute left-1',
                                                                nav_button_next: 'absolute right-1',
                                                                table: 'w-full border-collapse space-y-4',
                                                                head_row: 'flex space-x-4',
                                                                head_cell:
                                                                    'text-muted-foreground rounded-md w-14 font-normal text-[0.9rem]',
                                                                row: 'flex w-full mt-2 space-x-4',
                                                                cell: 'h-14 w-14 text-center text-lg rounded-lg p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                                                                day: cn(
                                                                    buttonVariants({
                                                                        variant: 'ghost',
                                                                    }),
                                                                    'h-14 w-14 p-0 font-normal aria-selected:opacity-100 rounded-md'
                                                                ),
                                                                day_range_end: 'day-range-end',
                                                                day_selected:
                                                                    '!bg-primary !text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
                                                                day_today:
                                                                    'bg-accent text-accent-foreground',
                                                                day_outside:
                                                                    'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
                                                                day_disabled:
                                                                    'text-muted-foreground opacity-50',
                                                                day_range_middle:
                                                                    'aria-selected:bg-accent aria-selected:text-accent-foreground',
                                                                day_hidden: 'invisible',
                                                            }}
                                                            components={{
                                                                IconLeft: ({ ...props }) => (
                                                                    <ChevronLeft className="h-4 w-4" />
                                                                ),
                                                                IconRight: ({ ...props }) => (
                                                                    <ChevronRight className="h-4 w-4" />
                                                                ),
                                                            }}
                                                        />
                                                        <AnimatePresence>
                                                            {(isLoadingDisabledDates) && (
                                                                <motion.div 
                                                                    className='absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center mx-6'
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                >
                                                                    <Loader2Icon className='h-10 w-10 text-white animate-spin' />
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </>
                                            )}
                                        />

                                        <div className="px-3">
                                            <h1 className='text-2xl font-semibold mb-5 pl-4'>Wybierz godzinę</h1>
                                            <div className='flex items-center flex-wrap max-w-[570px] gap-2 px-8 py-2 relative'>
                                                <FormField
                                                    control={form.control}
                                                    name="hour"
                                                    disabled={isPending}
                                                    render={({ field }) => (
                                                        <>
                                                            {hours.map(({hour, active}) => (
                                                                <button 
                                                                    key={hour} 
                                                                    disabled={!active}
                                                                    type='button'
                                                                    onClick={() => field.onChange(hour)}
                                                                    className={cn('bg-black/20 border border-slate-600/50 py-3 px-5 rounded-lg leading-none hover:bg-black/50 transition-colors disabled:bg-black/10 disabled:pointer-events-none disabled:text-slate-400 text-lg', { '!bg-amber-500 !text-white': field.value === hour })}
                                                                >
                                                                    {hour}
                                                                </button>
                                                            ))}
                                                        </>
                                                    )}
                                                />
                                                <AnimatePresence>
                                                    {(isLoadingHours || isLoadingDisabledDates) && (
                                                        <motion.div 
                                                            className='absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center mx-6'
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                        >
                                                            <Loader2Icon className='h-10 w-10 text-white animate-spin' />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <div className='w-full max-w-[1200px] mx-auto flex items-center justify-between mt-10'>
                                            <Button variant='flat' type='button' onClick={() => setStep(2)}>
                                                Wstecz
                                            </Button>
                                            <Button variant='solid' type='button' color='primary' isDisabled={!isThirdStepCompleted} onClick={() => setStep(4)}>
                                                Przejdź dalej
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {step === 4 && (
                                    <div className='flex flex-col items-center space-y-3 max-w-[450px] w-full bg-black/20 rounded-lg p-4'>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <FormItem className='w-full'>
                                                    <FormLabel htmlFor='name'>
                                                        Imię i nazwisko *
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="name"
                                                        name="name"
                                                        autoComplete='name'
                                                        placeholder="Wpisz imię i nazwisko"
                                                        classNames={{
                                                            inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                            input: 'group-data-[has-value=true]:text-white'
                                                        }}
                                                    />
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <FormItem className='w-full'>
                                                    <FormLabel htmlFor='email'>
                                                        Adres email *
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="email"
                                                        name="email"
                                                        autoComplete='email'
                                                        placeholder="Wpisz adres email"
                                                        classNames={{
                                                            inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                            input: 'group-data-[has-value=true]:text-white'
                                                        }}
                                                    />
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            disabled={isPending}
                                            render={({ field }) => (
                                                <FormItem className='w-full'>
                                                    <FormLabel htmlFor='phone'>
                                                        Numer telefonu *
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="phone"
                                                        name="phone"
                                                        autoComplete='tel'
                                                        placeholder="Wpisz numer telefonu (+48000000000)"
                                                        classNames={{
                                                            inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                            input: 'group-data-[has-value=true]:text-white'
                                                        }}
                                                    />
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <p className='!mt-5 text-slate-300 text-sm'>Dbamy o Twoją prywatność. Administratorem danych osobowych podanych w formularzu będzie Fundacja Aleksandra Jabłońskiego (NIP 956 226 05 73). Podane dane będą przetwarzane w celu realizacji rezerwowanej usługi.</p>

                                        <div className='w-full !mt-5'>
                                            {/* <Checkbox value="all" classNames={{label: 'text-white text-sm'}}>Zaznacz wszystkie poniższe zgody</Checkbox> */}
                                            <Checkbox 
                                                value="rules" 
                                                isSelected={acceptRules} 
                                                onValueChange={() => form.setValue('acceptRules', !acceptRules)}
                                                classNames={{label: 'text-white text-sm'}}
                                            >
                                                Zapoznałem się oraz akceptuję regulamin rezerwacji *
                                            </Checkbox>
                                            <Checkbox 
                                                value="newsletter" 
                                                isSelected={newsletter}
                                                onValueChange={() => form.setValue('newsletter', !newsletter)}
                                                classNames={{label: 'text-white text-sm'}}
                                            >
                                                Chcę zapisać się do newslettera, a co za tym idzie wyrażam zgodę na przesyłanie na mój adres e-mail informacji o nowościach, promocjach, produktach i usługach pochodzących od DANE TWOJEJ FIRMY. Wiem, że w każdej chwili będę mógł wycofać zgodę.
                                            </Checkbox>
                                        </div>

                                        <p className='text-slate-300 text-sm w-full'>*Pola wymagane</p>

                                        <Button color='primary' type='button' isDisabled={!isFourthStepCompleted} onClick={() => setStep(5)}>Przejdź do podsumowania</Button>
                                    </div>   
                                )}

                                {step === 5 && (
                                    <div className='flex flex-col items-center space-y-3 max-w-[450px] w-full bg-black/20 rounded-lg p-4'>
                                        <h1 className='text-2xl font-semibold mb-5'>Podsumowanie rezerwacji</h1>

                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Usługa</h2>
                                            <Input
                                                isDisabled
                                                value={currentChoosenActivityName}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Termin</h2>
                                            <Input
                                                isDisabled
                                                value={`${format(form.getValues("day"), 'yyyy-MM-dd')} o godzinie ${form.getValues("hour")}`}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Liczba osób</h2>
                                            <Input
                                                isDisabled
                                                value={form.getValues("participations").toString()}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Imię i nazwisko</h2>
                                            <Input
                                                isDisabled
                                                value={form.getValues("name")}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Adres e-mail</h2>
                                            <Input
                                                isDisabled
                                                value={form.getValues("email")}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>
                                        <div className='flex flex-col items-start w-full'>
                                            <h2 className='text-sm mb-1 font-medium'>Telefon komórkowy</h2>
                                            <Input
                                                isDisabled
                                                value={form.getValues("phone")}
                                                classNames={{
                                                    inputWrapper: 'bg-black/20 data-[hover=true]:bg-black/30 group-data-[focus=true]:bg-black/30',
                                                    input: 'group-data-[has-value=true]:text-white'
                                                }}
                                            />
                                        </div>

                                        <div className='w-full'>
                                            <FormField
                                                control={form.control}
                                                name="needReceipt"
                                                disabled={isPending}
                                                render={({ field }) => (
                                                    <Checkbox isSelected={field.value} onValueChange={field.onChange} classNames={{ label: 'text-white' }} size='sm'>Potrzebuję fakturę</Checkbox>
                                                )}
                                            />

                                            <hr className='my-4' />

                                            <p className='text-slate-300 text-sm'>Dbamy o Twoją prywatność. Administratorem danych osobowych podanych w formularzu będzie Fundacja Aleksandra Jabłońskiego (NIP 956 226 05 73). Podane dane będą przetwarzane w celu realizacji rezerwowanej usługi.</p>

                                            <div className='flex items-center justify-center mt-4 gap-4'>
                                                <Button variant='flat' type='button' onClick={() => setStep(4)}>
                                                    Wstecz
                                                </Button>
                                                <Button 
                                                    color='primary' 
                                                    type='submit' 
                                                    className='w-full max-w-[200px]' 
                                                    // isDisabled={!form.formState.isValid} 
                                                    onClick={handleSubmitFormFunction}
                                                >
                                                    Wyślij rezerwację
                                                </Button>
                                            </div>
                                        </div>
                                    </div>   
                                )}
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </section>
    );
}
