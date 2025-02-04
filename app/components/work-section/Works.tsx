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
      title: "Accreditations",
      liveLink: "https://accreditation.studiumtech.in/",
      about:
        "Offset Communications Africa’s website really allows them to stand out in the PR sector. It shows their works and case studies — highlighting their expertise and educating users about the company philosophy.",
      stack: ["Next.js", "Javascript", "Mantine", "TailwindCSS", "Shadcn"],
      // img: "/offset-folio.svg",
    },
    {
      title: "SaaS Website Builder",
      liveLink: "https://your-website-builder-link.com/",
      about:
        "A self-hosted portfolio website builder designed for users to easily create and customize their personal websites. The platform supports easy deployment and customization through Next.js.",
      stack: ["Next.js", "Prisma", "TailwindCSS", "MongoDB"],
      // img: "/saas-website-builder.svg",
    },
    {
      title: "Charging Stations App",
      liveLink: "https://your-charging-stations-app-link.com/",
      about:
        "An app that helps users locate charging stations worldwide. The app uses real-time data and integrates maps to display locations and availability.",
      stack: ["React Native", "Redux", "Google Maps API", "Node.js"],
      // img: "/charging-stations-app.svg",
    },
    {
      title: "PDF & Document Generator",
      liveLink: "https://your-pdf-generator-link.com/",
      about:
        "A platform that generates PDFs and Word documents dynamically based on user input. It allows customization of templates for various business needs.",
      stack: ["Node.js", "Express", "html-pdf-node", "docx"],
      // img: "/pdf-generator.svg",
    },
    {
      title: "Strategic Planning Bot",
      liveLink: "https://your-strategic-planning-link.com/",
      about:
        "A bot that helps institutes generate strategic plans based on their vision and mission statements. It is designed to align objectives with the institute's goals and accreditation requirements.",
      stack: ["Next.js", "GPT API", "MongoDB", "Node.js"],
      // img: "/strategic-planning.svg",
    },
    {
      title: "Student App (Studium)",
      liveLink: "https://your-student-app-link.com/",
      about:
        "A mobile app built with React Native that helps students manage their academic activities and assignments. The app integrates with external APIs for notifications and calendar management.",
      stack: ["React Native", "Firebase", "Redux", "Node.js"],
      // img: "/student-app.svg",
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
