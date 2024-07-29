import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import omnifood from "../public/img/projects/omnifood.png";
import tailwind_gallery from "../public/img/projects/tailwind_gallery.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={omnifood.src}
          title="OmniFood"
          link="https://omnifood-blue-alpha.vercel.app/"
        />
        <ProjectCard
          img={tailwind_gallery.src}
          title="Tailwind Gallery"
          link="https://tailwind-gallery-nine.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
