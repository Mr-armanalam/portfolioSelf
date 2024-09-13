import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

const WhatcanIdo = () => {
  return (
    <div className="w-full lg:h-fit h-[95vh]">
      <div className="md:m-8 m-4 md:px-8 lg:flex-row flex-col items-center flex">
        <div className="lg:max-w-[55vw] md:w-full  lg:pl-0 xl:py-20 lg:py-16 pt-20 gap-8 flex flex-col lg:h-fit md:h-[100vh] ">
          <h1 className="text-3xl hover:text-cstmclr-950 text-cstmclr-800 font-extrabold">
            {" "}
            Intern with Nullclass{" "}
          </h1>
          <div className="text-cstmclr-500 flex gap-2 flex-col font-medium">
            <p>
              Strengthen our skills in ReactJS, Understand Redux for state
              management, including Redux Thunk for handling asynchronous
              actions.
            </p>

            <p>
              Explore Express.js with Node.js also we Performing CRUD operations
              using Mongoose & implement Json Web Tokens (JWT) for
              authentication and secure communication.
            </p>

            <p>
              Upload files to the server and display them on webpages &
              implement Google Sign-In using Google Authentication API keys to
              provide seamless user access.
            </p>
          </div>

          <h1 className="text-3xl hover:text-cstmclr-950 text-cstmclr-800 font-extrabold">
            Interm with Xzect OSPE{" "}
          </h1>
          <div className="text-cstmclr-500 flex gap-2 flex-col font-medium">
            <p>
              Created a user-friendly chat interface for interacting with the
              Gemini model .
            </p>
            <p>
              Implemented React component-based architecture for efficient UI
              development.
            </p>
            <p>
              Include simulated typing effect to enhance the user experience.
            </p>
          </div>
        </div>
        <div className="lg:max-w-[45vw] mb-12 lg:mb-0 w-full mt-20 xl:gap-12 gap-4 lg:gap-12 flex lg:items-end flex-col md:flex-row lg:flex-col">
          <div className="border h-[10rem] max-w-full pl-8 lg:ml-20 flex flex-col border-cstmclr-200 shadow-md bg-white rounded-md w-full md:w-[27rem]">
            <p className="text-cstmclr-800  font-bold p-2 hover:text-cstmclr-950 ml-auto text-sm">
              Jun 2024 - 2 months{" "}
            </p>
            <div className="m-2 text-cstmclr-600 font-medium ">
              <p>Position: Full Stack Developer </p>
              <p>Mode: Online / Remote</p>
              <button>
                <Link
                  className="flex items-center hover:bg-cstmclr-950 mt-4 border py-2 px-8 rounded-md bg-cstmclr-800 text-cstmclr-200 gap-4"
                  href="https://github.com/Mr-armanalam/Acube.git"
                >
                  <div>
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
              <button>
                <Link
                  className="flex items-center hover:bg-cstmclr-950 mt-4 border py-2 px-8 rounded-md bg-cstmclr-800 text-cstmclr-200 gap-4"
                  href="https://github.com/Mr-armanalam/ChatGemini.git"
                >
                  <div>
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
