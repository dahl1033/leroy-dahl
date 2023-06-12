import { use, useEffect, useState } from "react";

import { Card } from "components/types";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


const ProjectCard = ({ key, project }: { key: number; project: Card }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    // Add the query parameter 'project' with the value '1' to the current URL
    console.log(project)
    router.push({
      query: { project: project.id },
    },
      undefined, { scroll: false });
  };
  return (
    <div className="flex flex-row hover:cursor-pointer h-20 justify-between p-2 items-center min-h-[80px] border border-transparent border-b-black w-full">
      <div onClick={() => handleClick()} className="flex flex-row items-center justify-between w-full"
      >
        <div className="flex gap-2">
          <img src={project.image} alt="project image" className="w-20 self-center" />

          <h1 className="self-center">{project.title}</h1>
        </div>
        <div className="self-center">
          <ChevronRight />
        </div>
      </div>
    </div>

  );
};

export default ProjectCard;
