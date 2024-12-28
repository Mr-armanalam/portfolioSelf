import Link from "next/link";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

interface props {
  time: string;
  position: string;
  mode: string;
  link: string;
}
const InternPositionCard = ({ time, position, mode, link }: props) => {
  return (
    <div className=" w-max-full flex h-[10.5rem] w-full flex-col rounded-md border border-cstmclr-200 bg-white pl-8 shadow-md dark:border-cstmclr-800 dark:bg-black md:w-[27rem] lg:ml-20">
      <p className="ml-auto  p-2 text-sm font-bold text-cstmclr-800 hover:text-cstmclr-950">
        {time}
      </p>
      <div className="m-2 font-medium text-cstmclr-600 ">
        <p>{position} </p>
        <p>{mode}</p>
        <button className="hover:font-bold">
          <Link
            className="mt-4 flex items-center gap-4 rounded-md border bg-cstmclr-800 px-8 py-2 text-cstmclr-200 hover:bg-cstmclr-950 dark:bg-zinc-900"
            href={link}
          >
            <div className="hover:text-lg">
              <FaSquareGithub />
            </div>
            Github Repo
          </Link>
        </button>
      </div>
    </div>
  );
};

export default InternPositionCard;
