import { useEffect, useState } from 'react'
import { client } from '@/lib/sanityClient'
import type {
    SanityProject,
    SanityTestimonial,
    SanityService,
    SanityHeroSlide,
    SanityAbout,
} from '@/types/sanity'

// ─── Projects ────────────────────────────────────────────────────────────────

export function useSanityProjects() {
    const [projects, setProjects] = useState<SanityProject[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityProject[]>(
                `*[_type == "project"] | order(order asc) {
          _id, title, category, image, featured, order
        }`
            )
            .then((data) => {
                setProjects(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { projects, loading }
}

export function useSanityFeaturedProjects() {
    const [projects, setProjects] = useState<SanityProject[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityProject[]>(
                `*[_type == "project" && featured == true] | order(order asc) {
          _id, title, category, image, featured, order
        }`
            )
            .then((data) => {
                setProjects(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { projects, loading }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export function useSanityTestimonials() {
    const [testimonials, setTestimonials] = useState<SanityTestimonial[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityTestimonial[]>(
                `*[_type == "testimonial"] | order(order asc) {
          _id, name, location, text, order
        }`
            )
            .then((data) => {
                setTestimonials(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { testimonials, loading }
}

// ─── Services ────────────────────────────────────────────────────────────────

export function useSanityServices() {
    const [services, setServices] = useState<SanityService[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityService[]>(
                `*[_type == "service"] | order(order asc) {
          _id, id, label, order, items
        }`
            )
            .then((data) => {
                setServices(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { services, loading }
}

// ─── Hero Slides ─────────────────────────────────────────────────────────────

export function useSanityHeroSlides() {
    const [slides, setSlides] = useState<SanityHeroSlide[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityHeroSlide[]>(
                `*[_type == "hero"] | order(order asc) {
          _id, title, highlight, description, backgroundImage, order
        }`
            )
            .then((data) => {
                setSlides(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { slides, loading }
}

// ─── About ────────────────────────────────────────────────────────────────────

export function useSanityAbout() {
    const [about, setAbout] = useState<SanityAbout | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch<SanityAbout>(
                `*[_type == "about"][0] {
          _id, intro, mission, vision, stats, whyChooseUs, images
        }`
            )
            .then((data) => {
                setAbout(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    return { about, loading }
}
