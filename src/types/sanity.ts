// Sanity document types - match your schemas exactly

export interface SanityImage {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
    hotspot?: {
        x: number
        y: number
        height: number
        width: number
    }
}

export interface SanityProject {
    _id: string
    title: string
    category: string
    image: SanityImage
    featured: boolean
    order?: number
}

export interface SanityTestimonial {
    _id: string
    name: string
    location: string
    text: string
    order?: number
}

export interface SanityServiceItem {
    num: string
    title: string
}

export interface SanityService {
    _id: string
    id: { current: string }
    label: string
    order?: number
    items: SanityServiceItem[]
}

export interface SanityHeroSlide {
    _id: string
    title: string
    highlight: string
    description: string
    backgroundImage: SanityImage
    order?: number
}

export interface SanityAbout {
    _id: string
    intro: string
    mission: string
    vision: string
    stats: { label: string; value: string }[]
    whyChooseUs: { title: string; desc: string }[]
    images: SanityImage[]
}
