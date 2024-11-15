import { Metadata } from 'next';
import React from 'react'

// import resume from "./rersume.jpg"
// import { FaDownload } from "react-icons/fa6";

export const metadata: Metadata = {
  title: 'Arman Alam Resume',
  description: 'Welcome to my Resume page, a detailed snapshot of my professional journey and accomplishments.',
  keywords: ["Resume", "Arman's Resume", "Arman Alam Resume"]
}

const page = () => {
  return (
     <div className="pt-16 relative border h-fit w-full justify-center flex">
      
      {/* <div className='text-cstmclr-700 absolute top-24 lg:right-40 md:right-12 right-4 xl:right-64 text-2xl'>
        <a href="/static/resumepdf.pdf" download="Arman resume"> <FaDownload /></a>
      </div> */}
      {/* <img
        className="self-center h-[100vh] md:w-[70vw] lg:w-[55vw] xl:w-[42vw]"
        src={resume.src}
      /> */}

      <embed 
        color='transparent' 
        className="self-center h-[82vh] md:h-[100vh] w-full" 
        src="/static/resumepdf.pdf" 
        type="application/pdf" 
        width={"100%"} 
        height={"100%"}
      />
    </div>
  );
}

export default page

