"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particle from "@/src/components/Common/Particle";

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="hero" className="relative h-screen overflow-hidden">
<div id="tsparticles1" className="absolute inset-0 z-96">
  <Particle id="particles-hero" zIndex={-50} />
</div>

            <div className="absolute inset-0 flex justify-center opacity-70 -translate-y-60 -z-10">
                <div className="w-[1000px] h-[400px] bg-gradientbg blur-[100px] rounded-full"></div>
            </div>

            <div className="absolute inset-0 md:bg-black bg-black/60 -z-20"></div>
            <div className="absolute inset-0 md:bg-transparent bg-black/60 -z-10"></div>

            <div className="container flex items-center justify-center h-full">
                <div className="text-center" ref={ref}>
                
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-white font-bold text-4xl md:text-5xl lg:text-7xl mb-4 px-20 "
                    >
                        WHAT WE ARE CAPABLE OF DOING  
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                        className="text-iceblue tracking-wide text-sm md:text-md font-semibold lg:text-3xl lg:px-20 bg-gradient-to-r from-primary via-iceblue to-blue-700 bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient"
                    >
                        Discover the impact we bring to your brand.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
