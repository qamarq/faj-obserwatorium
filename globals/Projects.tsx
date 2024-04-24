import { GlobalConfig } from 'payload/types';

const Projects: GlobalConfig = {
    slug: 'projects',
    access: {
        read: () => true,
    },
    admin: {
        preview: () => { return `/projekty` },
    },
    
    fields: [
        {
            name: 'items',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'year', // required
                    type: 'text',
                    label: 'Rok realizacji',
                    required: true,
                },
                {
                    name: 'year_items',
                    label: 'Projekty',
                    type: 'array',
                    required: true,
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            label: 'Zdjęcie',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'title',
                            type: 'text',
                            label: 'Tytuł',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                            label: 'Opis',
                            required: true,
                        },
                        {
                            name: 'participants',
                            type: 'number',
                            label: 'Liczba uczestników',
                            required: true,
                        }
                    ]
                }
            ],
        },
    ],
};

export default Projects;
