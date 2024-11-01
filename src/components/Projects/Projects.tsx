import React from "react";
import Project from "./Project";
import { GrProjects } from "react-icons/gr";
import {projectdata} from "@/assets/projectdata"



const Projects = () => {
  return (
    <section className="max-h-full h-fit px-4 md:px-12 py-12 w-full">
      <div className="pb-8">
          <h3 className="text-3xl font-extrabold text-cstmclr-900 hover:text-blue-900">
            Projects
          </h3>
          <p className="text-cstmclr-500 font-medium">
            Check out some of my recent projects
          </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Project cardImage={projectdata[0].cardImage} projectName={projectdata[0].projectName} link={projectdata[0].link} gitlink={projectdata[0].gitlink} />
        <Project cardImage={projectdata[1].cardImage} projectName={projectdata[1].projectName} link={projectdata[1].link} gitlink={projectdata[1].gitlink} />
        <Project cardImage={projectdata[2].cardImage} projectName={projectdata[2].projectName} link={projectdata[2].link} gitlink={projectdata[2].gitlink} />
        <Project cardImage={projectdata[3].cardImage} projectName={projectdata[3].projectName} link={projectdata[3].link} gitlink={projectdata[3].gitlink} />
        <Project cardImage={projectdata[4].cardImage} projectName={projectdata[4].projectName} link={projectdata[4].link} gitlink={projectdata[4].gitlink} />
        <Project cardImage={projectdata[5].cardImage} projectName={projectdata[5].projectName} link={projectdata[5].link} gitlink={projectdata[5].gitlink} />
      </div>
      <button className="ml-auto flex items-center gap-1 text-cstmclr-800 font-bold text-sm mt-4 mr-8 hover:text-blue-900 ">
        <GrProjects /> Explore ...
      </button>
    </section>
  );
};

export default Projects;
