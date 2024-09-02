import React from 'react';
import youtube from '@/assets/youtube.png'
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

const Project = ({
  cardImage,
  projectName,
  link
}: {
  cardImage: StaticImageData,
  projectName:String,
  link:Url,
}) => {
  return (
    <section className="border min-w-[24rem] bg-white relative flex-1 rounded-lg shadow-md border-cstmclr-300/10 h-auto ">
      <Link href={link}>
        <div className="h-[12rem] box-border  border">
          <img
            className="h-[12rem] w-[100%] rounded-t-lg"
            src={cardImage.src}
          />
        </div>
        <p className="p-2 text-cstmclr-800 font-medium text-sm">
          {projectName}
        </p>
        {/* <div className="absolute border-b rounded-b-lg sh h-8">
        s
      </div> */}
      </Link>
    </section>
  );
};

export default Project
