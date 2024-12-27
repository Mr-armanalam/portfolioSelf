import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import { MdClass } from "react-icons/md";

const WhatcanIdo = () => {
  return (
    <div className="h-fit w-full ">
      <div className="relative flex flex-col items-center max-sm:mx-4 md:m-6 md:my-4 lg:flex-row xl:px-4">
        <div className="flex flex-col pt-16 md:h-[100vh] md:w-full md:pt-20 lg:h-fit lg:max-w-[55vw] lg:pb-8 lg:pl-0 lg:pt-16 xl:max-w-[60vw] ">
          <h1 className="text-3xl font-extrabold text-cstmclr-900 hover:text-blue-900">
            Experience
          </h1>
          <p className="text-sm font-medium text-cstmclr-500 md:text-base">
            My some learning experience
          </p>

          <div className=" flex flex-col gap-8">
            <div>
              <h2 className="mb-2  mt-8 flex items-center gap-4 text-xl font-extrabold text-cstmclr-600 hover:animate-bounce  hover:text-cstmclr-800">
                <MdClass />
                <p className="text-2xl ">Intern with Nullclass </p>
              </h2>

              <div className="flex flex-col gap-2 text-base font-medium text-cstmclr-500 ">
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
              <h3 className="mb-2 flex  items-center gap-4 text-xl font-extrabold text-cstmclr-600 hover:animate-bounce hover:text-cstmclr-800">
                <MdClass />
                <p className="text-2xl  "> Intern with Xzect OSPE </p>
              </h3>

              <div className="flex flex-col gap-2 text-base font-medium text-cstmclr-500">
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
        <div className="mb-12 mt-20 flex w-full flex-col gap-4 md:flex-row lg:mb-0 lg:max-w-[45vw] lg:flex-col lg:items-end lg:gap-12 xl:mt-auto xl:max-w-[40vw] xl:gap-12">
          <div className="flex h-[10.5rem] w-full max-w-full flex-col rounded-md border border-cstmclr-200 bg-white pl-8 shadow-md md:w-[27rem] lg:ml-20">
            <p className="ml-auto  p-2 text-sm font-bold text-cstmclr-800 hover:text-cstmclr-950">
              Jun 2024 - 2 months{" "}
            </p>
            <div className="m-2 font-medium text-cstmclr-600 ">
              <p>Position: Full Stack Developer </p>
              <p>Mode: Online / Remote</p>
              <button className="hover:font-bold">
                <Link
                  className="mt-4 flex items-center gap-4 rounded-md border bg-cstmclr-800 px-8 py-2 text-cstmclr-200 hover:bg-cstmclr-950"
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
          <div className=" w-max-full flex h-[10.5rem] w-full flex-col rounded-md border border-cstmclr-200 bg-white pl-8 shadow-md md:w-[27rem] lg:ml-20">
            <p className="ml-auto  p-2 text-sm font-bold text-cstmclr-800 hover:text-cstmclr-950">
              Jun 2024 - 2 months{" "}
            </p>
            <div className="m-2 font-medium text-cstmclr-600 ">
              <p>Position: Next.js Developer </p>
              <p>Mode: Online / Remote</p>
              <button className="hover:font-bold">
                <Link
                  className="mt-4 flex items-center gap-4 rounded-md border bg-cstmclr-800 px-8 py-2 text-cstmclr-200 hover:bg-cstmclr-950"
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
