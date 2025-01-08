import Image from "next/image";
import React from "react";
import { services } from "@/assets/servicedata";
import HoverCards from "@/components/shared/HoverCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Services",
  description: "Here, my some services which have provide to you ",
  keywords: [
    "Full Stack Web Development",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Responsive website development",
  ],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/services",
    images: "/service_page.png",
  },
};

const page = () => {
  return (
    <main className="h-auto w-auto ">
      <div className="h-auto w-auto pt-16 ">
        <div className="mx-2 my-8 md:mx-12 md:mb-10 md:mt-16 ">
          <h3 className="text-3xl font-extrabold text-cstmclr-900 hover:text-cstmclr-950 dark:text-cstmclr-300">
            My Services
          </h3>
          <p className="font-medium text-cstmclr-500">
            Some services for delever to you
          </p>
          <div className="mt-4 flex gap-4 max-sm:hidden">
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
        <div className="flex flex-wrap gap-4 p-2 md:m-12 md:mt-8 md:gap-3 md:p-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[15rem] min-w-[20rem] flex-1 rounded-lg border border-cstmclr-200 shadow-md hover:shadow-cstmclr-300 dark:border-[#252525] max-lg:w-[24rem] md:min-w-80 lg:min-w-[24rem] "
            >
              <div className="trnstion relative h-[15rem] max-w-fit">
                <Image
                  className="h-[86%] rounded-t-lg"
                  src={services[i]?.cardImage}
                  alt="services"
                />
                <div className="maketrnstion bg absolute bottom-0 left-0 -z-50 w-full rounded-lg bg-gray-100 bg-opacity-5 bg-clip-padding p-8 backdrop-blur-sm backdrop-filter ">
                  <h1 className="text-center font-sans text-xl font-extrabold text-cstmclr-50">
                    {services[i]?.serviceName}
                    <p className="pt-6 font-sans text-base font-bold text-white">
                      {services[i]?.serviceDescription}
                    </p>
                  </h1>
                </div>
                <h2 className="px-2 pt-1.5 text-sm font-semibold text-cstmclr-900 dark:text-gray-300">
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
