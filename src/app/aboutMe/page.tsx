'use client'
import React, { useState } from 'react'
import { GrProjects } from "react-icons/gr";
import Popout from '@/components/about/popout';


const page = () => {
  const [ispopout, setIspopout] = useState(false);
  return (
    <>
    {ispopout ? <Popout />:null}
    
      <section onDoubleClick={()=> setIspopout(false)} className='pt-14 lg:pt-16 relative h-auto w-full px-2 md:px-8'>

        <button onClick={()=>setIspopout(true)} className='absolute right-36 flex animate-pulse items-center top-40 font-bold text-cstmclr-800 '>
          <GrProjects  size={13} className='mr-2 font-bold'/> Know More...        
        </button>

        <div className='pt-32 ml-20'>
          <h1 className=' font font-semibold text-6xl text-cstmclr-900'>About Us</h1>
          <div className='flex flex-col gap-4 text-cstmclr-700 pl-16 mb-12 pr-24 text-justify py-12'>
          <p>
            <span className='font-bold'>Welcome!</span> I'm a dedicated and versatile full stack web developer with <span className='font-semibold'>two years of experience</span> in building impactful
            digital solutions from concept to completion. With a strong foundation in both front-end and back-end development,
            I specialize in crafting seamless, responsive, and engaging web applications that offer top-notch user experiences.
          </p>
          <p>
            <span className='font-bold'>On the front end,</span> I expertise in creating visually appealing, interactive interfaces that make user navigation intuitive
            and enjoyable. I work with modern libraries and frameworks like <span className='font-semibold'>React.js, Next.js, and Three.js</span>, ensuring that my projects
            not only look great but perform smoothly across all devices.
          </p>

          <p>
            <span className='font-bold'>My back-end skills</span> allow me to build robust, secure, and scalable systems using technologies such as Node.js, 
            Express, and databases like MongoDB and MySql. I have a knack for designing efficient APIs and implementing 
            backend logic that brings functionality to life while maintaining high standards of security and efficiency.
          </p>

          <p>
            I approach every project with a problem-solving mindset, taking the time to understand each client's unique needs 
            and translating them into code that drives real results. By staying up-to-date with the latest industry trends 
            and best practices, I continuously improve my skills to ensure my clients get the most current, high-quality solutions.
          </p>

          <p>
            Whether you're a <span className='font-bold'>startup</span> looking to create a standout product or an established company needing updates and 
            optimizations, I'm here to bring your vision to life with dedication, creativity, and a commitment to excellence. 
            Let's work together to build something amazing!
          </p>
          </div>
        </div>

      </section>


    </> 
  )
}

export default page
