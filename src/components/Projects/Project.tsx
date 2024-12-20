import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { IoLogoGithub } from "react-icons/io";
import { MdAdsClick } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";



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
        <div className="h-[12rem] relative box-border border rounded-t-lg">
          <div className='opacity-0 flex items-center justify-center text-cstmclr-400 hover:opacity-20 absolute h-full w-full bg-custom-gradient'>
            <FaRegDotCircle size={35} className='animate-ping'/>
          </div>
          <img
            className="h-[12rem] w-[100%] rounded-t-lg"
            src={cardImage.src}
            alt= "project"
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
