import {
  BackEndIconList,
  DatabaseIconList,
  FrontEndIconList,
  Icon,
  IconList,
  IconProps,
  WebServerIconList,
} from "components/Icons";
import { useEffect, useRef, useState } from "react";

import AnimatedElement from "components/AnimatedElement";
import BeeComponent from "components/Bee";
import Carousel from "components/Carousel";
import ContactForm from "components/ContactForm";
import { Dialog } from "@headlessui/react";
import Disclosure from "components/Disclosure";
import Link from "next/link";
import ProjectCard from "components/ProjectCard";
import ProjectModal from "components/ProjectModal";
import SpinningImage from "components/SpinningImages";
import SpinningImages from "components/SpinningImages";
import { cards } from "../../components/types";
import headshot from "../../public/headshot_orange.png";
import { useTheme } from "next-themes";

const About = () => {
const [hasRotated, setHasRotated] = useState(false);
const [color, setColor] = useState("gray");
let [bgColor, setBgColor] = useState("white")
let [isOpen, setIsOpen] = useState(false)
let [list, setList] = useState(IconList)
let [dialogTitle, setDialogTitle] = useState("Front End")
let [dialogDescription, setDialogDescription] = useState("This will permanently deactivate your account")
function MyDialog() {
  // useEffect(() => {
  //   console.log(window && window.innerWidth)
  // }, [])
  

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className={`fixed inset-0 z-10 overflow-y-auto flex justify-center items-center`}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <Dialog.Panel className={`dark:bg-slate-600 bg-${bgColor}-500 inset-0 lg:m-[50%md:m-[25%] sm:m-[25%] m-4 flex flex-col justify-center items-center rounded-lg p-8`}>
        {/* create a bacdrop that will close the dialog when clicked on */}
        
        <Dialog.Title className={`self-center text-4xl font-bold text-white sm:leading-tight mb-2`}>{dialogTitle}</Dialog.Title>
        {/* <Dialog.Description>{dialogDescription}</Dialog.Description> */}
        <div className="flex flex-wrap gap-8 justify-center">
          {list.map((icon) => (
           <div className="flex justify-center align-center flex-col wrap items-center w-fit">
            <Icon
              key={icon.icon}
              icon={icon.icon}
              color={`white`}
              height={60}
              width={60}
              backgroundColor={bgColor}
            />
            <h1 className="text-white">
              {icon.name}
            </h1>
          </div>
        ))}
        </div>

        {/* create a tailwind class for a button to be border white, text which and on hover it turns to solid of whatever color the background is with white text */}
        <button
          className={`bg-transparent border-2 border-white text-white p-2 rounded-lg mt-8 w-20 hover:bg-${bgColor}-600 hover:border-none self-end`} 
          onClick={() => setIsOpen(false)}>Close</button>
      </Dialog.Panel>
    </Dialog>
  )
}

  return (
    <div>
      {/* <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <div
            >
              Section 1
            </div>
          </li>
          <li>
            <div
            >
              Section 2
            </div>
          </li>
        </ul>
      </nav> */}
      <section className=" h-screen flex mt-12 p-2 sm:mt-32 sm:p-8">
        <AnimatedElement>
        <div className="flex sm:flex-col-reverse flex-col md:flex-row ">
          <div className="md:flex md:flex-col md:justify-end md:w-2/3">
            <h1 className="text-7xl font-bold text-gray-400 dark:text-white mb-8">
              I turn
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> ideas </span>
              into real life
              <span id="productHover"  className="hover:p-1 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"> products</span>
            </h1>
          </div>
          
          <Link
            className={`flex flex-col text-black dark:text-white justify-end hover:cursor-pointer`}
            href="/experience"
          ><span>LEARN MORE</span>
            <span className="text-black dark:text-white -mt-4">____________</span></Link>
      </div>
      <div className="sm:w-1/3 w-full shadow-md border rounded-lg dark:border-transparent h-80 mt-10 sm:mt-16">
          <div className="w-full border rounded-t-lg dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500 h-16">
            <h1 className="text-2xl font-bold text-white text-center pt-4 p-4 flex">
              Clients
            </h1>
          </div>
          <div className="flex flex-col border rounded-b-lg overflow-scroll bg-white h-64">
            {cards.map((card) => (
              <ProjectCard project={card} key={card.id} />
            ))}
          </div>
        </div>
        </AnimatedElement>
      </section>
      <ProjectModal />
    </div>
  );
};
export default About;
