import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Menu Finder App",
      link: "https://github.com/rewbens/Recipe_Generator_FrontEnd",
      backend: "https://github.com/rewbens/Recipe_Generator_Back_End",
      description:"This project is the culmination of all that we learnt while studying professional Software development at Codeclan." 
      
      videoLink: "./public/video.mp4",
    },
    {
      name: "Planet Education App",
      link: "https://github.com/rewbens/Planet_Educational_App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      videoLink: "",
    },
  ];

  return (
    <main className="flex flex-col flex-1 bg-slate-100">
      {projects.map((project, projectIndex) => {
        return (
          <ProjectCard
            key={projectIndex}
            project={project}
            index={projectIndex}
          />
        );
      })}
    </main>
  );
}
