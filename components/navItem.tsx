/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { useTheme } from "./shared/themeProvider";
import { setWithExpiry } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItem = () => {
  const { isdarkMode, setIsDarkMode } = useTheme();
  const pathname = usePathname();
  const isActive = "border-cstmclr-950 dark:border-cstmclr-700 border-b";
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
      <ul className="flex flex-col gap-8 font-semibold text-cstmclr-800 dark:text-cstmclr-200 md:flex-row md:text-xs lg:text-base ">
        <li>
          <Link
            className={`font-extrabold text-cstmclr-950 ${
              pathname === "/" && isActive
            } dark:text-cstmclr-100`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950 dark:hover:text-cstmclr-400">
          <Link
            href="projects"
            className={pathname === "/projects" ? isActive : ""}
          >
            Our Projects
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950 dark:hover:text-cstmclr-400 md:hidden lg:block">
          <Link
            href="services"
            className={pathname === "/services" ? isActive : ""}
          >
            Services
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950 dark:hover:text-cstmclr-400">
          <Link
            href="resume"
            className={pathname === "/resume" ? isActive : ""}
          >
            Resume
          </Link>
        </li>
        <li className="hover:font-bold hover:text-cstmclr-950 dark:hover:text-cstmclr-400">
          <Link
            href="aboutMe"
            className={pathname === "/aboutMe" ? isActive : ""}
          >
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
        className="absolute bottom-0 h-10 w-28 rounded-lg border-2 border-cstmclr-400 bg-cstmclr-950 from-black
         to-gray-900 font-semibold text-cstmclr-100 hover:bg-black dark:bg-gradient-to-r dark:hover:border-cstmclr-100 md:relative md:ml-8 md:mr-2 md:mt-0"
      >
        <Link href="contact">Contact</Link>
      </button>
    </>
  );
};

export default NavItem;
