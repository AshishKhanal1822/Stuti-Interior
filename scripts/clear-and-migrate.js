import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
    projectId: 'k48kdllj',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: 'skbeKcHR3XkFTveqn64Kfhlgi45T7jiUQSnduaByKQ5mFmh1exfozd6sD9SVkHbaFFzJ3x0OftN9VQCzKqOXwXuuzRrMnnHysVgIOI6hIqb0jaXB29rxypKQ50tZLDVpaP0rRA2RL83yAXNxvpQpaYPhRuh3Kk9SB9c7ICku7vriCu551TX4'
});

async function uploadImage(filePath) {
    try {
        const absolutePath = path.resolve(__dirname, '../src/assets', filePath);
        const imageAsset = await client.assets.upload('image', fs.createReadStream(absolutePath), {
            filename: path.basename(absolutePath)
        });
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: imageAsset._id
            }
        };
    } catch (error) {
        console.error(`Failed to upload image ${filePath}:`, error.message);
        return null;
    }
}

async function clearAndMigrate() {
    console.log('Clearing old duplicated data...');

    // Delete all existing documents so we don't have duplicates
    try {
        await client.delete({ query: '*[_type in ["project", "service", "testimonial", "hero", "about"]]' });
        console.log('Successfully cleared old data.');
    } catch (err) {
        console.error('Error clearing data:', err.message);
    }

    console.log('Starting fresh migration...');
    const images = {
        project1: await uploadImage('project-1.jpg'),
        project2: await uploadImage('project-2.jpg'),
        project3: await uploadImage('project-3.jpg'),
        project4: await uploadImage('project-4.jpg'),
        hero1: await uploadImage('hero-1.jpg'),
        hero2: await uploadImage('hero-2.jpg'),
        hero3: await uploadImage('hero-3.jpg'),
        about1: await uploadImage('about-1.jpg'),
        about2: await uploadImage('about-2.jpg')
    };

    // 1. Migrate Testimonials
    const testimonials = [
        { name: "Satish Sharma", location: "Lalitpur", text: "I am amazed by the transformation that Stuti Infra brought to my space. They took a dull and outdated space and turned it into a modern and inviting area that my family and I love spending time in." },
        { name: "Bhupendra Yadav", location: "Kathmandu", text: "Working with Stuti Infra was an absolute pleasure! Their team truly understood my vision and transformed my space into a stunning and functional environment. The attention to detail exceeded my expectations." },
        { name: "Bishnu Sanjel", location: "Bhaktapur", text: "I cannot express how thrilled I am with the results of my home renovation by Stuti Infra. From the initial consultation to the final reveal, their team guided me through every step with ease." }
    ];

    for (let i = 0; i < testimonials.length; i++) {
        const t = testimonials[i];
        await client.create({
            _type: 'testimonial',
            name: t.name,
            location: t.location,
            text: t.text,
            order: i + 1
        });
    }

    // 2. Migrate Services
    const services = [
        {
            id: { _type: 'slug', current: 'furnishing' },
            label: "Workspace Furnishing Solutions",
            items: [
                { _key: '1', num: "01", title: "Office partitions (glass / wooden / modular)" },
                { _key: '2', num: "02", title: "Workstations and office tables" },
                { _key: '3', num: "03", title: "Conference and meeting tables" },
                { _key: '4', num: "04", title: "Reception desks" },
                { _key: '5', num: "05", title: "Storage units and drawers" },
                { _key: '6', num: "06", title: "Notice boards and display boards" }
            ]
        },
        {
            id: { _type: 'slug', current: 'modular' },
            label: "Modular Furniture and Custom Fabrication",
            items: [
                { _key: '1', num: "01", title: "Custom office furniture" },
                { _key: '2', num: "02", title: "Cabinets and file storage systems" },
                { _key: '3', num: "03", title: "Wall-mounted units" },
                { _key: '4', num: "04", title: "Modular desks" },
                { _key: '5', num: "05", title: "Customized shelving solutions" }
            ]
        },
        {
            id: { _type: 'slug', current: 'planning' },
            label: "Interior Space Planning and Layout Support",
            items: [
                { _key: '1', num: "01", title: "Basic layout planning" },
                { _key: '2', num: "02", title: "Space optimization solutions" },
                { _key: '3', num: "03", title: "Functional design suggestions" },
                { _key: '4', num: "04", title: "Material selection guidance" }
            ]
        },
        {
            id: { _type: 'slug', current: 'turnkey' },
            label: "Turnkey Infrastructure Setup",
            items: [
                { _key: '1', num: "01", title: "Site measurement and consultation" },
                { _key: '2', num: "02", title: "Material procurement" },
                { _key: '3', num: "03", title: "Installation and finishing" },
                { _key: '4', num: "04", title: "Project supervision" },
                { _key: '5', num: "05", title: "On-time delivery and handover" }
            ]
        }
    ];

    for (let i = 0; i < services.length; i++) {
        const s = services[i];
        await client.create({
            _type: 'service',
            id: s.id,
            label: s.label,
            items: s.items,
            order: i + 1
        });
    }

    // 3. Migrate Projects
    const projects = [
        { image: images.project1, title: "Luxury Restaurant", category: "Hospitality" },
        { image: images.project2, title: "Modern Apartment", category: "Residential" },
        { image: images.project3, title: "Grand Hotel Lobby", category: "Hospitality" },
        { image: images.project4, title: "Spa Bathroom", category: "Residential" },
        { image: images.hero1, title: "Premium Master Bedroom", category: "Residential" },
        { image: images.hero2, title: "Executive Office Suite", category: "Commercial" },
        { image: images.hero3, title: "Modern Kitchen Island", category: "Residential" },
        { image: images.about1, title: "Boutique Retail Space", category: "Commercial" },
        { image: images.about2, title: "Chic Cafe Interior", category: "Hospitality" },
        { image: images.project1, title: "Urban Penthouse", category: "Residential" },
        { image: images.project2, title: "Minimalist Studio", category: "Residential" },
        { image: images.project3, title: "Classic Library", category: "Residential" }
    ];

    for (let i = 0; i < projects.length; i++) {
        const p = projects[i];
        await client.create({
            _type: 'project',
            title: p.title,
            category: p.category,
            image: p.image,
            featured: i < 4,
            order: i + 1
        });
    }

    // 4. Migrate Hero Slides
    const heroSlides = [
        {
            image: images.hero1,
            title: "Transform Your Space with",
            highlight: "Interior Design",
            description: "Our passion is creating interior spaces that inspire, elevate, and seamlessly turn ordinary places into remarkable havens of comfort and beauty.",
        },
        {
            image: images.hero2,
            title: "Discover the Art of",
            highlight: "Creating Spaces that Inspire",
            description: "The art of harmonizing colors, textures, and materials, as we craft personalized designs tailored to your unique vision.",
        },
        {
            image: images.hero3,
            title: "Transform Your Space,",
            highlight: "Transform Your Life",
            description: "Let us expertly transform your space into a reflection of your unique personality and lifestyle.",
        }
    ]

    for (let i = 0; i < heroSlides.length; i++) {
        const h = heroSlides[i];
        await client.create({
            _type: 'hero',
            title: h.title,
            highlight: h.highlight,
            description: h.description,
            backgroundImage: h.image,
            order: i + 1
        });
    }

    // 5. Migrate About Page
    await client.create({
        _type: 'about',
        mission: "To deliver durable and innovative workspace solutions that combine practical design with strong execution, ensuring customer satisfaction and long-term value.",
        vision: "To build a trusted brand that delivers complete space solutions from furnishing to interior enhancement with innovation and integrity.",
        intro: "Stuti Infra is a premier interior design & construction company. We specialize in customized furnishing solutions including partitions, tables, storage systems, and complete workspace setups, delivering functionality, durability, and smart space utilization.",
        whyChooseUs: [
            { _key: '1', title: "Specialized in Furnishing Solutions", desc: "Experts in partitions, tables, storage systems, boards, and complete workspace infrastructure." },
            { _key: '2', title: "Practical & Functional Designs", desc: "We focus on smart space utilization, ensuring every area is organized and efficient." },
            { _key: '3', title: "On-Time Project Delivery", desc: "We value your time and ensure timely completion without compromising quality." }
        ],
        stats: [
            { _key: '1', label: "Years of Excellence", value: "10+" },
            { _key: '2', label: "Projects Completed", value: "500+" },
            { _key: '3', label: "Client Satisfaction", value: "100%" }
        ],
        images: [images.about1, images.about2, images.hero1, images.hero2].filter(Boolean)
    });

    console.log('Migration complete! All clean and fresh.');
}

clearAndMigrate().catch(console.error);
