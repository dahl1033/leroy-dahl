import { Card } from "pages/about/cards";

const ProjectCard = ({ project }: { project: Card }) => {
  return (
    <li className="h-72 min-w-60 w-60 flex-[0_0_auto] flex flex-col border rounded-md transform overflow-hidden -rotate-3">
      {/* <img src={project.image} alt={project.title} /> */}
      <div
        className={`${project.background} py-8 h-full px-2 flex flex-col items-center justify-center w-full max-w-300 p-2 border-none rounded-t`}
      >
        <img className="" src={project.image} />
      </div>
      {/* <div>
        <h1 className="text-lg">{project.title}</h1>
        <p className="text-sm">{project.description}</p>
      </div> */}
    </li>
  );
};

export default ProjectCard;
