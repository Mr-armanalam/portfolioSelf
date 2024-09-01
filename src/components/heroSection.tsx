import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgArrowLongRight } from "react-icons/cg";
import selfPicture from '../assets/armanhd3.jpeg';

const heroSection = () => {
  return (
    <section className="pt-14 w-full  px-8">
      <div
        className="h-[60vh] mt-4 border-cstmclr-200 shadow
       rounded-lg border bg-white flex
      "
      >
        <div className="mt-10 ml-20 max-w-[55vw]">
          <p className="text-4xl font-extrabold text-cstmclr-800">
            Hey, I'm Arman Alam{" "}
            <span className="text-nowrap hover:text-blue-900">
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

          <div className="flex items-center gap-2 mt-10">
            <button className="bg-cstmclr-700 hover:bg-cstmclr-950 px-4 mr-10 text-cstmclr-200 p-2 rounded font-bold">
              Reach Out
            </button>
            <div className="text-cstmclr-700 flex gap-1 cursor-pointer">
              <CgArrowLongRight className=" hover:text-cstmclr-950" />
              <FaLinkedin className=" hover:text-cstmclr-950" />
              <FaInstagramSquare className=" hover:text-cstmclr-950" />
              <FaFacebookSquare className=" hover:text-cstmclr-950" />
              <FaSquareXTwitter className=" hover:text-cstmclr-950" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto mt-10  max-w-[45vw] h-[50vh]">
          <div className="border text-center border-cstmclr-600 bg-cover relative w-[16rem] h-[16rem] rounded-full ">
            <img
              src={selfPicture.src}
              className=" rounded-full h-[16rem] w-[16rem]"
              alt="my pic "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default heroSection
