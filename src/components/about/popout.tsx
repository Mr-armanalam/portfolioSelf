'use client'
import React, { SetStateAction } from 'react'
import { GiOpenBook } from "react-icons/gi";


const Popout = () => {
  return (
      <section className='md:w-[90vw] md:h-[75vh] h-auto w-auto absolute z-[1000] bg-white top-24 left-2 right-2  md:left-1/2 md:top-2/3 md:-translate-x-1/2 md:-translate-y-2/3 flex items-center justify-center '>
        <div className='md:w-[90vw] md:h-[65vh] w-auto pb-8 md:pb-0 md:gap-0 gap-12 h-auto border animated-box1 flex md:flex-row flex-col border-cstmclr-200 md:p-8 rounded-lg shadow-2xl '>
          <h1 className='font-bold text-3xl lg:text-5xl pt-16 lg:pt-8 lg:pl-8 md:w-2/5 flex flex-col items-center text-cstmclr-800'>My Qualification
          <GiOpenBook size={200} className='text-cstmclr-300 animate-pulse md:mt-2  lg:mt-12'/>
            <p className='text-cstmclr-400 -mt-4 ml-4 text-center text-sm'>Keep learning...</p>
          </h1>
          <div className='text-center flex flex-col gap-6 items-center justify-center md:w-3/5'>
            <h1 className='text-2xl lg:text-3xl font-bold text-cstmclr-700'>
              <p>Batchelor of technology</p>
              <p className='text-base mt-2 text-cstmclr-300'>By Government Engineering College West Champaran</p>
              <p className='text-xs text-cstmclr-300'>(Under the Dept. of Science & Technology, Govt of Bihar, Patna)</p>
            </h1>
            <h1 className='text-2xl lg:text-3xl font-bold text-cstmclr-700'>
              <p>Diploma</p>
              <p className='text-base mt-2 text-cstmclr-300'>By Government Polytechnic Motihari</p>
              <p className='text-xs text-cstmclr-300'>(Dept. of Science & Technology, Govt. of Bihar)</p>
            </h1>
          </div>
        </div>
      </section>
  )
}

export default Popout