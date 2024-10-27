import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import { MdClass } from "react-icons/md";

const WhatcanIdo = () => {
  return (
    <div className="w-full h-fit ">
      <div className="md:m-8 mx-4 md:my-4 md:px-8 xl:px-4 lg:flex-row relative flex-col items-center flex">
        <div className="lg:max-w-[55vw] xl:max-w-[60vw] md:w-full  lg:pl-0 lg:pt-16 lg:pb-8 md:pt-20 pt-16 flex flex-col lg:h-fit md:h-[100vh] ">
          <h1 className="text-3xl hover:text-blue-900 text-cstmclr-900 font-extrabold">
            Experience
            {/* Intern with Nullclass{" "} */}
          </h1>
          <p className="text-cstmclr-500 text-sm md:text-base font-medium">
            My some learning experience
          </p>

          <div className=" flex flex-col gap-8">
            <div>
              <h1 className="mt-8  text-cstmclr-600 font-extrabold text-xl flex items-center gap-4 hover:animate-bounce mb-2  hover:text-cstmclr-800">
                <MdClass />
                <p className="text-2xl ">Intern with Nullclass </p>
              </h1>

              <div className="text-cstmclr-500 text-base flex gap-2 flex-col font-medium ">
                <p>
                  Strengthen our skills in ReactJS, Understand Redux for state
                  management, including Redux Thunk for handling asynchronous
                  actions.
                </p>

                <p>
                  Explore Express.js with Node.js also we Performing CRUD
                  operations using Mongoose & implement Json Web Tokens (JWT)
                  for authentication and secure communication.
                </p>

                <p>
                  Upload files to the server and display them on webpages &
                  implement Google Sign-In using Google Authentication API keys
                  to provide seamless user access.
                </p>
              </div>
            </div>

            <div>
              <h1 className="hover:animate-bounce mb-2  hover:text-cstmclr-800 text-cstmclr-600 font-extrabold text-xl flex items-center gap-4">
                <MdClass />
                <p className="text-2xl  "> Intern with Xzect OSPE </p>
              </h1>
              

              <div className="text-cstmclr-500 text-base flex gap-2 flex-col font-medium">
                <p>
                  Created a user-friendly chat interface for interacting with
                  the Gemini model .
                </p>
                <p>
                  Implemented React component-based architecture for efficient
                  UI development.
                </p>
                <p>
                  Include simulated typing effect to enhance the user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[45vw] xl:max-w-[40vw] xl:mt-auto mb-12 lg:mb-0 w-full mt-20 xl:gap-12 gap-4 lg:gap-12 flex lg:items-end flex-col md:flex-row lg:flex-col">
          <div className="border h-[10rem] max-w-full pl-8 lg:ml-20 flex flex-col border-cstmclr-200 shadow-md bg-white rounded-md w-full md:w-[27rem]">
            <p className="text-cstmclr-800  font-bold p-2 hover:text-cstmclr-950 ml-auto text-sm">
              Jun 2024 - 2 months{" "}
            </p>
            <div className="m-2 text-cstmclr-600 font-medium ">
              <p>Position: Full Stack Developer </p>
              <p>Mode: Online / Remote</p>
              <button className="hover:font-bold">
                <Link
                  className="flex items-center hover:bg-cstmclr-950 mt-4 border py-2 px-8 rounded-md bg-cstmclr-800 text-cstmclr-200 gap-4"
                  href="https://github.com/Mr-armanalam/Acube.git"
                >
                  <div className="hover:text-lg">
                    <FaSquareGithub />
                  </div>
                  Github Repo
                </Link>
              </button>
            </div>
          </div>
          <div className=" border h-[10rem] w-max-full pl-8 lg:ml-20 flex flex-col border-cstmclr-200 shadow-md bg-white rounded-md w-full md:w-[27rem]">
            <p className="text-cstmclr-800  font-bold p-2 hover:text-cstmclr-950 ml-auto text-sm">
              Jun 2024 - 2 months{" "}
            </p>
            <div className="m-2 text-cstmclr-600 font-medium ">
              <p>Position: Next.js Developer </p>
              <p>Mode: Online / Remote</p>
              <button className="hover:font-bold">
                <Link
                  className="flex items-center hover:bg-cstmclr-950 mt-4 border py-2 px-8 rounded-md bg-cstmclr-800 text-cstmclr-200 gap-4"
                  href="https://github.com/Mr-armanalam/ChatGemini.git"
                >
                  <div className="hover:text-lg">
                    <FaSquareGithub />
                  </div>
                  Github Repo
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatcanIdo;
