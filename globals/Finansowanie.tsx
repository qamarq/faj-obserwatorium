import { GlobalConfig } from 'payload/types';

const Finansowanie: GlobalConfig = {
    slug: 'finansowanie',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'description',
            type: 'textarea',
            required: true,
            label: 'Opis finansowania',
        },
        {
            name: 'value',
            type: 'text',
            required: true,
            label: 'Wartość finansowania',
        },
        {
            name: 'total',
            type: 'text',
            required: true,
            label: 'Całkowita wartość zadania',
        }
    ],
};

export default Finansowanie;
