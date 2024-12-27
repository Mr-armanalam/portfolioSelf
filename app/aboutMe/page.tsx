"use client";
import React from "react";
import { GrProjects } from "react-icons/gr";
import Popout from "@/components/about/popout";
import { useClick } from "@/components/shared/contextProvider";

const Page = () => {
  // const [ispopout, setIspopout] = useState(false);
  const { ispopout, setIspopout } = useClick();

  return (
    <>
      {ispopout ? <Popout /> : null}

      <main
        onClick={() => setIspopout(false)}
        className="relative h-auto w-full px-2 pt-14 md:px-8 lg:pt-16"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIspopout(true);
          }}
          className="absolute right-4 top-24 flex items-center rounded-md border-2 border-cstmclr-400 bg-cstmclr-950 p-4 text-xs font-bold text-cstmclr-50 hover:bg-black md:right-24 md:top-28 md:text-sm lg:right-36 lg:top-40 lg:text-base"
        >
          <GrProjects size={13} className="mr-2 font-bold" /> My
          Qualification...
        </button>

        <div className="pt-20 md:pt-20 lg:ml-20 lg:pt-32">
          <h1 className=" text-3xl font-semibold text-cstmclr-900 md:text-4xl lg:text-6xl">
            About Us
          </h1>
          <div className="mb-12 flex flex-col gap-4 py-8 pl-6 pr-6 text-justify font-mono text-xs text-cstmclr-700 md:py-12 md:pl-16 md:pr-16 md:font-sans md:text-base lg:pr-24">
            <p>
              <span className="font-bold">Welcome!</span> I&apos;m a dedicated and
              versatile full stack web developer with{" "}
              <span className="font-semibold">two years of experience</span> in
              building impactful digital solutions from concept to completion.
              With a strong foundation in both front-end and back-end
              development, I specialize in crafting seamless, responsive, and
              engaging web applications that offer top-notch user experiences.
            </p>
            <p>
              <span className="font-bold">On the front end,</span> I expertise
              in creating visually appealing, interactive interfaces that make
              user navigation intuitive and enjoyable. I work with modern
              libraries and frameworks like{" "}
              <span className="font-semibold">
                React.js, Next.js, and Three.js
              </span>
              , ensuring that my projects not only look great but perform
              smoothly across all devices.
            </p>

            <p>
              <span className="font-bold">My back-end skills</span> allow me to
              build robust, secure, and scalable systems using technologies such
              as Node.js, Express, and databases like MongoDB and MySql. I have
              a knack for designing efficient APIs and implementing backend
              logic that brings functionality to life while maintaining high
              standards of security and efficiency.
            </p>

            <p>
              I approach every project with a problem-solving mindset, taking
              the time to understand each client&apos;s unique needs and translating
              them into code that drives real results. By staying up-to-date
              with the latest industry trends and best practices, I continuously
              improve my skills to ensure my clients get the most current,
              high-quality solutions.
            </p>

            <p>
              Whether you&apos;re a <span className="font-bold">startup</span>{" "}
              looking to create a standout product or an established company
              needing updates and optimizations, I&apos;m here to bring your vision
              to life with dedication, creativity, and a commitment to
              excellence. Let&apos;s work together to build something amazing!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
