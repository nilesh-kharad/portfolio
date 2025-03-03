import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Vercel Manager",
      liveLink: "",
      about:"Developed an Android application that enables users to deploy and manage their Vercel projects directly from their mobile devices. The app provides a seamless interface for interacting with Vercel APIs, allowing users to monitor deployments, view logs, and manage projects without needing a desktop. Built as a frontend-only application, it ensures efficiency and responsiveness while maintaining a user-friendly experience. Launched with a free trial model, followed by a subscription-based monetization strategy ($5/month).",
      stack: ["React native", "Javascript", "React-native-Paper", "Expo", "Vercel Apis"],
      // img: "/offset-folio.svg",
    },
    {
      title: "Accreditations",
      liveLink: "https://accreditation.studiumtech.in/",
      about:"Studium is a B2B SaaS platform dedicated to simplifying the accreditation process for educational institutions. Recognizing that 65% of Indian institutes lack strong accreditations, Studium aims to position India as a leader in global education by offering a solution that reduces time, effort, and costs by 80%. The platform assists colleges and universities in daily accreditation readiness with minimal effort, supported by award-winning software and a dedicated support team.",
      stack: ["Next.js", "Javascript", "Mantine", "TailwindCSS", "Shadcn"],
      // img: "/offset-folio.svg",
    },
    {
      title: "SaaS Website Builder",
      liveLink: "https://your-website-builder-link.com/",
      about:"Designed and developed a powerful, no-code portfolio and website builder using Next.js, TypeScript, Prisma, and PostgreSQL. Featuring an intuitive drag-and-drop interface similar to WordPress, it empowers users to create visually stunning, fully customizable web pages without any coding knowledge. Integrated advanced styling options, real-time previews, and responsive design capabilities to ensure seamless adaptability across all devices. Optimized for performance and scalability, providing a smooth user experience for professionals and creatives looking to showcase their work effortlessly.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "MongoDB"],
      // img: "/saas-website-builder.svg",
    },
    {
      title: "Charging Stations App",
      liveLink: "https://your-charging-stations-app-link.com/",
      about:"Developed a smart charging station locator app that helps users find EV charging stations worldwide. The app integrates real-time data and interactive maps to display station locations, availability, and pricing. Users can filter stations by charger type, power output, and network provider. Features include navigation assistance, user reviews, and real-time updates on charging status, ensuring a seamless experience for electric vehicle owners. Optimized for performance and scalability, enhancing accessibility to EV infrastructure globally.",
      stack: ["React Native", "Redux", "Google Maps API", "Node.js"],
      // img: "/charging-stations-app.svg",
    },
    {
      title: "PDF & Document Generator",
      liveLink: "https://your-pdf-generator-link.com/",
      about: "Developed a dynamic document generation platform that creates PDFs and Word files based on user input. The system supports customizable templates tailored for various business needs, including invoices, reports, and contracts. Integrated real-time data processing, allowing users to populate documents with structured content dynamically. Features include template editing, automated formatting, and export options, ensuring efficiency and ease of use for businesses and professionals.",
      stack: ["Node.js", "Express", "html-pdf-node", "docx"],
      // img: "/pdf-generator.svg",
    },
    {
      title: "Strategic Planning Bot",
      liveLink: "https://your-strategic-planning-link.com/",
      about: "Developed an AI-powered bot that assists educational institutes in generating strategic plans aligned with their vision, mission, and accreditation requirements. The agent analyzes institutional goals, accreditation criteria, and industry standards to provide data-driven recommendations. It automates objective setting, action planning, and performance tracking, ensuring a structured approach to institutional growth and compliance. Designed to streamline decision-making, enhance efficiency, and support long-term strategic development.",
      stack: ["Next.js", "GPT API", "MongoDB", "Node.js"],
      // img: "/strategic-planning.svg",
    },
  ];
  

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          // img={work.img}
          title={work.title}
          // gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
