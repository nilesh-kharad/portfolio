import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nilesh Kharad — Senior MERN Stack Developer",
  description:
    "A Senior MERN Stack Developer with 3 years of experience, passionate about building scalable web applications and crafting seamless user experiences. I specialize in creating efficient, robust, and intuitive digital solutions.",
  keywords: [
    "mern stack",
    "node.js",
    "react",
    "mongodb",
    "express",
    "full-stack development",
    "web development",
    "developer portfolio",
    "frontend engineer",
    "backend engineer",
    "pune",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Nilesh Kharad — Senior MERN Stack Developer",
    description:
      "Senior MERN Stack Developer with 3 years of experience, passionate about building scalable web applications and crafting seamless user experiences. I specialize in creating efficient, robust, and intuitive digital solutions.",
    url: "https://www.nileshkharad.dev", // Update with your actual portfolio URL
    siteName: "www.nileshkharad.dev", // Update with your actual portfolio domain
    images: [
      {
        url: "https://your-image-link.com/nilesh-kharad.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Nilesh Kharad — Senior MERN Stack Developer",
      },
      {
        url: "https://your-image-link.com/nilesh-800.png", // Replace with another image URL
        width: 800,
        height: 800,
        alt: "Nilesh Kharad — Senior MERN Stack Developer",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh Kharad — Senior MERN Stack Developer",
    description:
      "A Senior MERN Stack Developer with 3 years of experience, passionate about building scalable web applications and crafting seamless user experiences. I specialize in creating efficient, robust, and intuitive digital solutions.",
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
    images: ["https://your-image-link.com/nilesh-kharad.png"], // Replace with your actual image URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
