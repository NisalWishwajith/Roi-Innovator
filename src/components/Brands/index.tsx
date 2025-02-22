"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brandsData: Brand[] = [
  { id: 1, name: "Custom Tailored Design", image: "/images/brands/1.png" },
  { id: 2, name: "7-day Guarantee", image: "/images/brands/3.png" },
  { id: 3, name: "Always Up-to-date", image: "/images/brands/2.png" },
  { id: 4, name: "Secure Purchase", image: "/images/brands/4.png" },
];

const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="border-t-2 border-b-2 border-gray-400 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-6 py-4 place-items-center">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="grayscale hover:grayscale-0 flex flex-col 2xl:flex-row items-center justify-center py-2 w-full px-4">
      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
        <Image src={image} alt={name} fill priority sizes="(max-width: 768px) 48px, 64px" />
      </div>
      <p className="text-iceblue text-sm sm:text-base lg:text-lg mt-2 sm:mt-0 sm:ml-3 text-center sm:text-left">
        {name}
      </p>
    </div>
  );
};
