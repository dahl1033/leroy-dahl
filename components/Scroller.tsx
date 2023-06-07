import React, { useEffect } from 'react';

import JSXStyle from 'styled-jsx/style';

const ScrollAnimation = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const element = document.querySelector('.scroll-animation');

            if (element) {
                element.style.transform = `translateY(${scrollPos}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-animation bg-blue-500 fixed top-0 left-0 w-full h-screen transition-transform duration-500 transform">
            {/* Your content */}
        </div>
    );
};

export default ScrollAnimation;
