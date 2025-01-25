'use client';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";


function ServiceBlock({ title, imgSrc, order, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const gradientClass =
      "bg-gradient-to-r from-primary via-iceblue to-dark bg-[length:200%_auto] text-transparent bg-clip-text animate-gradient";


    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row items-center xl:px-20"
      >
        {order === "imageFirst" ? (
          <>
            <div className="md:w-1/2 p-4 order-2 md:order-1">
              <Image
                src={imgSrc}
                width={300}
                height={300}
                alt={title}
                className={`border-2 border-iceblue w-72 h-auto m-auto p-8 bg-iceblue/5 rounded-2xl hover:scale-105 transition duration-300`}
              />
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-iceblue hidden shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] md:block"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-iceblue shadow-lg rounded-xl w-10 h-10 items-center justify-center text-xl font-bold text-dark hidden md:block">
              <p className="w-full h-10 pt-1 text-center text-slate-950">
                {index}
              </p>
            </div>
            <div className="md:w-1/2 md:p-4 order-1 md:order-2">
              <h1
                className={`text-3xl font-bold text-center md:mt-0 mt-8 md:p-4 ${gradientClass}`}
              >
                {title}
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="md:w-1/2 md:p-4">
              <h1
                className={`text-3xl font-bold text-center md:mt-0 mt-8 md:p-4 ${gradientClass}`}
              >
                {title}
              </h1>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.2)] hidden md:block"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-iceblue shadow-lg rounded-xl w-10 h-10 items-center justify-center text-xl font-bold text-dark hidden md:block">
              <p className="w-full h-10 pt-1 text-center text-slate-950 ">
                {index}
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <Image
                src={imgSrc}
                width={300}
                height={300}
                alt={title}
                className="border-2 border-iceblue w-72 h-auto m-auto p-8 bg-iceblue/5 rounded-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </>
        )}
      </motion.div>
    );
  }
  
    export default ServiceBlock;