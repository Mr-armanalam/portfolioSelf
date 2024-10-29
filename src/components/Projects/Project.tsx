import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { IoLogoGithub } from "react-icons/io";


const Project = ({
  cardImage,
  projectName,
  link,
  gitlink
}: {
  cardImage: StaticImageData,
  projectName:String,
  link:Url,
  gitlink: Url 
}) => {
  return (
    <section className="border min-w-[20rem] animated-box lg:min-w-[24rem] bg-white relative flex-1 rounded-lg shadow-md border-cstmclr-300/10 h-auto ">
      <Link href={link}>
        <div className="h-[12rem] box-border border rounded-t-lg">
          <img
            className="h-[12rem] w-[100%] rounded-t-lg"
            src={cardImage.src}
          />
        </div>
      </Link>

      <div className='flex justify-between items-center'>
        <p className="p-2 text-cstmclr-800 hover:font-semibold font-medium text-sm">
        {projectName}
        </p>
        <div className='flex items-center gap-1 text-cstmclr-700 mr-3'>
          <Link href={gitlink}><IoLogoGithub size={17} className='hover:text-cstmclr-900 hover:animate-pulse'/></Link>
        </div>
      </div>
    </section>
  );
};

export default Project
