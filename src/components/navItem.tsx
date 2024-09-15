import Link from 'next/link';
import React from 'react'

const NavItem = () => {
  return (
    <>
      <ul className="flex flex-col md:flex-row gap-8 text-cstmclr-800 font-semibold">
        <li>
          <Link
            className="text-cstmclr-950 font-extrabold focus:border-b-2 border-cstmclr-950"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-cstmclr-950 hover:font-bold">
          <Link
            href="projects"
            className="focus:border-b-2  border-cstmclr-950"
          >
            Our Projects
          </Link>
        </li>
        <li className="hover:text-cstmclr-950 hover:font-bold md:hidden lg:block">
          <Link
            href="#services"
            className="focus:border-b-2  border-cstmclr-950"
          >
            Services
          </Link>
        </li>
        <li className="hover:text-cstmclr-950 hover:font-bold">
          <Link href="resume" className="focus:border-b-2  border-cstmclr-950">
            Resume
          </Link>
        </li>
        <li className="hover:text-cstmclr-950 hover:font-bold">
          <Link href="aboutMe" className="focus:border-b-2  border-cstmclr-950">
            About Us
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className="bg-cstmclr-800 md:mt-0 md:relative absolute bottom-0 md:ml-8 md:mr-2 hover:bg-cstmclr-700 font-semibold text-cstmclr-100 h-10 w-28 rounded"
      >
        <a href="/contact">Contact</a>
      </button>
    </>
  );
}

export default NavItem
