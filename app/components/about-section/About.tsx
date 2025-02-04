import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I amplify brand voices through the web
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
  <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
    <AnimatedBody className="leading-[34px] md:leading-[39px]">
      My passion lies in building strong business solutions that drive growth. Whether its developing a website to boost brand presence or creating software to automate manual processes, I love helping brands transition from where they are to where they dream to be, all while iterating and improving along the way. Every line of code is a step toward solving a real-world problem, and I find immense satisfaction in that.
    </AnimatedBody>
    <AnimatedBody className="leading-[34px] md:leading-[39px]">
      Since writing my first lines of code in late 2019, I have continuously refined my development skills, picking up UI/UX design along the way. Ive solved increasingly complex challenges, pushing myself to learn and grow, ensuring that I constantly improve my craft. Each project is an opportunity to learn something new, and I embrace the challenges it brings. Whether its optimizing performance, building reusable components, or improving UI/UX, I am always looking for ways to make my work more efficient and impactful.
    </AnimatedBody>
    <AnimatedBody className="leading-[34px] md:leading-[39px]">
      My journey in development started with the basics but quickly grew into full-fledged web applications. Over the years, I’ve worked with various frontend and backend technologies to bring ideas to life. The combination of creative design and technical skills is what excites me the most. I believe a great product doesnt just solve a problem—it provides an experience that delights users, and that’s what I strive to build with every project I work on.
    </AnimatedBody>
    <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
      Each challenge is unique, and I approach every one with a mindset to learn and grow. I strive to deliver my best and provide businesses with solutions they can be proud of. Its not just about coding; its about creating products that are scalable, maintainable, and user-friendly. Want to learn more? Heres <br className="hidden md:block" />
      <Link
        className="underline"
        href={
          "https://drive.google.com/file/d/1anHhWT2w04nGYbVQ6V8EcLWAkE1lA8TG/view?usp=drive_link"
        }
      >
        My Resume
      </Link>
      .
    </AnimatedBody>
  </div>

  <div className="grid grid-cols-1 gap-4">
    <div>
      <AnimatedTitle
        wordSpace={"mr-[0.5ch]"}
        charSpace={"mr-[0.001em]"}
        className="font-bold antialiased text-xl md:text-2xl mb-2"
      >
        Frontend Tools
      </AnimatedTitle>
      <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
        I’ve honed my skills with modern JavaScript frameworks like React and Next.js, building dynamic, fast, and user-friendly applications. I’m proficient in TypeScript, Redux, and React Query, which help me manage state and API calls efficiently. Tools like React Hook Form and Formik have streamlined form handling, and Git/GitHub is an essential part of my workflow for version control and collaboration.
      </AnimatedBody>
    </div>
    <div>
      <AnimatedTitle
        wordSpace={"mr-[0.5ch]"}
        charSpace={"mr-[0.001em]"}
        className="font-bold antialiased text-xl md:text-2xl mb-2"
      >
        UI Libraries
      </AnimatedTitle>
      <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
        For styling and component development, I rely on CSS3, SCSS, and SASS, and I’ve used Tailwind CSS extensively for building highly customizable UIs. I also enjoy working with Styled Components and Chakra UI for component-based styling. Framer Motion is my go-to for animations, and Bootstrap and ReCharts have helped in building responsive designs and interactive charts when needed.
      </AnimatedBody>
    </div>
    <div>
      <AnimatedTitle
        wordSpace={"mr-[0.5ch]"}
        charSpace={"mr-[0.001em]"}
        className="font-bold antialiased text-xl md:text-2xl mb-2"
      >
        Design Tools
      </AnimatedTitle>
      <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
        Design plays a key role in my development process. I’ve worked with Figma and FigJam for designing and prototyping, making it easy to create visually appealing user interfaces. I’m also involved in UX research to better understand user needs and ensure that the designs are not just beautiful, but functional and user-centric. Prototyping is essential in my workflow, and I enjoy translating ideas into tangible, interactive designs.
      </AnimatedBody>
    </div>
  </div>

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
        <li><strong>UI/UX Design:</strong> Extensive experience with Figma, UI design principles, prototyping, and user-centric designs. Passionate about delivering seamless user experiences through thoughtful design.</li>
        <li><strong>Backend Development:</strong> Skilled in Node.js, Express, and working with databases such as MongoDB. Familiar with RESTful APIs and integrating third-party services.</li>
        <li><strong>Version Control & Collaboration:</strong> Experienced with Git/GitHub for version control and team collaboration on large-scale projects.</li>
        <li><strong>Cross-Platform Development:</strong> Knowledge of React Native for building mobile apps, with a focus on performance optimization and native look & feel.</li>
        <li><strong>Cloud Technologies:</strong> Familiar with AWS services for hosting and deployment, ensuring scalability and security for applications.</li>
        <li><strong>Testing & Debugging:</strong> Proficient in writing unit and integration tests using Jest, React Testing Library, and debugging complex issues to ensure optimal performance.</li>
      </ul>
    </div>
  </div>
</div>


    </section>
  );
}
