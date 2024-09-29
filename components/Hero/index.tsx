"use client";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";


const Video = () => {

   // Create a reference for the element
   const ref = useRef(null);
   // Hook to detect if the element is in view
   const isInView = useInView(ref, { once: true }); 

  return (
    <section id="home" className="relative z-10 py-5 md:py-20 lg:py-18">
      <div className="absolute md:right-[10%] opacity-55 justify-center z-[-1] transition -translate-y-72">
        <div className="w-[1000px] h-[400px] rounded-full bg-gradientbg blur-[100px]"> </div>
      </div>

      <div className="container px-10">
        <motion.div
          ref={ref} // Attach the ref to the element
          initial={{ opacity: 0 , y: -100  }}
          animate={isInView ? { opacity: 1 , y: 0  } : { opacity: 0 , y: -100  }} // Only animate when in view
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="wow fadeInUp"
          >
        <SectionTitle
          title="WHAT WE ARE CAPABLE OF DOING ?"
          paragraph="RoiInnovator is a place, where we transform your middle-class business into a powerful digital presence tool for business growth."
          center

        />
        </motion.div>


        <motion.div
          ref={ref} // Attach the ref to the element
          initial={{opacity: 0  }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Only animate when in view
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
        <div className="flex justify-center items-center w-full">

          <div className="w-full h-[300px] md:h-[400px] max-w-4xl aspect-w-16 aspect-h-80">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/UK1zH4L2DOQ?si=U01QUBkIwOQbquQ_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
    
          </div>
        </div>
        </motion.div>
      </div>
    


      <div className="flex justify-center items-center w-full m-auto">
         <motion.div
          ref={ref} // Attach the ref to the element
          initial={{opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} // Only animate when in view
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
        <button className="bg-primary dark:bg-gradient-to-r from-cyan-400 to-blue-800 md:py-4 py-2 md:px-10 px-5 md:text-xl font-bold flex justify-center items-center md:rounded-xl rounded-md border-primary border m-5 dark:hover:bg-gradient-to-tr hover:scale-110 transition-all cursor-pointer duration-300 text-white">
          Get a Free Consultation
        </button>
        </motion.div>     
      </div>
    </section>
  );
};

export default Video;
