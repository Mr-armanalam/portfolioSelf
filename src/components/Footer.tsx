import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-inherit h-12 mb-1 border border-cstmclr-400 items-center flex justify-center">
      <div className=" text-cstmclr-700 gap-2 flex items-center">
        <IoGlobeOutline />
        <p className="text-xs md:text-sm font-medium">
          A Portfolio website to introduce myself
        </p>
      </div>
    </footer>
  );
}

export default Footer
