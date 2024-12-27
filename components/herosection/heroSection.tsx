/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import { CgArrowLongRight } from "react-icons/cg";
// import selfPicture from '../../assets/armanhd3.jpeg';
import selfPicture from "../../assets/armanhd3_enhanced.jpeg";
import Link from "next/link";

const heroSection = () => {
  return (
    <section className="w-full px-2  pt-14 md:px-8 lg:pt-16">
      <div
        className="animated-box1 mt-4 flex h-fit flex-col rounded-xl border border-cstmclr-200 bg-white
       text-center shadow md:flex-row md:rounded-lg md:text-left lg:items-center xl:py-2
      "
      >
        <div className="mx-4 mt-10 w-fit md:ml-8 md:max-w-[55vw] lg:my-auto  lg:ml-12 xl:ml-20">
          <p className="text-2xl font-extrabold text-cstmclr-800 md:text-4xl">
            Hey, I&apos;m Arman Alam{" "}
            <span className="hover:text-blue-900 md:text-nowrap">
              Full-Stack Web Developer
            </span>
          </p>

          <p className="mt-8 text-sm text-cstmclr-500 md:text-base ">
            A passionate and dedicated developer with experienced in building
            dynamic and responsive web applications. My expertise lies in the{" "}
            <span className="font-bold hover:text-blue-900">MERN Stack</span>{" "}
            (MongoDB, Express.js, React, Node.js) and also I have a strong
            foundation in Next.js.{" "}
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 md:mb-4 md:justify-start lg:mb-0">
            <button className="mr-10 rounded bg-cstmclr-700 p-2 px-4 text-sm font-bold text-cstmclr-200 hover:bg-cstmclr-950 md:text-base">
              Reach Out
            </button>
            <div className="flex cursor-pointer items-center gap-1 text-cstmclr-700">
              <Link href={""}>
                <CgArrowLongRight className=" hover:text-lg hover:text-cstmclr-950" />
              </Link>
              <Link href={"https://www.linkedin.com/in/mrarmanalam"}>
                <FaLinkedin className=" hover:text-lg hover:text-cstmclr-950" />
              </Link>
              <Link href={"https://www.instagram.com/arman91174"}>
                <FaInstagramSquare className=" hover:text-lg hover:text-cstmclr-950" />
              </Link>
              <Link href={"https://www.facebook.com/arman78578"}>
                <FaFacebookSquare className=" hover:text-lg hover:text-cstmclr-950" />
              </Link>
              <Link href={"https://x.com/armanalam78578"}>
                <FaSquareXTwitter className=" hover:text-lg hover:text-cstmclr-950" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-12 mt-10 w-fit justify-center md:my-auto md:mb-0 md:flex md:h-[50vh] md:max-w-[45vw]">
          <div className="relative h-[14rem] w-[14rem] rounded-full border border-cstmclr-600 bg-cover text-center md:my-auto md:h-[10rem] md:w-[10rem] lg:h-[16rem] lg:w-[16rem] xl:h-[18rem] xl:w-[18rem] ">
            <img
              src={selfPicture.src}
              className=" h-[14rem] w-[14rem] rounded-full md:h-[10rem] md:w-[10rem] lg:h-[16rem] lg:w-[16rem] xl:h-[18rem] xl:w-[18rem]"
              alt="my pic "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default heroSection;
