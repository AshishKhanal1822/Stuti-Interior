export default {
    name: 'hero',
    title: 'Hero Slides',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (before the highlight)',
            type: 'string',
            description: 'E.g. "Transform Your Space with"',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'highlight',
            title: 'Highlight Text (shown in gold)',
            type: 'string',
            description: 'E.g. "Interior Design"',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'order',
            title: 'Slide Order',
            type: 'number',
            description: 'Lower numbers appear first (1, 2, 3...)',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'highlight',
            media: 'backgroundImage',
        },
    },
}
