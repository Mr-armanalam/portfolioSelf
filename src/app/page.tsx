
import Footer from "@/components/Footer";
import HeroSection from "@/components/herosection/heroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/Skills";
import WhatcanIdo from "@/components/herosection/WhatcanIdo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Arman Alam's Portfolio",
  description: "Welcome to Arman's Portfolio! Explore a curated showcase of my most impactful projects and creative endeavors. Let's connect and create something extraordinary together.",
}
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
