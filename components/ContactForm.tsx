import { Dialog, Transition } from '@headlessui/react';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';

const CloseModalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


function ContactForm() {
    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // EmailJS configuration
        const serviceId = 'service_1fgz5yr';
        const templateId = 'template_4noqyy9';
        const userId = 'ANHZlHJtuW1x5SOTV';

        // Prepare the template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result: any) => {
                console.log('Email sent successfully');
                // Reset the form fields after successful submission
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error: any) => {
                console.error('Error sending email:', error);
            });
    };



    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="self-center text-white w-24 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500"
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
                    <div className="relative bg-white p-8 sm:max-w-sm rounded-lg">
                        {/* Your dialog content goes here */}
                        {/* <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        {project.title}
                    </Dialog.Title> */}
                        <div className="flex flex-col">
                            <div className='self-end hover:cursor-pointer' onClick={() => setIsOpen(false)}><CloseModalIcon /></div>
                            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="info">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your information"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    );
}

export default ContactForm;
