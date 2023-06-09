import { Dialog, Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';

const CloseModalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


function Disclosure() {
    const [isOpen, setIsOpen] = useState(true);

    setInterval(() => {
        setIsOpen(false);
    }, 7000);


    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="self-center text-white mt-10 w-24 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
                Contact
            </button>
            <Transition.Root show={isOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 flex flex-wrap items-center justify-center overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                >
                    <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
                    <div className="relative bg-white p-8 sm:max-w-sm rounded-lg m-4 sm:m-0">
                        <div className='absolute float-right top-[10px] right-[10px]' onClick={() => setIsOpen(false)}><CloseModalIcon /></div>
                        <h1 className="text-4xl font-bold text-navy md:mb-1 dark:text-white sm:leading-tight">Warning</h1>
                        <h3 className="text-sm text-gray-500 mt-2 w-full">This website is still undergoing work.
                            I occasionally add things when i have time outside of my day job and other projects.</h3>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    );
}

export default Disclosure;
