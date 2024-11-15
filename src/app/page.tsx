
import Footer from "@/components/Footer";
import HeroSection from "@/components/herosection/heroSection";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/Skills";
import WhatcanIdo from "@/components/herosection/WhatcanIdo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Arman Alam's Portfolio",
  description: "Welcome to Arman's Portfolio! Explore a selected showcase of my most impactful projects and creative effort. Let's connect and create something extraordinary together.",
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/",
    title: "Arman Alam | Web Developer",
    description: "Welcome to Arman's Portfolio! Explore a selected showcase of my most impactful projects and creative effort. Let's connect and create something extraordinary together.",
    images: "/armanhd3_enhanced.jpeg",
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
