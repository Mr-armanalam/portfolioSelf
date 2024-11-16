import HeroSection from "@/components/herosection/heroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/Skills";
import WhatcanIdo from "@/components/herosection/WhatcanIdo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arman Alam's Portfolio",
  description: "Welcome to Arman's Portfolio! Explore a selected showcase of my most impactful projects and creative effort. Let's connect and create something extraordinary together.",
  keywords: ["Arman portfolio","Arman Alam's Portfolio", "Arman Alam portfolio"],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/",
    images: "/home_page.png",
  },
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
