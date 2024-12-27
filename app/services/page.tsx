import Image from "next/image";
import React from "react";
import { services } from "@/assets/servicedata";
import HoverCards from "@/components/shared/HoverCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Services',
  description: 'Here, my some services which have provide to you ',
  keywords: [ "Full Stack Web Development", "Frontend Development", "Backend Development", "API Integration", "Responsive website development" ],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/services",
    images: "/service_page.png",
  },
}

const page = () => {
  return (
    <main className="w-auto h-auto ">
      <div className="h-auto pt-16 w-auto ">
        <div className="md:mt-16 my-8 mx-2 md:mx-12 md:mb-10 ">
          <h3 className="text-3xl font-extrabold text-cstmclr-900 hover:text-cstmclr-950">
            My Services
          </h3>
          <p className="text-cstmclr-500 font-medium">
            Some services for delever to you
          </p>
          <div className="flex mt-4 max-sm:hidden gap-4">
            <HoverCards
              serviceTitle="Full Stack Web Development"
              Framework="Next.js"
            />
            <HoverCards
              serviceTitle="Front-End Development"
              Framework="React.js"
            />
            <HoverCards
              serviceTitle="Back-End Development"
              Framework="Node.js"
            />
          </div>
        </div>
        <div className="flex md:mt-8 md:p-0 p-2 md:m-12 gap-4 md:gap-3 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border min-w-[20rem] md:min-w-80 lg:min-w-[24rem] max-lg:w-[24rem] h-[15rem] flex-1 rounded-lg shadow-md hover:shadow-cstmclr-300 border-cstmclr-200 "
            >
              <div className="max-w-fit relative h-[15rem] trnstion">
                <Image
                  className="h-[86%] rounded-t-lg"
                  src={services[i]?.cardImage}
                  alt="services"
                ></Image>
                <div className="absolute p-8 bottom-0 left-0 -z-50 rounded-lg maketrnstion bg w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 ">
                  <h1 className="text-center text-cstmclr-50 font-sans font-extrabold text-xl">
                    {services[i]?.serviceName}
                    <p className="text-white pt-6 font-sans font-bold text-base">
                      {services[i]?.serviceDescription}
                    </p>
                  </h1>
                </div>
                <h2 className="text-sm text-cstmclr-900 font-semibold px-2 pt-1.5">
                  {services[i].serviceName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
