import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'I am currently on the lookout for a full-time position or any fresh opportunities. ',
    'Whether you have an exciting project to discuss or simply want to reach out, feel free to drop me a message – my inbox is open for any and all interactions!',
    ],
    link: `mailto:${author.email}`,
};