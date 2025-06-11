import React from "react";
import Image from "next/image";

const HeroSectionAbout = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <Image
        src="/about-bg.jpg" 
        alt="About Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-start px-10">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Journey and Vision
          </h1>
          <p className="text-lg">
            We strive to provide seamless hotel experiences that blend comfort, affordability, and luxury.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;