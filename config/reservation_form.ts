import { Icons } from "@/components/icons";

export const formSteps = [
    {
        name: "Wybór usługi",
        icon: Icons.mouse
    },
    {
        name: "Rodzaj",
        icon: Icons.user
    },
    {
        name: "Wybór terminu",
        icon: Icons.home
    },
    {
        name: "Dane kupującego",
        icon: Icons.file
    },
    {
        name: "Podsumowanie",
        icon: Icons.file
    }
]

export const defaultHours = [
    {hour: '09:00', active: false},
    {hour: '10:00', active: false},
    {hour: '11:00', active: false},
    {hour: '12:00', active: false},
    {hour: '13:00', active: false},
    {hour: '14:00', active: false},
    {hour: '15:00', active: false},
    {hour: '16:00', active: false},
    {hour: '17:00', active: false},
    {hour: '18:00', active: false},
    {hour: '19:00', active: false},
    {hour: '20:00', active: false},
    {hour: '21:00', active: false},
    {hour: '22:00', active: false},
]

export const MAX_PARTICIPANTS = 45

export const products = [
    {
        key: 'GROUP_SHORT_PL',
        name: 'Zwiedzanie grupowe - skrócone w języku polskim',
        price: 450
    },
    {
        key: 'GROUP_SHORT_EN',
        name: 'Zwiedzanie grupowe - skrócone w języku angielskim',
        price: 540
    },
    {
        key: "GROUP_FULL_PL",
        name: "Zwiedzanie grupowe - pełne w języku polskim",
        price: 690
    },
    {
        key: "GROUP_FULL_EN",
        name: "Zwiedzanie grupowe - pełne w języku angielskim",
        price: 840
    },
    {
        key: "GROUP_EDUCATIONAL_WORKSHOP_PL",
        name: "Warsztaty edukacyjne dla grup w języku polskim",
        price: 400
    },
    {
        key: "GROUP_EVENING_OBSERVATION_PL",
        name: "Obserwacje wieczorne dla grup",
        price: 200
    },
    {
        key: "GROUP_POP_SCIENCE_LECTURE_PL",
        name: "Wykład popularnonaukowy",
        price: 500
    },
    {
        key: "INDIVIDUAL_NORMAL_PL",
        name: "Zwiedzanie biletowane indywidualne",
        price: 20
    }
]