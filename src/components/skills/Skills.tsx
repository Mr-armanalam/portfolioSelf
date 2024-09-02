import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="px-12 my-12 h-[100%]">
      <div className="my-8">
        <p className="text-3xl font-extrabold text-cstmclr-800 hover:text-blue-900">
          My Skills
        </p>
        <p className="text-cstmclr-500 font-medium">
          There are some of my skills
        </p>
      </div>

      <Skill />
    </section>
  );
};

export default Skills;
