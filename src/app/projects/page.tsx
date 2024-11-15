import React from 'react'
import Projects from '@/components/Projects/Projects'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects',
  description: 'Here are some of my projects that I have worked on',
  keywords: [ "Projects", "clone", "chat app clone", "youtube clone", "Arman Alam's projects" ],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/projects",
    images: "/project_page.png",
  },
}
const page = () => {
  return (
      <main className="pt-16 ">
        <Projects moreProject={true}/>
      </main>
  );
}

export default page
