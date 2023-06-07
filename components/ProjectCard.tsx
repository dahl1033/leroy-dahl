import { use, useEffect } from "react";

import { Card } from "pages/experience/cards";
import { Disclosure } from "@headlessui/react";

const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


const ProjectCard = ({ key, project }: { key: number; project: Card }) => {

  return (
    <div className="flex flex-row h-20 justify-between p-2 items-center min-h-[80px] border border-transparent border-b-black">
      <Disclosure defaultOpen={false}>
        <Disclosure.Button>
          <img src={project.image} alt="project image" className="w-20" />

          <div className="">
            <h1>{project.title}</h1>
          </div>
          <div>
            <ChevronRight />
          </div>
        </Disclosure.Button>
        <Disclosure.Panel className="relative text-gray-500">
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Disclosure>
    </div>

  );
};

export default ProjectCard;
