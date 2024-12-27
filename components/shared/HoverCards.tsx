import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card";
import { FaRegCircle } from "react-icons/fa";
import { ServicehoverData } from "@/assets/servicedata";


const HoverCards = ({serviceTitle, Framework }: {serviceTitle?: string; Framework?: string;}) => {
  const Data:any = ServicehoverData(serviceTitle);
  return(
    <HoverCard>
      <HoverCardTrigger className="flex gap-2 items-center border-cstmclr-400 hover:bg-cstmclr-900 hover:text-cstmclr-50 cursor-pointer border-2 p-3 rounded-2xl text-sm text-cstmclr-600 font-medium">
        {serviceTitle}
        <FaRegCircle className="animate-pulse text-cstmclr-400" />
      </HoverCardTrigger>
      <HoverCardContent className="mt-2 text-xs rounded-2xl border-cstmclr-300 border-2 text-cstmclr-600 font-medium w-[17rem]">
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold line-clamp-1">Developed with : {Framework}</p>
          <ul className="list-disc ml-3 flex flex-col gap-2 ">
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
