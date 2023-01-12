import { Card } from "lib/cards";
import { use, useEffect } from "react";

const ProjectCard = ({ key, project }: { key: number; project: Card }) => {
  const orientation = project.id % 2 === 0 ? "rotate-3" : "-rotate-3";
  useEffect(() => {
    console.log("project: ", key, orientation);
  }, [project]);
  return (
    <li
      className={`h-72 min-w-60 w-60 flex-[0_0_auto] flex flex-col border rounded-md transform overflow-hidden ${orientation}`}
    >
      {/* <img src={project.image} alt={project.title} /> */}
      <div
        className={`dark:${project.background} bg-white py-8 h-full shadow-lg border px-2 flex flex-col items-center justify-center w-full max-w-300 p-2 border-none rounded-t`}
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
