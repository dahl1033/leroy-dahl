import ProjectCard from "components/ProjectCard";
import { useEffect } from "react";
import { cards } from "./cards";

const About = () => {
  useEffect(() => {
    console.log("cards: ", cards);
  }, []);
  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex flex-col md:flex-row  ">
        <img
          src="/smiles-remove.png"
          alt="smiles"
          className="md:w-1/2 w-full h-auto border-3 rounded-full "
        />
        <div className="md:flex md:flex-col md:justify-end mt-6 sm:pl-6">
          <h1 className="text-6xl font-bold text-black md:mb-16 mb-8 dark:text-white">
            Hi, I'm LeRoy.
          </h1>
          <h1 className="text-7xl font-bold text-gray-400 mb-8">
            I build things for the web.
          </h1>
          <h3 className="text-sm text-gray-500">{`I'm a software engineer based in Minneapolis, MN specializing in developing (and occasionally designing) exceptional websites, applications, and everything in between.`}</h3>
        </div>
      </div>

      <div className="my-4">
        <ul className="absolute w-screen left-0 gap-12 overflow-x-auto h-96 flex flex-nowrap sm:justify-center items-center px-6 sm:pl-96">
          {cards.map((card) => (
            <ProjectCard key={card.id} project={card} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col-reverse sm:flex-row mt-96">
        <div className="flex flex-col mt-8">
          <h1 className="text-4xl font-bold text-black md:mb-1 mt-6 dark:text-white sm:leading-tight">
            {`When I'm not skiing in goofy outfits or playing games, I'm bringing ideas to life.`}
          </h1>
          <h3 className="text-sm text-gray-500 mt-6">{`Above are a couple projects I've designed and implemented software features, scroll and click to find out more.`}</h3>
        </div>
        <div className="w-full justify-end flex">
          <img
            src="/snowboarding.png"
            alt="snow"
            className=" w-full h-auto -mr-8"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
