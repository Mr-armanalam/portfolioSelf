/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { IoLogoGithub } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";

const Project = ({
  cardImage,
  projectName,
  link,
  gitlink,
}: {
  cardImage: StaticImageData;
  projectName: string;
  link: Url;
  gitlink: Url;
}) => {
  return (
    <section className="animated-box relative h-auto min-w-[20rem] flex-1 rounded-lg border border-cstmclr-300/10 bg-white shadow-md lg:min-w-[24rem] ">
      <Link href={link}>
        <div className="relative box-border h-[12rem] rounded-t-lg border">
          <div className="absolute flex h-full w-full items-center justify-center bg-custom-gradient text-cstmclr-400 opacity-0 hover:opacity-20">
            <FaRegDotCircle size={35} className="animate-ping" />
          </div>
          <img
            className="h-[12rem] w-[100%] rounded-t-lg"
            src={cardImage.src}
            alt="project"
          />
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <p className="p-2 text-sm font-medium text-cstmclr-800 hover:font-semibold">
          {projectName}
        </p>
        <div className="mr-3 flex items-center gap-1 text-cstmclr-700">
          <Link href={gitlink}>
            <IoLogoGithub
              size={17}
              className="hover:animate-pulse hover:text-cstmclr-900"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
