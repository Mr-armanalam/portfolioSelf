import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Arman Alam | Resume",
  description:
    "Welcome to my Resume page, a detailed snapshot of my professional journey and accomplishments.",
  keywords: ["Resume", "Arman's Resume", "Arman Alam Resume"],
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/resume",
    images: "/resume_page.png",
  },
};

const page = () => {
  return (
    <main className="relative flex h-fit w-full justify-center border pt-16">
      <embed
        color="transparent"
        className="h-[82vh] w-full self-center md:h-[100vh]"
        src="/static/resume.pdf"
        type="application/pdf"
        width={"100%"}
        height={"100%"}
      />
    </main>
  );
};

export default page;
