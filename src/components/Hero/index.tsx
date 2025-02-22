"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particle from "@/src/components/Common/Particle";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div id="tsparticles" className="-z-10 absolute inset-0">
        <Particle/>
      </div>

      <div className="absolute inset-0 -z-10 flex -translate-y-60 justify-center opacity-70">
        <div className="h-[400px] w-[1000px] rounded-full bg-gradientbg blur-[100px]"></div>
      </div>

      <div className="absolute inset-0 -z-20 bg-black md:bg-black"></div>
      <div className="absolute inset-0 -z-10 bg-black/40 md:bg-transparent"></div>

      <div className="container flex h-full items-center justify-center">
        <div className="text-center" ref={ref}>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 md:px-20 text-4xl font-bold text-white md:text-5xl lg:text-7xl "
          >
            WHAT WE ARE CAPABLE OF DOING
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            className="md:text-md animate-gradient bg-gradient-to-r from-primary via-iceblue to-blue-700 bg-[length:200%_auto] bg-clip-text text-sm font-semibold tracking-wide text-iceblue text-transparent lg:px-20 lg:text-3xl"
          >
            Discover the impact we bring to your brand.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
