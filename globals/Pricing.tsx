import { GlobalConfig } from 'payload/types';

const Pricing: GlobalConfig = {
    slug: 'pricing',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'individualTicket',
            type: 'group', 
            interfaceName: 'Cennik indywidualny', 
            label: 'Cennik indywidualny', 
            fields: [
                {
                    name: 'normalTicket',
                    type: 'text',
                    label: 'Bilet normalny',
                    required: true,
                },
                {
                    name: 'halfPriceTicket',
                    type: 'text',
                    label: 'Bilet ulgowy',
                    required: true,
                },
                {
                    name: 'eveningForAdults',
                    type: 'text',
                    label: 'Wieczory dla dorosłych (ulgowy/normalny)',
                    required: true,
                },
                {
                    name: 'yearSubscription',
                    type: 'text',
                    label: 'Abonament roczny (Właściciel + osoba towarzysząca)',
                    required: true,
                },
                {
                    name: 'planetariumMovies2DNormal',
                    type: 'text',
                    label: 'Planetarium - Filmy 2D, Prosto z nieba (normalny)',
                    required: true,
                },
                {
                    name: 'planetariumMovies2DHalfPrice',
                    type: 'text',
                    label: 'Planetarium - Filmy 2D, Prosto z nieba (ulgowy)',
                    required: true,
                },
                {
                    name: 'special',
                    type: 'text',
                    label: 'Pokazy specjalne (Bilet ulgowy / normalny)',
                    required: true,
                },
                {
                    name: 'shows',
                    type: 'text',
                    label: 'Koncerty (Bilet ulgowy / normalny)',
                    required: true,
                },
                {
                    name: 'specialOffers',
                    type: 'array',
                    label: 'Oferta specjalna',
                    required: true,
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Tekst',
                            required: true,
                        },
                    ]
                },
                {
                    name: 'hardEconomicalSituation',
                    type: 'array',
                    label: 'Wejscie dla osób w trudnej sytuacji ekonomicnej',
                    required: true,
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Tekst',
                            required: true,
                        },
                    ]
                },
            ],
        },
        {
            name: 'groupTicket',
            type: 'group', 
            interfaceName: 'Cennik grupowy', 
            label: 'Cennik grupowy', 
            fields: [
                {
                    name: 'exhibitionsWeekdays',
                    type: 'text',
                    label: 'Wystawy - dni powszednie',
                    required: true,
                },
                {
                    name: 'exhibitionsHolidays',
                    type: 'text',
                    label: 'Wystawy - Święta, weekendy, wakacje',
                    required: true,
                },
                {
                    name: 'classesInLaboratories',
                    type: 'text',
                    label: 'Zajęcia w laboratoriach',
                    required: true,
                },
                {
                    name: 'classesInMajsternia',
                    type: 'text',
                    label: 'Zajęcia w Majsterni',
                    required: true,
                },
                {
                    name: 'planetariumMovies',
                    type: 'text',
                    label: 'Seanse 2D',
                    required: true,
                },
                {
                    name: 'planetariumMovies2DFilmyZNiebaNormal',
                    type: 'text',
                    label: 'Filmy 2D, Prosto z nieba (normalny)',
                    required: true,
                },
                {
                    name: 'planetariumMovies2DFilmyZNiebaHalfPrice',
                    type: 'text',
                    label: 'Filmy 2D, Prosto z nieba (ulgowy)',
                    required: true,
                },
                {
                    name: 'planetariumSpecialShows',
                    type: 'text',
                    label: 'Pokazy specjalne (Bilet ulgowy / normalny)',
                    required: true,
                },
                {
                    name: 'planetariumConcerts',
                    type: 'text',
                    label: 'Koncerty (Bilet ulgowy / normalny)',
                    required: true,
                }
            ]
        },
        {
            name: 'halfPriceTicket',
            type: 'group', 
            interfaceName: 'Komu przysługują bilety ulgowe?', 
            label: 'Komu przysługują bilety ulgowe?', 
            fields: [
                {
                    name: 'list',
                    type: 'array',
                    label: false,
                    required: true,
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Tekst',
                            required: true,
                        },
                    ]
                },
            ],
        },
        {
            name: 'freeTicket',
            type: 'group', 
            interfaceName: 'Komu przysługują darmowe bilety?', 
            label: 'Komu przysługują darmowe bilety?',
            fields: [
                {
                    name: 'list',
                    type: 'array',
                    label: false,
                    required: true,
                    fields: [
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Tekst',
                            required: true,
                        },
                    ]
                },
            ],
        }
    ],
};

export default Pricing;
