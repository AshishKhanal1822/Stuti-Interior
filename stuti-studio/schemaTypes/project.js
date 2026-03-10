export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Residential', value: 'Residential' },
                    { title: 'Commercial', value: 'Commercial' },
                    { title: 'Hospitality', value: 'Hospitality' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'featured',
            title: 'Featured Project?',
            type: 'boolean',
            description: 'Show on the homepage featured section',
            initialValue: false,
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (e.g. 1, 2, 3...)',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
}
