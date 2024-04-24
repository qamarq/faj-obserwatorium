import { MAX_PARTICIPANTS } from '@/config/reservation_form';
import * as z from 'zod';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const ReservationFormSchema = z.object({
    name: z.string().min(1, { message: "Nazwa jest wymagana" }),
    email: z.string().min(1, { message: "Email jest wymagany" }).email("Podaj poprawny adres email"),
    phone: z.string().min(1, { message: "Numer telefonu jest wymagany" }).regex(phoneRegex, 'Numer telefonu nie jest poprawny!'),
    participations: z.number().gte(1, 'Musi być co najmniej 1 uczestnik').max(MAX_PARTICIPANTS, 'Maksymalna liczba uczestników to 45'),
    type: z.enum(["GROUP", "INDIVIDUAL"], { required_error: "Typ jest wymagany", invalid_type_error: "Niepoprawny typ" }),
    activity: z.enum(["SHORT", "FULL", "EDUCATIONAL_WORKSHOP", "EVENING_OBSERVATION", "POP_SCIENCE_LECTURE", "NORMAL"], { required_error: "Aktywność jest wymagana", invalid_type_error: "Niepoprawna aktywność" }),
    lang: z.enum(["PL", "EN"], { required_error: "Język jest wymagany", invalid_type_error: "Niepoprawny język" }),
    day: z.date().min(new Date(), { message: "Data musi być w przyszłości" }),
    hour: z.string().min(1, { message: "Godzina jest wymagana" }),
    acceptRules: z.boolean().refine((value) => value, { message: "Zaakceptuj regulamin" }),
    newsletter: z.boolean(),
    needReceipt: z.boolean(),
});