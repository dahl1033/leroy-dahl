import { Dialog, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

import React from 'react';
import { cards } from "../pages/types";
import { useRouter } from 'next/router';

const ProjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState(cards[0]);
    const router = useRouter();

    useEffect(() => {
        // Check if the URL parameter 'project' is set to '1'
        const projectParam = router.query.project;
        const projectParamString = projectParam?.toString();
        projectParamString && setProject(cards[parseInt(projectParamString)])
        setIsOpen(!!projectParam);
    }, [router.query]);

    const removeProjectParam = () => {
        const { pathname, query } = router;
        delete query.project;
        router.push({
            pathname,
            query,
        });
    };

    return (
        <Transition.Root show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 flex flex-wrap items-center justify-center overflow-y-auto"
                onClose={() => removeProjectParam}
            >
                <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
                <div className="relative bg-white p-8 sm:max-w-sm rounded-lg">
                    {/* Your dialog content goes here */}
                    {/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {project.title}
                    </Dialog.Title> */}
                    <div className="flex flex-col">
                        <img src={project.image} alt="project image" className="w-48 self-center mb-4" />
                        <p className="text-sm text-gray-500">
                            {project.description}
                        </p>
                        <button className='w-16 self-end hover:bg-blend-darken text-white border rounded dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500' onClick={() => removeProjectParam()}>Close</button>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ProjectModal;