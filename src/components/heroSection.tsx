import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgArrowLongRight } from "react-icons/cg";
import selfPicture from '../assets/armanhd3.jpeg';
import Link from 'next/link';

const heroSection = () => {
  return (
    <section className="pt-14 lg:pt-16 w-full px-2 md:px-8">
      <div
        className="h-fit lg:items-center xl:py-2 mt-4 text-center md:text-left border-cstmclr-200 shadow
       md:rounded-lg rounded-xl border bg-white flex md:flex-row flex-col
      "
      >
        <div className="mt-10 lg:my-auto xl:ml-20 lg:ml-12 md:ml-8 mx-4  w-fit md:max-w-[55vw]">
          <p className="text-4xl font-extrabold text-cstmclr-800">
            Hey, I'm Arman Alam{" "}
            <span className="md:text-nowrap hover:text-blue-900">
              Full-Stack Web Developer
            </span>
          </p>

          <p className="mt-8 text-cstmclr-500 ">
            A passionate and dedicated developer with experienced in building
            dynamic and responsive web applications. My expertise lies in the{" "}
            <span className="font-bold hover:text-blue-900">MERN Stack</span>{" "}
            (MongoDB, Express.js, React, Node.js) and also I have a strong
            foundation in Next.js.{" "}
          </p>

          <div className="flex md:mb-4 lg:mb-0 justify-center md:justify-start items-center gap-2 mt-10">
            <button className="bg-cstmclr-700 hover:bg-cstmclr-950 px-4 mr-10 text-cstmclr-200 p-2 rounded font-bold">
              Reach Out
            </button>
            <div className="text-cstmclr-700 items-center flex gap-1 cursor-pointer">
              <Link href={""}>
                <CgArrowLongRight className=" hover:text-cstmclr-950 hover:text-lg" />
              </Link>
              <Link href={"https://www.linkedin.com/in/arman-alam-39475b269/"}>
                <FaLinkedin className=" hover:text-cstmclr-950 hover:text-lg" />
              </Link>
              <Link href={"https://www.instagram.com/arman91174"}>
                <FaInstagramSquare className=" hover:text-cstmclr-950 hover:text-lg" />
              </Link>
              <Link href={"https://www.facebook.com/arman78578"}>
                <FaFacebookSquare className=" hover:text-cstmclr-950 hover:text-lg" />
              </Link>
              <Link href={"https://x.com/armanalam78578"}>
                <FaSquareXTwitter className=" hover:text-cstmclr-950 hover:text-lg" />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex justify-center mb-12 md:mb-0 mx-auto mt-10 md:my-auto w-fit md:max-w-[45vw] md:h-[50vh]">
          <div className="border text-center md:my-auto border-cstmclr-600 bg-cover relative xl:w-[18rem] xl:h-[18rem] lg:h-[16rem] lg:w-[16rem] md:h-[10rem] md:w-[10rem] w-[14rem] h-[14rem] rounded-full ">
            <img
              src={selfPicture.src}
              className=" rounded-full xl:w-[18rem] xl:h-[18rem] lg:h-[16rem] lg:w-[16rem] md:h-[10rem] md:w-[10rem] h-[14rem] w-[14rem]"
              alt="my pic "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default heroSection

