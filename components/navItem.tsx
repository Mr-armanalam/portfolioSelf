import Link from "next/link";
import React from "react";

const NavItem = () => {
  return (
    <>
      <ul className="flex flex-col gap-8 font-semibold text-cstmclr-800 md:flex-row">
        <li>
          <Link
            className="border-cstmclr-950 font-extrabold text-cstmclr-950 focus:border-b-2"
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
      </ul>

      <button
        type="button"
        className="absolute bottom-0 h-10 w-28 rounded-lg border-2 border-cstmclr-400 bg-cstmclr-950 font-semibold text-cstmclr-100 hover:bg-black md:relative md:ml-8 md:mr-2 md:mt-0"
      >
        <Link href="contact">Contact</Link>
      </button>
    </>
  );
};

export default NavItem;
