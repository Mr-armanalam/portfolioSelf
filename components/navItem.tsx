/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { useTheme } from "./shared/themeProvider";
import { setWithExpiry } from "@/lib/utils";

const NavItem = () => {
  const { isdarkMode, setIsDarkMode } = useTheme();
  const handleThemeChange = () => {
    setIsDarkMode((prev: any) => {
      switch (prev) {
        case "light":
          setWithExpiry("theme", "dark", "86400");
          return "dark";
        case "dark":
          setWithExpiry("theme", "light", "86400");
          return "light";
        default:
          return prev;
      }
    });
  };
  return (
    <>
      <ul className="flex flex-col gap-8 font-semibold text-cstmclr-800 dark:text-cstmclr-200 md:flex-row ">
        <li>
          <Link
            className="border-cstmclr-950 font-extrabold text-cstmclr-950 focus:border-b-2 dark:text-cstmclr-100"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950">
          <Link
            href="projects"
            className="border-cstmclr-950  focus:border-b-2"
          >
            Our Projects
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950 md:hidden lg:block">
          <Link
            href="services"
            className="border-cstmclr-950  focus:border-b-2"
          >
            Services
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950">
          <Link href="resume" className="border-cstmclr-950  focus:border-b-2">
            Resume
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950">
          <Link href="aboutMe" className="border-cstmclr-950  focus:border-b-2">
            About Us
          </Link>
        </li>
        <li className="flex">
          <Separator orientation="vertical" />
          <div className="mx-4">
            <Switch
              checked={isdarkMode !== "light"}
              onCheckedChange={handleThemeChange}
            />
          </div>
          <Separator orientation="vertical" />
        </li>
      </ul>

      <button
        type="button"
        className="absolute bottom-0 h-10 w-28 rounded-lg border-2 border-cstmclr-400 bg-cstmclr-950 font-semibold
         text-cstmclr-100 hover:bg-black dark:bg-gray-950 dark:hover:bg-zinc-900 md:relative md:ml-8 md:mr-2 md:mt-0"
      >
        <Link href="contact">Contact</Link>
      </button>
    </>
  );
};

export default NavItem;
