import {
  Icon,
  IconList,
  IconProps,
} from "components/Icons";
import { useEffect, useRef, useState } from "react";

import BeeComponent from "components/Bee";
import ContactForm from "components/ContactForm";
import Disclosure from "components/Disclosure";
import Link from "next/link";
import ProjectCard from "components/ProjectCard";
import ProjectModal from "components/ProjectModal";
import SpinningImage from "components/SpinningImages";
import SpinningImages from "components/SpinningImages";
import { cards } from "../../components/types";
import { useTheme } from "next-themes";

const About = () => {
//   function quad(timeFraction: number) {
//     return Math.pow(timeFraction, 2)
//   }
//   function makeEaseOut(timing: (arg0: number) => number) {
//     return function(timeFraction: number) {
//       return 1 - timing(1 - timeFraction);
//     }
//   }
  
//   let posArray: any = Array(IconList.length).fill(0);
//   let idArray: any = Array(IconList.length).fill(null);
//   let blocksArray: any = []

//   function frame (pos:any, block:any, togo:any, id: any) {
//     console.log("FRAMMMING")
//     if (block?.offsetLeft == togo?.offsetLeft && block?.offsetTop == togo?.offsetTop) {
//       clearInterval(id);
//       id= null
//     } else {
//       posArray[pos]++;
//       if (block?.offsetTop !== togo?.offsetTop) {
//         block.style.top = pos + 'px';
//       }
//       if (block?.offsetLeft !== togo?.offsetLeft) {
//         block.style.left = pos + 'px';
//       }
//     }
//   }
//   useEffect(() => {

    

//     const runner = () => {
//       let togo = document.getElementById("togo");
      
//       for (let i= 0; i < IconList.length; i++ ) {
//         let block = document.getElementById(IconList[i].icon);
//         console.log({block, blocks: block?.offsetTop,icon: IconList[i].icon })
//         if (blocksArray[i]) {
//           clearInterval(idArray[i]);
//           idArray[i] = setInterval(frame(i, block, togo, idArray[i]), 80);
          
// }}

// }
// runner()
// ;}, []);
  const ref = useRef<null | HTMLDivElement>(null);

  const [hasRotated, setHasRotated] = useState(false);
  useEffect(() => {
    console.log("cards: ", cards);
  }, []);

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
        
        <Link
          className={`flex flex-col text-black dark:text-white justify-end`}
          href="/experience"
        ><span>LEARN MORE</span>
          <span className="text-black dark:text-white -mt-4">____________</span></Link>
      </div>
      <div className="flex flex-col-reverse sm:flex-row mt-12 w-full gap-2">
        <div className="sm:w-1/3 w-full shadow-md border rounded-lg dark:border-transparent h-80 sm:mt-0 mt-6">
          <div className="w-full border rounded-t-lg dark:border-transparent bg-gradient-to-r from-purple-500 to-pink-500 h-16">
            <h1 className="text-2xl font-bold text-white text-center pt-4 p-4 flex">
              Projects
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
            {`Let's build the future together.`}
          </h1>
          <div className="flex flex-wrap gap-8">
          {IconList.map((icon) => (
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
        ))}
        </div>
          <h3 className="text-sm text-gray-500 sm:mt-2 mt-4">HELLO</h3>
        </div>
      </div>
      <div ref={ref} className="flex flex-col lg:my-12 mb-20">
        <div className="flex flex-col mt-8">
          <h1 className="text-4xl font-bold text-navy md:mb-1 mt-6 dark:text-white sm:leading-tight">How I work</h1>
          <div className="flex flex-row w-full">
            <h3 className="text-sm text-gray-500 mt-6 sm:mt-0 md:w-1/2 lg:w-3/5">I strongly believe software development should emulate the process of building a car,
              focusing on user needs and ensuring ease of use. Just as users desire faster transportation from point A to point B, we create various options
              like skateboards, motorcycles, cars, or planes to cater to different users.
              <div className="w-72 float-right md:hidden"><SpinningImages /></div>
              The key is to match the right product with the right user based on
              budget and user experience requirements. Initially, a skateboard satisfies a user who only knows how to walk, but as they seek faster options,
              we progress to bikes, motorcycles, and eventually cars. This sequential approach applies to software development as well, starting with a basic
              version (skateboard) and gradually adding functionality and components with each iteration.</h3>
            <div className="w-72 md:flex hidden md:w-1/2 lg:w-2/5 justify-center"><SpinningImages /></div>
          </div>
        </div>
        <div className="w-full justify-end flex">

        </div>
      </div>
      <ContactForm />
      <ProjectModal />
      <Disclosure />
    </div>
  );
};
export default About;
