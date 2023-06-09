import React, { useEffect, useState } from 'react';
import { Variants, motion, useAnimation, useCycle } from 'framer-motion';

const images = [
    "/assets/skateboard.png",
    "/assets/bike.png",
    "/assets/motorcycle.png",
    "/assets/car.png",
    // "../public/assets/animated_car_gif.gif",
]

const SpinningImages: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Slider Image"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            className="bg-none h-[100px] w-[150px] md:w-auto  md:h-[230px] md:max-w-[270px]"
        />
    );
};

export default SpinningImages;
