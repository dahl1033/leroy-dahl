import { useEffect, useState } from "react";

import BeeComponent from "components/Bee";
import ContactForm from "components/ContactForm";
import Link from "next/link";
import ProjectCard from "components/ProjectCard";
import ProjectModal from "components/ProjectModal";
import SpinningImage from "components/SpinningImages";
import SpinningImages from "components/SpinningImages";
import { cards } from "../../components/types";

const About = () => {
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
  useEffect(() => {
    const textBlock = document?.getElementById('productHover');
    textBlock?.addEventListener('onmouseover', function () {
      if (!hasRotated) {
        setHasRotated(true);
        textBlock.style.animation = 'rotate 3s linear forwards';
      }
    });
  }, []);

  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex sm:flex-col-reverse flex-col md:flex-row ">
        <div className="md:flex md:flex-col md:justify-end md:w-2/3 mt-6">
          {/* <h1 className="text-6xl font-bold text-navy md:mb-12 mb-8 dark:text-white">
            Hi, I'm LeRoy.
          </h1> */}
          <h1 className="text-7xl font-bold text-gray-400 dark:text-white mb-8">
            turning
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> ideas </span>
            into real life
            <span id="productHover" className="hover:p-1 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"> products</span>
          </h1>
        </div>
        {/* <img
          src="/smiles-remove.png"
          alt="smiles"
          className="md:w-1/4 md:h-1/4 w-full h-auto border-3 rounded-full "
        /> */}
        {/* <div className=""> */}
        <Link
          className={`flex flex-col text-black dark:text-white justify-end`}
          href="/experience"
        ><span>LEARN MORE</span>
          <span className="text-black dark:text-white -mt-4">____________</span></Link>
        {/* </div> */}
      </div>
      {/* <Link
        className={`flex flex-col text-black dark:text-white `}
        href="/experience"
      ><span>VIEW PROJECTS</span>
        <span className="text-black dark:text-white -mt-4">____________</span></Link> */}
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
        <div className="sm:w-2/3 w-full flex flex-col shadow-md border rounded-lg  items-center px-6 dark:bg-navy dark:border-transparent p-6">
          <h1 className="text-4xl font-bold text-navy dark:text-white sm:leading-tight">
            {`Let's build the future together.`}
          </h1>
          <h3 className="text-sm text-gray-500 sm:mt-2 mt-4">{`In addition to my technical skills, I am a lifelong learner. The field of software 
          engineering is ever-evolving, and I am dedicated to staying ahead of the curve. I actively seek out new technologies, frameworks, 
          and industry trends to ensure that I can offer the most innovative and up-to-date solutions to my clients. As you explore my portfolio, 
          you'll find a diverse range of projects that highlight my expertise and creativity. From web applications to mobile apps, I have successfully 
          delivered projects across multiple domains. Each project represents a unique challenge that I embraced wholeheartedly, working diligently to 
          find the most elegant and efficient solutions. I am excited about the possibilities that lie ahead in the world of software engineering. Whether 
          you're a startup looking to bring your vision to life, a company seeking to optimize its processes, or an individual with an idea that could change 
          the world, I am ready to be your trusted partner in transforming concepts into reality. Thank you for visiting my portfolio site. I invite you to explore 
          my projects, learn more about my skills and experiences, and get in touch if you'd like to collaborate on a project or simply have a chat about the fascinating 
          world of software engineering.`}</h3>
        </div>
      </div>
      <div className="flex flex-col lg:my-12 mb-12">
        <div className="flex flex-col mt-8">
          <h1 className="text-4xl font-bold text-navy md:mb-1 mt-6 dark:text-white sm:leading-tight">How I work</h1>
          <h3 className="text-sm text-gray-500 mt-6 sm:mt-0">I believe strongly that software should be built the same way we would build a car. Focus on what the user wants and make it as easy as possible for them to use.
            In this case, a user wants to go from point A to point B faster. So we build a car. Or do we? We could build a skateboard, a motorcycle, a car, or a plane.
            The point is, we need to build the right product for the right user. If the budget we have is ginormous, we can build a plane. If the budget is small, we
            can build a skateboard. Ultimately they all get the user from point A to point B, but the user experience is vastly different.</h3>
          <div className="flex sm:justify-center items-center">
            <h3 className="text-sm text-gray-500 w-4/5 sm:w-auto">The thing to keep in mind is that if the user only knew how to walk, they would (at first) be happy with a skateboard. But as they experience more, they will
              want to go faster. So we build a bike with gears. Then they want to go faster. So we build a motorcycle. Then they want to be warm and safer. So we build a car.</h3>
            <SpinningImages />
          </div>

          <h3 className="text-sm text-gray-500">This is how I approach software. I build the skateboard first, then the bike, then the motorcycle, then the car. All of which have functionality and components
            of the product before them.</h3>
        </div>
        <div className="w-full justify-end flex">

        </div>
      </div>
      <ContactForm />
      <ProjectModal />
    </div>
  );
};
export default About;
