import ProjectCard from "components/ProjectCard";
import SpinningImages from "../../components/SpinningImages";
import { cards } from "../types"

const Experience = () => {
  return (
    <div className="flex flex-col h-full p-8">
      {/* <h1 className="text-7xl font-bold text-gray-50 mb-8">Experience</h1> */}
      <h1 className="text-4xl font-bold text-navy md:mb-1 mt-6 dark:text-white sm:leading-tight">How to build a product</h1>
      <h3 className="text-sm text-gray-500">I believe strongly that software should be built the same way we would build a car. Focus on what the user wants and make it as easy as possible for them to use.
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
      <div>
        <h3 className="text-sm text-gray-500">I have built many products in my career. Some of which are:</h3>
        <div>
          {cards.map((card) => (
            <ProjectCard key={card.id} project={card} />
          ))}
          {/* <CardModal /> */}
        </div>
      </div>
    </div>

  );
};
export default Experience;
