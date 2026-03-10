import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    // ⚠️ Replace with your actual Project ID from sanity.io/manage
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'k48kdllj',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source)
}
