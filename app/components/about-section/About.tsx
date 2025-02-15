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

      <div className="mt-6">
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
              }>
              My Resume
            </Link>
          </AnimatedBody>
        </div>
      </div>
    </section>
  );
}
