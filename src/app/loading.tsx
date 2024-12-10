import React from "react";
export default function Loading() {
  return (
    <section className="pt-14 h-[93vh] lg:pt-16  w-full px-2 md:px-8">
      <div
        className=" h-[25rem] animated-box2 lg:items-center xl:py-2 mt-4 text-center md:text-left border-cstmclr-200 shadow
       md:rounded-lg rounded-xl border bg-white flex md:flex-row flex-col
      "
      >
        <div className="mt-10 lg:my-auto xl:ml-20 lg:ml-12 md:ml-8 mx-4 gap-8 flex flex-col w-fit md:max-w-[55vw]">
          <div className="w-[30rem] animated-box1 rounded-lg bg-cstmclr-100 h-[5rem] "></div>
          <div className="w-[50rem] animated-box1 rounded-lg bg-cstmclr-100 h-[5rem] "></div>
          <div className="w-[30rem] flex gap-8  h-[5rem] ">
            <div className="w-[10rem] animated-box1 rounded-lg bg-cstmclr-100 mt-auto h-10"></div>
            <div className="w-[10rem] animated-box1 rounded-lg bg-cstmclr-100 mt-auto h-10"></div>
          </div>
        </div>
        <div className="rounded-full bg-cstmclr-100 w-[20rem] ml-auto mr-16 h-[20rem]"></div>
      </div>
    </section>
  );
}
