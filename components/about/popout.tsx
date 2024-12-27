"use client";
import React from "react";
import { GiOpenBook } from "react-icons/gi";

const Popout = () => {
  return (
    <section className="absolute left-2 right-2 top-24 z-[1000] flex h-auto w-auto items-center justify-center  bg-white md:left-1/2 md:top-2/3 md:h-[75vh] md:w-[90vw] md:-translate-x-1/2 md:-translate-y-2/3 ">
      <div className="animated-box1 flex h-auto w-auto flex-col gap-12 rounded-lg border border-cstmclr-200 pb-8 shadow-2xl md:h-[65vh] md:w-[90vw] md:flex-row md:gap-0 md:p-8 md:pb-0 ">
        <h2 className="flex flex-col items-center pt-16 text-3xl font-bold text-cstmclr-800 md:w-2/5 lg:pl-8 lg:pt-8 lg:text-5xl">
          My Qualification
          <GiOpenBook
            size={200}
            className="animate-pulse text-cstmclr-300 md:mt-2  lg:mt-12"
          />
          <p className="-mt-4 ml-4 text-center text-sm text-cstmclr-400">
            Keep learning...
          </p>
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 text-center md:w-3/5">
          <h3 className="text-2xl font-bold text-cstmclr-700 lg:text-3xl">
            <p>Batchelor of technology</p>
            <p className="mt-2 text-base text-cstmclr-300">
              By Government Engineering College West Champaran
            </p>
            <p className="text-xs text-cstmclr-300">
              (Under the Dept. of Science & Technology, Govt of Bihar, Patna)
            </p>
          </h3>
          <h4 className="text-2xl font-bold text-cstmclr-700 lg:text-3xl">
            <p>Diploma</p>
            <p className="mt-2 text-base text-cstmclr-300">
              By Government Polytechnic Motihari
            </p>
            <p className="text-xs text-cstmclr-300">
              (Dept. of Science & Technology, Govt. of Bihar)
            </p>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Popout;
