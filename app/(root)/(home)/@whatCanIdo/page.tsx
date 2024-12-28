import React from "react";
import { MdClass } from "react-icons/md";
import InternPositionCard from "@/components/shared/InternPositionCard";
import { InternData, InternPositionData } from "@/assets/textData";

const WhatcanIdo = () => {
  const internData = InternData;
  return (
    <div className="h-fit w-full ">
      <div className="relative flex flex-col items-center max-sm:mx-4 md:m-6 md:my-4 lg:flex-row xl:px-4">
        <div className="flex flex-col pt-16 md:h-[100vh] md:w-full md:pt-20 lg:h-fit lg:max-w-[55vw] lg:pb-8 lg:pl-0 lg:pt-16 xl:max-w-[60vw] ">
          <h1 className="text-3xl font-extrabold text-cstmclr-900 dark:text-cstmclr-300">
            Experience
          </h1>
          <p className="text-sm font-medium text-cstmclr-500 dark:text-cstmclr-600 md:text-base">
            My some learning experience
          </p>

          {internData?.map((data, index) => (
            <div key={index} className=" flex flex-col gap-8">
              <div>
                <h2 className="mb-2 mt-8 flex items-center gap-4 text-xl font-extrabold text-cstmclr-600 hover:animate-bounce hover:text-cstmclr-800  dark:text-cstmclr-500">
                  <MdClass />
                  <p className="text-2xl ">{data?.title} </p>
                </h2>

                <div className="flex flex-col gap-2 text-base font-medium text-cstmclr-500 dark:text-cstmclr-600 ">
                  {data?.description?.map((data, index) => (
                    <p key={index}>{data}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12 mt-20 flex w-full flex-col gap-4 md:flex-row lg:mb-0 lg:max-w-[45vw] lg:flex-col lg:items-end lg:gap-12 xl:mt-auto xl:max-w-[40vw] xl:gap-12">
          {
            InternPositionData?.map((data, index) => (
              <InternPositionCard
                key={index}
                time={data?.time}
                position={data?.position}
                mode={data?.mode}
                link={data?.link}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default WhatcanIdo;
