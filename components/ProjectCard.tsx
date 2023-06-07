import { use, useEffect, useState } from "react";

import { Card } from "pages/experience/cards";
import { Dialog } from "@headlessui/react";

const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


const ProjectCard = ({ key, project }: { key: number; project: Card }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row h-20 justify-between p-2 items-center min-h-[80px] border border-transparent border-b-black">
      {/* <Dialog

        open={true}
        onClose={() => setIsOpen(false)} > */}

      <div onClick={() => setIsOpen(true)} className="flex flex-row gap-2 items-center"
      >
        <img src={project.image} alt="project image" className="w-20" />

        <div className="">
          <h1>{project.title}</h1>
        </div>
        <div>
          <ChevronRight />
        </div>
      </div>
      {isOpen && (
        <div className="none fixed top-0 w-full h-full">
          <div className="fixed inset-0 bg-black/30" />
          <div className="relative m-auto p-5 w-1/2 max-w-[500px] bg-white mt-1/2">
            <img src={project.image} alt="project image" className="w-20" />
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </p>
          </div>
        </div>
      )}

      {/* {isOpen && (
        <Dialog
          static
          // as={motion.div}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/30" />

          <Dialog.Panel className="none fixed top-0 w-full h-full">
            <div className="relative m-auto p-5 w-1/2 max-w-[500px] bg-white mt-1/2 ">
              <Dialog.Title>Deactivate account</Dialog.Title>
              <Dialog.Description>
                This will permanently deactivate your account
              </Dialog.Description>

              <p>
                Are you sure you want to deactivate your account? All of your data
                will be permanently removed. This action cannot be undone.
              </p>

              <button onClick={() => setIsOpen(false)}>Deactivate</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </Dialog.Panel>
        </Dialog> */}

    </div>

  );
};

export default ProjectCard;
