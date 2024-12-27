import React from 'react'
import {projectData, toolsIcon} from "./icon"


const Skill = () => {
  const iconIndex = [0,3,6,1,9,12];

  return (
    <div className="lg:grid flex flex-col md:flex-row md:flex-wrap auto-rows-[192px] grid-cols-3 gap-4">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 md:flex-1 lg:overflow-auto flex animated-box flex-col rounded-xl border-2 shadow-inner border-cstmclr-200 bg-white px-4 pt-4 ${
            i === 3 || i === 6 ? "col-span-2 md:min-w-full" : ""
          }`}
        >
          {i === 3 || i === 6 ? (
            <>
              <p
                key={i + 1}
                className="ml-auto mb-2 font-semibold text-cstmclr-300 text-sm"
              >
                {projectData[i].title}
              </p>
              <ul
                key={i + 2}
                className="pr-4  text-xs pl-8 list-disc py-2 flex flex-col gap-2 font-bold md:text-sm text-cstmclr-400 hover:text-cstmclr-500"
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
                className="ml-auto font-semibold text-cstmclr-300 text-sm"
              >
                {projectData[i].duration} exprience
              </p>
              <div
                key={i + 4}
                className=" px-4 py-2 font-bold text-lg text-cstmclr-700"
              >
                {i > 5 ? null : (
                  <>
                    {[...Array(3)].map((_, n) => (
                      <p key={i + n} className="flex gap-2 items-center ">
                        {toolsIcon[iconIndex[i] + n].icon}
                        {toolsIcon[iconIndex[i] + n].name}
                      </p>
                    ))}
                  </>
                )}
              </div>
              <p
                key={i + 5}
                className="pl-4 text-sm text-cstmclr-300 font-semibold"
              >
                Project: {projectData[i].project}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Skill
