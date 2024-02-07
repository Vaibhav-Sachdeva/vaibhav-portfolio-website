import { AboutSectionType } from '@/lib/types/sections'

export const aboutSection: AboutSectionType = {
    title: 'about me',
    // Paragraphs need to be changed from containers/About.tsx
    // Because it wasn't possible to insert anchor tags like this
    list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
        'Python',
        'JavaScript',
        'React',
        'Node.js',
        'MySQL',
        'MongoDB',
        'Kubernetes',
        'Google Cloud Platform',
        'TensorFlow',
        'PyTorch'
    ],
    },
    img: '/vaibhav-sachdeva.jpg',
};