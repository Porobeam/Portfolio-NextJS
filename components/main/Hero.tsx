import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-screen" id="about-me">
      <video autoPlay muted loop className="absolute top-0 left-0 min-w-full h-full z-0 object-cover">
        <source src="/world.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};


export default Hero;
