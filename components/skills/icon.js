import {
  FaReact,
  FaGitSquare,
  FaBootstrap,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { MdDatasetLinked, MdOutlineSettingsSuggest } from "react-icons/md";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import React from "react";

export const toolsIcon = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <BiLogoTypescript />, name: "Typescript" },
  { icon: <IoLogoJavascript />, name: "Javascript" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaNodeJs />, name: "Node.Js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "Mongodb" },
  { icon: <GrMysql />, name: "Mysql" },
  { icon: <RiTailwindCssLine />, name: "Tailwindcss" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGitSquare />, name: "Git" },
  { icon: <MdDatasetLinked />, name: "Resful APIs" },
  { icon: <MdOutlineSettingsSuggest />, name: "Cloud Services" },
  { icon: <TbBrandThreejs />, name: "Threejs" },
];

export const projectData = [
  {
    duration: "1.5 years",
    project: "ChatGemeni Clone, Code Assistant, Chat App, Youtube Clone",
  },
  {
    duration: "3 year",
    project: "Youtube Clone, Chat App",
  },
  {
    duration: "2 year",
    project: "Youtube Clone, Chat App",
  },
  {
    title: "Frontend ",
    discription1:
      " React.js: Component-Based Architecture, State Management, Hooks, Virtual DOM, Routing, Testing ",
    discription2:
      "Next.js: Server-Side Rendering, API Routes, Image Optimization, File based Routing",
    discription3:
      "JavaScript: DOM Manipulation, Asynchronous Programming, APIs & Fetch, Error Handling",
    discription4: "Tailwindcss, Bootstrap, Threejs for UI designing",
  },
  {
    duration: "3 years",
    project: "University Clone, Studio Clone ",
  },
  {
    duration: "2 years",
    project: "ChatGemeni Clone, Code Assistant, Chat App, Youtube Clone",
  },
  {
    title: "Backend ",
    discription1:
      " express.js: Middleware, Routing, Template Engines(e.g. EJS), Error Handling ",
    discription2:
      "MongoDb: Database Connection,Schema & Models, CRUD Operation, Indexes & Aggregation",
    discription3: "Git: Version Control, Collaboration,Commit Messahes",
    discription4: "Restful API: Documents, Parformataion,  ",
  },
];
