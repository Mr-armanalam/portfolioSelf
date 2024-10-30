import Image from 'next/image'
import React from 'react'
import {services} from '@/assets/servicedata'

const page = () => {
  return (
    <section className='w-[100vw] h-auto '>
      <div className='h-auto pt-16 w-auto '>
        <div className='flex md:mt-8 md:p-0 p-2 md:m-12 gap-4 md:gap-8 flex-wrap'>
          {[...Array(6)].map((_,i)=>(
            <div key={i} className='border min-w-[22rem] md:min-w-96 max-w-md h-[17rem] flex-1 rounded-lg shadow-md hover:shadow-cstmclr-300 border-cstmclr-200 '>
              <div className='max-w-fit relative h-[17rem] trnstion'>
                <Image className='h-[86%] rounded-t-lg' src={services[i]?.cardImage} alt='services' ></Image>
                <div className='absolute p-8 bottom-0 left-0 -z-50 rounded-lg maketrnstion bg w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 '>
                  <h1 className='text-center text-cstmclr-50 pt-4 font-sans font-extrabold text-xl'>{services[i]?.serviceName} 
                    <p className='text-white pt-6 font-sans font-bold text-base'>{services[i]?.serviceDescription}</p>               
                    {/* <p className='bg-gradient-to-r from-white to-black bg-clip-text text-transparent pt-6 font-sans font-bold text-base'>{services[i]?.serviceDescription}</p>                */}
                  </h1>
                </div>
                <h1 className='text-sm text-cstmclr-600 font-semibold p-2'>{services[i].serviceName}</h1>
              </div>
            </div>
          ))}         
        </div>
      </div>
    </section>
  )
}

export default page