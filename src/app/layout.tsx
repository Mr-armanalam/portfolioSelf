import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { ClickProvider } from "@/components/shared/contextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arman Alam | Full Stack Web Developer",
  description:
    "My experience includes working on front-end and back-end technologies, creating responsive web application with latest framework & library Next.js, React.js",
  keywords: [
    "Arman Alam",
    "Arman Alam Portfolio",
    "Arman Alam Motihari",
    "Mrarmanalam",
    "armanalam_motihari",
    "Arman Alam Web Developer",
    "Arman Alam Full Stack Developer",
    "Arman Alam React.js Developer",
    "Arman Alam Next.js Developer",
    "Arman Alam Node.js Developer",
    "Experienced Web Developer",
    "Experienced Full Stack Web Developer",
    "Services",
    "Contact Us",
    "experience",
    "My Skills",
    "Github Repo",
    "Contact",
  ],
  applicationName: "Arman Alam Portfolio",
  authors: { name: "Arman Alam", url: "https://github.com/Mr-armanalam" },
  creator: "Mr-armanalam",
  publisher: "Mr. Arman Alam",
  // robots: { index: false, follow: false },
  icons: "/armanhd31.png",
  openGraph: {
    type: "website",
    url: "https://armanalam.vercel.app/",
    images: "/home_page.jpeg",
  },

  twitter: {
    card: "summary_large_image",
    site: "https://armanalam.vercel.app/",
    creator: "@armanalam",
    images: "/home_page.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add schema.org metadata */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Arman Alam",
            url: "https://armanalam.vercel.app",
            sameAs: [
              "https://www.linkedin.com/in/mrarmanalam",
              "https://github.com/Mr-armanalam",
              "https://www.instagram.com/arman91174",
            ],
            worksFor: {
              "@type": "OrganizationRole",
              name: "Full Stack Web Developer",
              organization: {
                "@type": "Organization",
                name: "Arman Alam",
                url: "https://armanalam.vercel.app/",
              },
            },
          })}
        </script>
      </Head>
      <body className={inter.className}>
        <ClickProvider>
          <Navbar />
          {children}
          <Footer />
        </ClickProvider>
      </body>
    </html>
  );
}
