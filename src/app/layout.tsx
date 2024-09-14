import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Alam",
  description: "Full Stack Web Developer | Expert in React.js, Node.js, Express.js, JavaScript & mongoDB",
  keywords: ["Arman Alam", "Arman Alam Portfolio", "Arman Alam Motihari "],
  authors: { name: "Arman Alam", url: "https://github.com/Mr-armanalam" },
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
        {children}</body>
    </html>
  );
}
