export default {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'text',
            title: 'Testimonial Text',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().min(20),
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'location',
        },
    },
}
