"use client";
import { useEffect, useState } from "react";
import { FaAngleUp, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ScrollToService() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the "service" section
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    if (serviceSection) {
      serviceSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Check visibility of "pagination" section
    const paginationSection = document.getElementById("service");
    if (!paginationSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(paginationSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[99]">
        {isVisible && (
          <div
            onClick={scrollToService}
            aria-label="scroll to service"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-iceblue bg-black text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 hover:shadow-lg"
          >
            <span className="leading-1 text-center text-lg">
              {" "}
              <FaAngleUp />{" "}
            </span>
          </div>
        )}
      </div>

      <div className="fixed right-8 top-8 z-[99]">
        <Link href="https://wa.me/35796182415">
          <button className="flex items-center justify-center gap-2 rounded-2xl border border-orange-500 bg-dark p-2 shadow-[0_0_15px_5px_rgba(255,87,51,0.3)] transition duration-100 hover:scale-105">
            <p className="md:text-md text-xs text-orange-500 font-semibold"> Contact Us on </p>
            <FaWhatsapp className="text-orange-500" />
          </button>
        </Link>
      </div>
    </>
  );
}
