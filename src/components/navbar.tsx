'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import NavItem from './navItem';
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const navbar = () => {
  const [togglebtn, setTogglebtn] = useState(false);
  return (
    <nav className="absolute z-50 left-0 bg-custom-gray right-0 w-full">
      <div className="flex bg-custom-gradient border-y-[1px] border-cstmclr-100 h-16 md:12 items-center relative">
        <div className="font-extrabold px-4 md:px-8 text-cstmclr-900 hover:text-cstmclr-950 text-xl lg:text-2xl cursor-pointer ">
          <Link href="/">My Portfolio</Link>
        </div>

        <div className="hidden md:items-center ml-auto md:flex">
          <NavItem />
        </div>

        {!togglebtn ? (
          <button className="ml-auto md:hidden mr-4">
            <FaBars
              onClick={() => setTogglebtn(true)}
              size={24}
              className="text-cstmclr-400 hover:text-cstmclr-700"
            />
          </button>
        ) : null}

        {togglebtn ? (
          <div
            className="h-[100vh] w-[14rem] py-8 px-12  md:hidden top-0 right-0 z-50 absolute border
          bg-gray-400 rounded-t-md bg-clip-padding backdrop-filter
            backdrop-blur-sm bg-opacity-10 border-cstmclr-300 shadow-lg"
            onClick={() => setTogglebtn(false)}
          >
            <div className="relative h-full">
              <FaXmark
                onClick={() => setTogglebtn(false)}
                size={24}
                className="absolute text-cstmclr-400 hover:text-cstmclr-700 cursor-pointer -right-8"
              />
              <NavItem />
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default navbar
