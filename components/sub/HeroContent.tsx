"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mb-[200] w-full h-4/5 z-[1]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* FULL STACK ICON */}
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developing</h1>
        </motion.div>

        {/* HERO TITLE */}
        <motion.div variants={slideInFromLeft(1.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            La web al alcance de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> tus manos</span>
          </span>
        </motion.div>

        {/* HERO TEXT */}
        <motion.p variants={slideInFromLeft(2.1)} className="text-lg text-gray-400 mt-1 mb-4 max-w-[600px]">
        Somos un equipo de desarrolladores profesionales de software comprometidos a ofrecerte una experiencia excepcional en diseño web. Tu sitio web <strong>ideal</strong> está a solo un clic de distancia.
        </motion.p>

        {/* HERO BUTTON */}
        <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Contrátanos!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;