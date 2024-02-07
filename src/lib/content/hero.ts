import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Vaibhav Sachdeva',
    tagline: '',
    description:
    "I'm a software developer with a keen interest in Full Stack Development and Artificial Intelligence. I hold a bachelor's degree in Electronics and Communication Engineering and am currently pursuing a master's in Computer Science and Engineering to deepen my expertise in these evolving fields.",
    specialText: 'Currently open for employment opportunities',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: false,
    },
};