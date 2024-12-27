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
    <section className="max-h-full h-fit px-3.5 md:px-10 md:pt-12 md:pb-6 py-12 w-full">
      <div className={`mb-8 ${moreProject && "md:mt-4 md:mb-10"}`}>
        <h3 className="text-3xl font-extrabold text-cstmclr-900 ">Projects</h3>
        <p className="text-cstmclr-500 font-medium">
          Check out some of my recent projects
        </p>

        {moreProject && (
          <div className="flex mt-4 max-sm:hidden gap-4">
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
        {[...Array(noOfProjects)].map((_, index: any) => (
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
            className="ml-auto flex items-center gap-1 text-cstmclr-800 font-bold text-sm mt-4
             mr-8 hover:font-extrabold hover:text-black ">
            <GrProjects />{" "}
            {noOfProjects !== projectdata.length
              ? "More projects ..."
              : "Show less..."}
          </button>
        </>
      ) : (
        <>
          <Link href={"/projects"}>
            <button className="ml-auto flex items-center gap-1 text-cstmclr-800 font-bold text-sm
             mt-4 mr-8 hover:font-extrabold hover:text-black ">
              <GrProjects /> Explore ...
            </button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Projects;
