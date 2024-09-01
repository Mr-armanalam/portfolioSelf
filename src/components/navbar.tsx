'useclient'
import Link from 'next/link';
import React from 'react'

const navbar = () => {
  return (
    <nav className="absolute left-0 right-0">
      <div className="flex border-y-2 border-cstmclr-300 h-12 items-center relative bg-slate-50">
        <div className="font-extrabold px-8 text-cstmclr-900 hover:text-cstmclr-950 text-2xl cursor-pointer ">
          <Link href="/">My Portfolio</Link>
        </div>
        <ul className="flex ml-auto gap-8 text-cstmclr-800 font-semibold">
          <li>
            <Link
              className="text-cstmclr-950 font-extrabold border-b-2 border-cstmclr-950"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-cstmclr-950 hover:font-bold">
            <Link href="#project">Our Projects</Link>
          </li>
          <li className="hover:text-cstmclr-950 hover:font-bold">
            <Link href="#services">Services</Link>
          </li>
          <li className="hover:text-cstmclr-950 hover:font-bold">
            <Link href="#resume">Resume</Link>
          </li>
          <li className="hover:text-cstmclr-950 hover:font-bold">
            <Link href="#about">About Us</Link>
          </li>
        </ul>
        <button
          type="button"
          className="bg-cstmclr-800 ml-8 mr-2 hover:bg-cstmclr-700 font-semibold text-cstmclr-100 h-10 w-28 rounded"
        >
          <a href="/contact">Contact</a>
        </button>
      </div>
    </nav>
  );
}

export default navbar
