/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect } from "react";
import { exampleImages } from "../../utils/demo-images";
import { stagger, useAnimate, motion } from "framer-motion"; 
import Floating, { FloatingElement } from "./parallax-floating";

const HeroSection = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) });
  }, [animate]);

  return (
    <div className="flex  h-dvh justify-center items-center bg-black overflow-hidden" ref={scope}>
      <motion.div
        className="z-20 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-5xl md:text-7xl -z-20 max-w-[750px] text-center text-white font-calendas italic ">
          Running an online store? Let our WhatsApp API handle the hard stuff!
        </p>
        <div className="flex gap-4  p-4">
          
          <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition z-10">
            Book a demo
          </button>

         
          <button className="px-6 py-2 z-10 border bg-white text-black rounded-full hover:bg-black hover:text-white hover:border-white transition">
            Start for free
          </button>
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden ">
        {exampleImages.map((image, index) => {
          const positions = [
            { depth: 0.5, className: "top-[8%] left-[11%]" },
            { depth: 1, className: "top-[-1%] left-[52%]" },
            { depth: 2, className: "top-[2%] left-[83%]" },
            { depth: 1, className: "top-[35%] left-[83%] hidden md:block" },
            { depth: 1, className: "top-[40%] left-[2%] hidden md:block" },
            { depth: 2, className: "top-[70%] left-[77%]" },
            { depth: 4, className: "top-[73%] left-[15%]" },
            { depth: 1, className: "top-[80%] left-[50%]" },
          ];

          if (!positions[index]) return null;

          return (
            <FloatingElement key={index} depth={positions[index].depth} className={positions[index].className}>
              <motion.img
                initial={{ opacity: 0 }}
                src={image.url}
                alt={`floating-${index}`}
                className="w-24 h-24 md:w-52 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </FloatingElement>
          );
        })}
      </Floating>
    </div>
  );
};

export default HeroSection;
