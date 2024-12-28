import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="my-12 h-fit px-4 lg:px-10">
      <div className="my-8">
        <p className="text-3xl font-extrabold text-cstmclr-900 dark:text-cstmclr-300 ">My Skills</p>
        <p className="font-medium text-cstmclr-500">
          There are some of my skills
        </p>
      </div>

      <Skill />
    </section>
  );
};

export default Skills;
