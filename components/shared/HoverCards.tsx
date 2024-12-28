/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaRegCircle } from "react-icons/fa";
import { ServicehoverData } from "@/assets/servicedata";

const HoverCards = ({
  serviceTitle,
  Framework,
}: {
  serviceTitle?: string;
  Framework?: string;
}) => {
  const Data: any = ServicehoverData(serviceTitle);
  return (
    <HoverCard>
      <HoverCardTrigger className="flex cursor-pointer items-center gap-2 rounded-2xl border-2 border-cstmclr-400 from-black to-gray-900 p-3 text-sm font-medium text-cstmclr-600 hover:bg-cstmclr-900 hover:text-cstmclr-50 dark:text-cstmclr-300 dark:hover:bg-gradient-to-r">
        {serviceTitle}
        <FaRegCircle className="animate-pulse text-cstmclr-400" />
      </HoverCardTrigger>
      <HoverCardContent className="mt-2 w-[17rem] rounded-2xl border-2 border-cstmclr-300 text-xs font-medium text-cstmclr-600 dark:text-cstmclr-300">
        <div className="flex flex-col gap-1">
          <p className="line-clamp-1 text-base font-bold">
            Developed with : {Framework}
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-2 ">
            {Data.map((item: any, index: any) => (
              <li key={index} className="hover:animate-bounce">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCards;
