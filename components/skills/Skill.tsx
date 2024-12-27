/* eslint-disable multiline-ternary */
import React from "react";
import { projectData, toolsIcon } from "./icon";

const Skill = () => {
  const iconIndex = [0, 3, 6, 1, 9, 12];

  return (
    <div className="flex auto-rows-[192px] grid-cols-3 flex-col gap-4 md:flex-row md:flex-wrap lg:grid">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`animated-box row-span-1 flex flex-col rounded-xl border-2 border-cstmclr-200 bg-white px-4 pt-4 shadow-inner md:flex-1 lg:overflow-auto ${
            i === 3 || i === 6 ? "col-span-2 md:min-w-full" : ""
          }`}
        >
          {i === 3 || i === 6 ? (
            <>
              <p
                key={i + 1}
                className="mb-2 ml-auto text-sm font-semibold text-cstmclr-300"
              >
                {projectData[i].title}
              </p>
              <ul
                key={i + 2}
                className="flex  list-disc flex-col gap-2 py-2 pl-8 pr-4 text-xs font-bold text-cstmclr-400 hover:text-cstmclr-500 md:text-sm"
              >
                <li>{projectData[i].discription1}</li>
                <li>{projectData[i].discription2}</li>
                <li>{projectData[i].discription3}</li>
                <li>{projectData[i].discription4}</li>
              </ul>
            </>
          ) : (
            <>
              <p
                key={i + 3}
                className="ml-auto text-sm font-semibold text-cstmclr-300"
              >
                {projectData[i].duration} exprience
              </p>
              <div
                key={i + 4}
                className=" px-4 py-2 text-lg font-bold text-cstmclr-700"
              >
                {i > 5 ? null : (
                  <>
                    {[...Array(3)].map((_, n) => (
                      <p key={i + n} className="flex items-center gap-2 ">
                        {toolsIcon[iconIndex[i] + n].icon}
                        {toolsIcon[iconIndex[i] + n].name}
                      </p>
                    ))}
                  </>
                )}
              </div>
              <p
                key={i + 5}
                className="pl-4 text-sm font-semibold text-cstmclr-300"
              >
                Project: {projectData[i].project}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Skill;
