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
import { useTheme } from "next-themes";

const About = () => {
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
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <Dialog.Panel className={`flex sm:absolute relative dark:bg-slate-600 bg-${bgColor}-500 sm:top-[50%] sm:w-[50%] sm:left-[25%]  m-4 flex-col rounded-lg p-8`}>
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
  const ref = useRef<null | HTMLDivElement>(null);

  const [hasRotated, setHasRotated] = useState(false);
  const [color, setColor] = useState("gray");

  const images = [
    "../../public/assets/skateboard.jpg",
    "../../public/assets/motorcycle.jpg",
    "../../public/assets/car.jpg",
    "../../public/assets/animated_car_gif.gif",
  ]

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    const textBlock = document?.getElementById('productHover');
    textBlock?.addEventListener('onmouseover', function () {
      if (!hasRotated) {
        setHasRotated(true);
        textBlock.style.animation = 'rotate 3s linear forwards';
      }
    });
  }, []);

  // const html = document.querySelector("html")
  return (
    <div className="flex flex-col h-full p-8">
      {/* <div id="myAnimation" className="absolute h-20 w-20 bg-yellow-400"/> */}
      {/* {IconList.map((icon) => (
        <div id={icon.icon} className="absolute">
           <div className="flex justify-center align-center flex-col wrap items-center w-fit">
            <Icon
              // id={icon.icon}
              key={icon.icon}
              icon={icon.icon}
              color="red"
              height={60}
              width={60}
              backgroundColor="white"
            />
            <h1 className="">
              {icon.name}
            </h1>
          </div>
          </div>
        ))} */}
      <div className="flex sm:flex-col-reverse flex-col md:flex-row ">
        <div className="md:flex md:flex-col md:justify-end md:w-2/3">
          <h1 className="text-7xl font-bold text-gray-400 dark:text-white mb-8">
            turning
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> ideas </span>
            into real life
            <span id="productHover" onClick={handleClick} className="hover:p-1 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"> products</span>
          </h1>
        </div>
        
        <div
          className={`flex flex-col text-black dark:text-white justify-end hover:cursor-pointer`}
          onClick={handleClick}
        ><span>LEARN MORE</span>
          <span className="text-black dark:text-white -mt-4">____________</span></div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row mt-12 w-full gap-2">
        <div className="sm:w-1/3 w-full shadow-md border rounded-lg dark:border-transparent h-80 sm:mt-0 mt-6">
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
        <div id="togo" className="sm:w-2/3 w-full flex flex-col shadow-md border rounded-lg  items-center px-6 dark:bg-navy dark:border-transparent p-6">
          <h1 className="text-4xl font-bold mb-2 text-navy dark:text-white sm:leading-tight">
            {`My Toolkit`}
          </h1>
          <div className="flex flex-wrap gap-8 justify-center flex-col items-center">
            <MyDialog />
            <div 
              className="flex justify-center w-32 h-[48px] bg-red-500 p-3 rounded-lg items-center cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-300 text-white dark:border-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:bg-transparent dark:text-red-500  dark:border-2"
              onMouseOver={() => setColor("red")}
              onMouseLeave={() => setColor("gray")}
              onClick={() => {
                setList(FrontEndIconList);
                setDialogTitle("Front End");
                setDialogDescription("Front End Description");
                setBgColor("red");
                setIsOpen(true);
              }}>
              Front End
            </div>
            <div className="flex justify-between">
              <div
                className="flex justify-center w-32 h-[48px] bg-blue-500 p-3 rounded-lg items-center cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300 text-white dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:bg-transparent dark:text-blue-500  dark:border-2"
                onMouseOver={() => setColor("blue")}
                onMouseLeave={() => setColor("gray")}
                onClick={() => {
                  setList(BackEndIconList);
                  setDialogTitle("Back End");
                  setDialogDescription("Back End Description");
                  setBgColor("blue");
                  setIsOpen(true)
                }}>
                Back End
              </div>
              <Carousel icons={IconList}  color={color} />
              <div
                className="flex justify-center h-[48px] w-32 bg-green-500 p-3 rounded-lg items-center cursor-pointer hover:bg-green-600 transition-all ease-in-out duration-300 text-white dark:border-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:bg-transparent dark:text-green-500  dark:border-2"
                onMouseOver={() => setColor("green")}
                onMouseLeave={() => setColor("gray")}
                onClick={() => {
                  setList(DatabaseIconList);
                  setDialogTitle("Database");
                  setDialogDescription("Database Description");
                  setBgColor("green");
                  setIsOpen(true)
                }}
              >
                Database
              </div>
            </div>
            <div
              className="flex justify-center h-[48px] w-32 bg-yellow-500 p-3 rounded-lg items-center cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 text-white dark:border-yellow-500 dark:hover:bg-yellow-600 dark:hover:text-white dark:bg-transparent dark:text-yellow-500  dark:border-2"
              onMouseOver={() => setColor("yellow")}
              onMouseLeave={() => setColor("gray")}
              onClick={() => {
                setList(WebServerIconList);
                setDialogTitle("Dev Ops");
                setDialogDescription("Dev Ops Description");
                setBgColor("yellow");
                setIsOpen(true)
              }}
            >
              Dev Ops
            </div>
            
            {/* <div>
              Mobile
            </div> */}
            {/* {IconList.map((icon) => (
            <div className="flex justify-center align-center flex-col wrap items-center w-fit">
              
              <Icon
                key={icon.icon}
                icon={icon.icon}
                color="gray"
                height={60}
                width={60}
                backgroundColor="white"
              />
              <h1 className="">
                {icon.name}
              </h1>
            </div>
          ))} */}
        </div>
          {/* <h3 className="text-sm text-gray-500 sm:mt-2 mt-4">HELLO</h3> */}
        </div>
      </div>
      <div ref={ref} className="flex flex-col lg:my-12 mb-20">
        <div className="flex flex-col mt-8">
          <h1 className="text-4xl font-bold text-navy md:mb-1 mt-6 dark:text-white sm:leading-tight">How I work</h1>
          <div className="flex flex-row w-full">
            <h3 className="text-sm text-gray-500 mt-6 sm:mt-0 md:w-1/2 lg:w-3/5">There are three things that determine a products outcome in development. Cost, time, and quality. 
              In most situations the product owner has to pick two of these to meet their end goal. You want a high quality product in the least amount of time? Well that's going 
              to cost a lot of money. You want a high quality product for a low cost? Well that's going to take a lot of time. You want a product fast and cheap? Well that's going 
              to be low quality.
              I believe software development should emulate the process of building a car. Instead of 
              going straight to building the complexities of a car, ask what it is that the user needs. If the user needs to get from point A to point B faster,
              maybe a car isn't the right option. Just as users desire faster transportation from point A to point B, we create various options
              like skateboards, motorcycles, cars, or planes to cater to different users.
              <div className="w-72 float-right md:hidden"><SpinningImages /></div>
              The key is to match the right product with the right user based on
              budget and user experience requirements. Initially, a skateboard satisfies a user who only knows how to walk, but as they seek faster options,
              we progress to bikes, motorcycles, and eventually cars. This sequential approach applies to software development as well, starting with a basic
              version and gradually adding functionality and components with each iteration. It allows a product to grow with it's users feedback, saving time, money,
              and user satisfaction.</h3>
            <div className="w-72 md:flex hidden md:w-1/2 lg:w-2/5 justify-center"><SpinningImages /></div>
          </div>
        </div>
        <div className="w-full justify-end flex">

        </div>
      </div>
      <ContactForm />
      <ProjectModal />
      {/* <Disclosure /> */}
    </div>
  );
};
export default About;
