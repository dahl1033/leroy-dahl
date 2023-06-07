import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const BeeComponent: React.FC = () => {
    const { scrollY } = useViewportScroll();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollY.onChange((y: number) => {
            const scrolledDistance = window.innerHeight - y;
            const maxScrollDistance = window.innerHeight + document.documentElement.scrollHeight;
            const currentProgress = scrolledDistance / maxScrollDistance;
            setProgress(currentProgress);
        });

        return () => {
            unsubscribe();
        };
    }, [scrollY]);

    return (
        <div className="relative w-full h-screen">
            <motion.img
                src="https://th.bing.com/th?id=OIP.eoIME7Tghho-iNuiivujXQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" // Replace with your bee image path
                alt="Bee"
                className="absolute bottom-0"
                style={{
                    left: `calc(${progress * 100}% - 50px)`,
                    transform: `translateY(${progress * 100}px)`,
                }}
            />
        </div>
    );
};

export default BeeComponent;
