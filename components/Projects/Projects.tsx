/* eslint-disable multiline-ternary */
"use client";
import React, { useState } from "react";
import Project from "./Project";
import { GrProjects } from "react-icons/gr";
import { projectdata } from "@/assets/projectdata";
import Link from "next/link";
import HoverCards from "../shared/HoverCards";

const Projects = ({ moreProject }: { moreProject?: boolean }) => {
  const [noOfProjects, setNoOfProjects] = useState<number>(6);
  const loadmore = () => {
    if (noOfProjects !== projectdata.length) {
      setNoOfProjects(projectdata.length);
      console.log("hi");
    } else {
      setNoOfProjects(6);
    }
  };
  return (
    <section className="h-fit max-h-full w-full px-3.5 py-12 md:px-10 md:pb-6 md:pt-12">
      <div className={`mb-8 ${moreProject && "md:mb-10 md:mt-4"}`}>
        <h3 className="text-3xl font-extrabold text-cstmclr-900 dark:text-cstmclr-300 ">
          Projects
        </h3>
        <p className="font-medium text-cstmclr-500 ">
          Check out some of my recent projects
        </p>

        {moreProject && (
          <div className="mt-4 flex gap-4 max-sm:hidden">
            <HoverCards
              serviceTitle="Developed with Next.js"
              Framework="Next.js"
            />
            <HoverCards
              serviceTitle="Developed with React.js"
              Framework="React.js"
            />
            <HoverCards
              serviceTitle="Developed with HTML, CSS, & JavaScript"
              Framework="HTML, CSS, & JavaScript"
            />
          </div>
        )}
      </div>
      <div className={`flex flex-wrap gap-3`}>
        {[...Array(noOfProjects)].map((_, index: number) => (
          <Project
            key={index}
            cardImage={projectdata[index].cardImage}
            projectName={projectdata[index].projectName}
            link={projectdata[index].link}
            gitlink={projectdata[index].gitlink}
          />
        ))}
      </div>
      {moreProject ? (
        <>
          <button
            onClick={() => loadmore()}
            className="ml-auto mr-8 mt-4 flex items-center gap-1 text-sm font-bold
             text-cstmclr-800 hover:font-extrabold hover:text-black dark:text-cstmclr-300 dark:hover:text-cstmclr-100 "
          >
            <GrProjects />{" "}
            {noOfProjects !== projectdata.length
              ? "More projects ..."
              : "Show less..."}
          </button>
        </>
      ) : (
        <>
          <Link href={"/projects"}>
            <button
              className="ml-auto mr-8 mt-4 flex items-center gap-1 text-sm
             font-bold text-cstmclr-800 hover:font-extrabold hover:text-black dark:text-cstmclr-300 dark:hover:text-cstmclr-100 "
            >
              <GrProjects /> Explore ...
            </button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Projects;
