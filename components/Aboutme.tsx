import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper sm:text-center">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6 text-justify">
        <p>
          I am a web developer with a
          strong foundation in front-end & back-end development and am skilled
          in creating user-friendly and responsive web applications using React
          and its ecosystem. <br /> <br /> I work on a variety of projects,
          including building and maintaining single page applications,
          integrating with REST APIs, and implementing responsive design
          principles. <br /> <br /> I am also proficient in using tools such as Webpack, npm,
          and Git for development and deployment. In addition to my technical
          skills, I am a strong communicator and team player. <br /> <br /> I am able to work
          effectively with cross-functional teams and am comfortable taking on
          new challenges and learning new technologies as needed.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
