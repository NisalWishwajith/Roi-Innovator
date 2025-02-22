'use client';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";

const RoadMapItem = ({ id, stage, week, goal, activities, isEven }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <div
          className={`roadmap-item transition duration-500 hover:-translate-y-3  ${isEven ? 'roadmap-item--even' : 'roadmap-item--odd'
            }`}
        >
          <div className="roadmap-item__marker text-iceblue font-bold lg:text-lg text-sm lg:pt-0 pt-[2px]"> {id} </div>
          <div className="roadmap-item__content bg-black/70 hover:shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]">
            <div className={`bg-iceblue w-fit transition transform px-2 ${isEven ? 'absolute left-0 md:ml-0 ml-[25px] -translate-y-4 rounded-tl-md' : 'absolute md:right-0 md:rounded-tr-md -translate-x-4 md:-translate-x-0 -translate-y-4 rounded-tl-md'}`}>
              <h3 className="text-dark"> {week} </h3>
            </div>
            <h3 className="roadmap-item__stage mt-2"> {stage} </h3>
            <dl className="text-left align-top">
              <dd className="font-extralight text-sm md:text-md text-justify text-white my-2 flex items-start gap-2">
                <MdOutlineDone className="flex-shrink-0 text-lg" />
                <span>{goal}</span>
              </dd>
              <dd className="font-extralight text-sm md:text-md text-white my-2 flex items-start gap-2">
                <MdOutlineDone className="flex-shrink-0 text-lg" />
                <span>{activities}</span>
              </dd>
            </dl>

          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RoadMapItem;
