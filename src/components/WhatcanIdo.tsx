import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

const WhatcanIdo = () => {
  return (
    <div className="w-full h-[95vh]">
      <div className="m-8 items-center flex">
        <div className="max-w-[55vw] pl-8 pt-20 gap-8 flex flex-col h-[100vh] ">
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
        <div className="max-w-[45vw] mt-20 gap-12 flex flex-col">
          <div className="border h-[10rem] w-max-full pl-8 ml-20  flex flex-col border-cstmclr-200 shadow-md bg-white rounded-md w-[27rem]">
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
          <div className=" border h-[10rem] w-max-full pl-8 ml-20 flex flex-col border-cstmclr-200 shadow-md bg-white rounded-md w-[27rem]">
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
