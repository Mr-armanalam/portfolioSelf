'use client'
import React, { SetStateAction } from 'react'
import { GiOpenBook } from "react-icons/gi";


const Popout = () => {
  return (
      <section className='w-[85vw] h-[75vh] absolute z-[1000] bg-white left-1/2 top-2/3 -translate-x-1/2 -translate-y-2/3 flex items-center justify-center '>
      {/* <section className='w-full h-[94vh] flex items-center justify-center pt-20'> */}
        <div className='w-[85vw] h-[65vh] border animated-box1 flex border-cstmclr-200 shad p-8 rounded-lg shadow-2xl '>
          <h1 className='font-bold text-5xl pt-8 pl-8 w-2/5 flex flex-col items-center text-cstmclr-800'>My Qualification
          <GiOpenBook size={200} className='text-cstmclr-300 animate-pulse mt-12'/>
            <p className='text-cstmclr-400 -mt-4 ml-4 text-center text-sm'>Keep learning...</p>
          </h1>
          <div className='text-center flex flex-col gap-6 items-center justify-center w-3/5'>
            <h1 className='text-3xl font-bold text-cstmclr-700'>
              <p>Batchelor of technology</p>
              <p className='text-base mt-2 text-cstmclr-300'>By Government Engineering College West Champaran</p>
              <p className='text-xs text-cstmclr-300'>(Under the Dept. of Science & Technology, Govt of Bihar, Patna)</p>
            </h1>
            <h1 className='text-3xl font-bold text-cstmclr-700'>
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