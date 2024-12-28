/* eslint-disable multiline-ternary */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [togglebtn, setTogglebtn] = useState(false);
  return (
    <nav className="absolute left-0 right-0 z-50 w-full bg-custom-gray dark:border-y-2 dark:border-cstmclr-900 dark:bg-cstmclr-900">
      <div className="md:12 relative flex h-16 items-center border-y-[1px] border-cstmclr-100 bg-custom-gradient from-black to-slate-950 dark:border-none dark:bg-gradient-to-r ">
        <div className="cursor-pointer px-4 text-xl font-extrabold text-cstmclr-950 hover:text-black dark:text-cstmclr-200 dark:hover:text-cstmclr-300 md:px-8 lg:text-2xl ">
          <Link href="/">My Portfolio</Link>
        </div>

        <div className="ml-auto hidden md:flex md:items-center">
          <NavItem />
        </div>

        {!togglebtn ? (
          <button type="button" className="ml-auto mr-4 md:hidden">
            <FaBars
              onClick={() => setTogglebtn(true)}
              size={24}
              className="text-cstmclr-400 hover:text-cstmclr-700"
            />
          </button>
        ) : null}

        {togglebtn ? (
          <div
            className="absolute right-0 top-0 z-50  h-[100vh] w-[14rem] rounded-t-md border border-cstmclr-300 bg-gray-400
          bg-opacity-10 bg-clip-padding px-12 py-8
            shadow-lg backdrop-blur-sm backdrop-filter md:hidden"
            onClick={() => setTogglebtn(false)}
          >
            <section className="relative h-full">
              <FaXmark
                onClick={() => setTogglebtn(false)}
                size={24}
                className="absolute -right-8 cursor-pointer text-cstmclr-400 hover:text-cstmclr-700"
              />
              <NavItem />
            </section>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
