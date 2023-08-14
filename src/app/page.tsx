import DescriptionMap from "@/components/DescriptionMap";
import Image from "next/image";
import Link from "next/link";

function SectionHeaderText(props) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

export default function Home() {
  const links = [
    { name: "Email", content: "rewbens@gmail.com", link:'' },
    { name: "GitHub", content: "rewbens", link:'https://github.com/rewbens'},
    { name: "Linkedin", content: "Benjamin Rew", link:'https://www.linkedin.com/in/benjaminrew23/'},
  ];

  const skills = [
    {
      name: "Languages",
      content: ["JavaScript", "Typscript", "Python", "Java"],
    },
    { name: "Tools & Libraries", content: ["React", "Nextjs 13", "Vite"] },
    { name: "Frameworks", content: ["Tailwind", "Sass", "Bootstrap"] },
    { name: "Databases", content: ["PostgreSQL", "MongoDB", "Java Spring"] },
    {
      name: "Design & Project management",
      content: [
        "Trello",
        "Jira",
        "Notion",
        "Figma",
        "Canva",
        "Gimp",
        "Inkscape",
        "Blender",
      ],
    },
    { name: "Version Control", content: ["Git & Github"] },
    {
      name: "Principles",
      content: ["TDD & OOP", "Restful workflow", "SOLID Principles", "Agile"],
    },
  ];

  const projects = [
    { name: "Menu Finder App (January 2023)", content: " ......" },
    { name: "Planets Educational App (November 2022)", content: " ......" },
    { name: "Ascent App (October 2022)", content: "......" },
  ];

  const learning = [
    {
      name: "Typscript",
      content: ["Improved quality, specificity and error handling"],
    },
    {
      name: "Vanilla JS",
      content: [
        "Frameworks, tools and libraries come and go, vanilla JavaScript is here to stay",
      ],
    },
  ];

  const hobbies = [
    { name: "Cycling", content: ["A big fan of the outdoors...."] },
    { name: "Climbing", content: ["A big fan of the outdoors...."] },
  ];

  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      <h2 className="font-bold sm:py-4 md:py-8 text-4xl sm:text-5xl md:text-6xl">
        Digital Resume
      </h2>
      <section>
        <h4></h4>
        <SectionHeaderText>Benjamin Rew - Software Developer</SectionHeaderText>
        <DescriptionMap list={links} type={"links"} />
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>
        <DescriptionMap list={skills} type={"skills"} />
      </section>
      <section>
        <SectionHeaderText>Projects</SectionHeaderText>
        <p className='text-xs sm:text-sm'>
          Check out my latest <Link href={'/projects'}className="text-sky-400">projects</Link>
        </p>
      </section>
      <section>
        <SectionHeaderText>
          What I&#39;m <a>learning</a> now!
        </SectionHeaderText>
        <DescriptionMap list={learning} type={"learning"} />
      </section>
      <section>
        <SectionHeaderText>
          Hobbies for <a>fun!</a>
        </SectionHeaderText>
        <DescriptionMap list={hobbies} type={"hobbies"} />
      </section>
    </main>
  );
}
