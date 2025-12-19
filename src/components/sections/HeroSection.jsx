import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section id="hero" className="relative pt-28 pb-20 px-4 flex flex-col items-center text-center overflow-hidden">
            <div className="max-w-4xl mx-auto z-10">
                <div className="mb-4 inline-flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-1 border border-blue-100 shadow-sm">
                    <span className="text-blue-500 font-bold mr-2">Ditz</span>
                    <span className="text-sm text-gray-600"> Turning ideas into scroll-stopping brands</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 py-2 leading-tight">
                    Make your brand <br /> grow with creativities
                </h1>

                <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    The new game changer of creativity
                </p>

                <Button variant="primary" className="text-lg px-8 py-4">Get Started</Button>
            </div>

            
        </section>
    );
};

export default HeroSection;
