import Projects from "@/components/Projects/Projects";
import Skills from "@/components/skills/Skills";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Arman Alam's Portfolio",
  description:
    "Explore a selected showcase of my most impactful projects and creative effort. Let's connect and create something extraordinary together.",
  keywords: [
    "Arman portfolio",
    "Arman Alam's Portfolio",
    "Arman Alam portfolio",
  ],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/",
    images: "/home_page.png",
  },
};
export default function Home ({
  heroSection,
  whatCanIdo,
}: {
  heroSection: ReactNode;
  whatCanIdo: ReactNode;
}) {
  return (
    <main>
      {heroSection}
      {whatCanIdo}

      <Projects />
      <Skills />
      <Toaster />
    </main>
  );
}
