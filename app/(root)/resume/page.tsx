import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Arman Alam Resume',
  description: 'Welcome to my Resume page, a detailed snapshot of my professional journey and accomplishments.',
  keywords: ["Resume", "Arman's Resume", "Arman Alam Resume"],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/resume",
    images: "/resume_page.png",
  },
}

const page = () => {
  return (
     <main className="pt-16 relative border h-fit w-full justify-center flex">
      <embed 
        color='transparent' 
        className="self-center h-[82vh] md:h-[100vh] w-full" 
        src="/static/resumepdf.pdf" 
        type="application/pdf" 
        width={"100%"} 
        height={"100%"}
      />
    </main>
  );
}

export default page

