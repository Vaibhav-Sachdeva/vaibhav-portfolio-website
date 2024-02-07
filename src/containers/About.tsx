'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p className='text-justify'>
            Hi, I am Vaibhav Sachdeva, a tech enthusiast pursuing a Master's degree in Computer Science and Engineering at Santa Clara University, after earning a Bachelor's degree in Electronics and Communication Engineering with a minor in Big Data Analytics from Shiv Nadar University.
          </p>
          <p className = 'text-justify'>
          Throughout my academic journey, my passion for technology has grown exponentially, driven by the belief that it holds the potential to positively impact society. As a dedicated learner, I am constantly driven to explore new technologies and expand my knowledge and skill set.
          </p>
          <p className='text-justify'>
          I am highly motivated to constantly explore new opportunities where I can apply my knowledge and skills to tackle complex challenges and drive meaningful change. My academic journey, work experience, and diverse skill set have shaped me into a determined and passionate individual ready to make valuable contributions in the dynamic landscape of technology.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
