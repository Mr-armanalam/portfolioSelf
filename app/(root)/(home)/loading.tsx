import React from "react";
export default function Loading () {
  return (
    <section className="h-[93vh] w-full px-2  pt-14 md:px-8 lg:pt-16">
      <div
        className=" animated-box2 mt-4 flex h-[25rem] flex-col rounded-xl border border-cstmclr-200 bg-white
     text-center shadow dark:border-[#151515] md:flex-row md:rounded-lg md:text-left lg:items-center xl:py-2
    "
      >
        <div className="mx-4 mt-10 flex w-fit flex-col gap-8 md:ml-8 md:max-w-[55vw] lg:my-auto lg:ml-12 xl:ml-20">
          <div className="animated-box4 h-[5rem] w-[30rem] rounded-lg bg-cstmclr-100"></div>
          <div className="animated-box4 h-[5rem] w-[50rem] rounded-lg bg-cstmclr-100 "></div>
          <div className="flex h-[5rem] w-[30rem]  gap-8 ">
            <div className="animated-box4 mt-auto h-10 w-[10rem] rounded-lg bg-cstmclr-100"></div>
            <div className="animated-box4 mt-auto h-10 w-[10rem] rounded-lg bg-cstmclr-100"></div>
          </div>
        </div>
        <div className="ml-auto mr-16 h-[20rem] w-[20rem] rounded-full bg-cstmclr-100 dark:bg-[#0d0d0d]"></div>
      </div>
    </section>
  );
}
