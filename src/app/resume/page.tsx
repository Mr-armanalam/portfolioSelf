import React from 'react'
import resume from "./rersume.jpg"
import { FaDownload } from "react-icons/fa6";

const page = () => {
  return (
    <div className="pt-20 relative border h-fit w-full justify-center flex">
      <div className='text-cstmclr-700 absolute top-24 lg:right-40 md:right-12 right-4 xl:right-64 text-2xl'>
        <a href={resume.src} download="Arman resume"> <FaDownload /></a>
      </div>
      <img
        className="self-center h-[100vh] md:w-[70vw] lg:w-[55vw] xl:w-[42vw]"
        src={resume.src}
      />
    </div>
  );
}

export default page

