"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/studiumtech-logo.svg",
    jobTitle: "Senior MERN Stack Developer",
    company: "Studium Technologies",
    jobType: "Full-time",
    duration: "Apr 2023 - Present",
    stuffIDid: [
      "Developing and maintaining a SaaS product that helps educational institutes manage data and accreditation using Next.js, Prisma, and MongoDB.",
      "Building a platform for generating vision and mission statements based on keywords, improving the efficiency of accreditation processes.",
      "Managing server-side logic with Node.js, implementing features like push notifications and email integration for assignments.",
      "Optimizing application performance and scalability while ensuring seamless UX/UI using TailwindCSS and React.",
      "Collaborating with cross-functional teams to integrate the GPT API for strategic planning bots.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
