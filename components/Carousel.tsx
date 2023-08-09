// components/Carousel.js

import React, { useEffect, useState } from "react";

import { Icon } from "./Icons";

const Carousel = ({ icons, color }: any) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons]);

  return (
    <div className="flex items-center justify-center h-20 w-20 sm:mx-10">
      {icons.map((icon:any, index:any) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-500 ${
            index === currentIconIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Icon
                key={icon.icon}
                icon={icon.icon}
                color={color}
                height={60}
                width={60}
                backgroundColor={'white'}
              />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
