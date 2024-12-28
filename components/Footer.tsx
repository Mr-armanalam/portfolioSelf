import React from "react";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="mb-1 flex h-12 items-center justify-center border-y border-cstmclr-400 bg-inherit">
      <div className=" flex items-center gap-2 text-cstmclr-700 dark:text-cstmclr-300">
        <IoGlobeOutline className="animate-pulse" />
        <p className="text-xs font-medium md:text-sm">
          A Portfolio website to introduce myself
        </p>
      </div>
    </footer>
  );
};

export default Footer;
