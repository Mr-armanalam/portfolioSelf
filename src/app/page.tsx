
import Footer from "@/components/Footer";
import HeroSection from "@/components/herosection/heroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/Skills";
import WhatcanIdo from "@/components/herosection/WhatcanIdo";


export default function Home() {
  return (
    <>
    <HeroSection />
    <WhatcanIdo />
    <Projects /> 
    <Skills />
    </>
  );
}
