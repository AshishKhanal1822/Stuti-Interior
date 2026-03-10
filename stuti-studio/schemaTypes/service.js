export default {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Tab ID',
            type: 'slug',
            description: 'A unique key like "furnishing" or "modular" (no spaces)',
            options: { source: 'label' },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'label',
            title: 'Tab Label',
            type: 'string',
            description: 'The button text shown on the Services section',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (1, 2, 3...)',
        },
        {
            name: 'items',
            title: 'Service Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'num', title: 'Number (e.g. 01)', type: 'string' },
                        { name: 'title', title: 'Item Title', type: 'string' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'num' },
                    },
                },
            ],
            validation: (Rule) => Rule.min(1),
        },
    ],
    preview: {
        select: {
            title: 'label',
        },
    },
}
