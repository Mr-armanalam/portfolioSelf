import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Alam | Full Stack Web Developer",
  description: "My experience includes working on front-end and back-end technologies, creating responsive web applications.",
  keywords: ["Arman Alam", "Arman Alam Portfolio", "Arman Alam Motihari", "Mrarmanalam","armanalam_motihari", 
    "Arman Alam Web Developer", "Arman Alam Full Stack Developer", "Arman Alam React.js Developer", 
    "Arman Alam Node.js Developer", "Experienced Web Developer", "Experienced Full Stack Web Developer", 
    "Projects", "My Services", "Contact Us", "clone", "chat", "youtube", "experience" ],
  authors: { name: "Arman Alam", url: "https://github.com/Mr-armanalam" },
  icons: "/armanhd3.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
