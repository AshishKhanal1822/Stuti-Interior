export default {
    name: 'about',
    title: 'About Page',
    type: 'document',
    // Only one document of this type should exist
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'intro',
            title: 'Company Introduction',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'mission',
            title: 'Mission Statement',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'vision',
            title: 'Vision Statement',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'stats',
            title: 'Stats (Years, Projects, Satisfaction)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'value', title: 'Value (e.g. 10+)', type: 'string' },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'value' },
                    },
                },
            ],
        },
        {
            name: 'whyChooseUs',
            title: 'Why Choose Us',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'desc', title: 'Description', type: 'text', rows: 2 },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        },
        {
            name: 'images',
            title: 'Gallery Images (4 images)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.max(4),
        },
    ],
    preview: {
        select: { title: 'intro' },
        prepare({ title }) {
            return { title: 'About Page Content', subtitle: title?.slice(0, 60) }
        },
    },
}
