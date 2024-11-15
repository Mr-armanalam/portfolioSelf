import React from 'react'
import Projects from '@/components/Projects/Projects'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Here are some of my projects that I have worked on',
  keywords: [ "Projects", "clone", "chat app clone", "youtube clone", "Arman Alam's projects" ]
}
const page = () => {
  return (
      <div className="pt-16">
        <Projects />
      </div>
  );
}

export default page
