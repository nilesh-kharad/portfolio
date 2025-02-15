import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function Skills() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("skills");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="skills">
      <div className="grid grid-cols-1 gap-4 mt-8">
        <div>
          <AnimatedTitle
            wordSpace={"mr-[0.5ch]"}
            charSpace={"mr-[0.001em]"}
            className="font-bold antialiased text-xl md:text-2xl mb-2"
          >
            My Skills
          </AnimatedTitle>
          <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
            As a senior MERN stack developer, I specialize in building scalable and efficient applications using the latest technologies in the ecosystem. My core strengths lie in:
          </AnimatedBody>
          <ul className="list-disc pl-6 text-white/60 text-base md:text-xl leading-8">
            <li><strong>Frontend Development:</strong> Proficient in JavaScript (ES6+), React, Next.js, and TypeScript. Strong grasp of Redux, React Query, and state management principles.</li>
            <li><strong>UI/UX Design:</strong> Extensive experience with Figma, UI design principles, prototyping, and user-centric designs. Passionate skills delivering seamless user experiences through thoughtful design.</li>
            <li><strong>Backend Development:</strong> Skilled in Node.js, Express, and working with databases such as MongoDB. Familiar with RESTful APIs and integrating third-party services.</li>
            <li><strong>Version Control & Collaboration:</strong> Experienced with Git/GitHub for version control and team collaboration on large-scale projects.</li>
            <li><strong>Cross-Platform Development:</strong> Knowledge of React Native for building mobile apps, with a focus on performance optimization and native look & feel.</li>
            <li><strong>Cloud Technologies:</strong> Familiar with AWS services for hosting and deployment, ensuring scalability and security for applications.</li>
            <li><strong>Testing & Debugging:</strong> Proficient in writing unit and integration tests using Jest, React Testing Library, and debugging complex issues to ensure optimal performance.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}