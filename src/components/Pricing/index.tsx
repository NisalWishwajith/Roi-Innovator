"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { MdOutlineControlPoint } from "react-icons/md";
import Particle from "@/src/components/Common/Particle";

export const PricingWebDesign = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
      {/* <div id="tsparticles2" className="top z-96 absolute inset-0">
        <Particle id="particles-pricing" zIndex={-40} />
      </div> */}
      <div className="container px-10">
        <h1 className="p-4 text-center text-2xl font-bold text-white">
          {" "}
          Packages for the Service{" "}
        </h1>
        <div className="w-full">
          <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly ? "pointer-events-none text-primary" : "text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Plans
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-blue-900 shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly ? "text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Add-Ons
            </span>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div
          className={` ${
            isMonthly
              ? "grid grid-cols-1 gap-x-0 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
              : "flex w-full items-center justify-center px-0 md:px-40 lg:px-56 xl:px-80"
          }`}
        >
          {isMonthly ? (
            // Render Plans Section Cards
            <>
              <PricingBox packageName="Standard Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Essentials for a stunning online presence.{" "}
                  </p>
                </div>
                <OfferList
                  text="Custom 3-page website (Home, About, Contact)"
                  status="active"
                />
                <OfferList text="Mobile-responsive design" status="active" />
                <OfferList text="Clean, modern templates" status="active" />
                <OfferList text="Basic SEO optimization" status="active" />
                <OfferList
                  text="Social media links & contact form"
                  status="active"
                />
                <OfferList text="Google Analytics setup" status="active" />

                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Content{" "}
                  </p>
                </div>
                <OfferList
                  text="Client-provided text and up to 5 optimized images"
                  status="active"
                />
                <OfferList text="Basic copywriting support" status="active" />

                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Delivery & Support{" "}
                  </p>
                </div>
                <OfferList text="2-3 weeks delivery" status="active" />
                <OfferList text="1 Revision Round" status="active" />
                <OfferList text="1-Month Email Support" status="active" />
              </PricingBox>

              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Elevate your brand with tailored solutions.{" "}
                  </p>
                </div>
                <OfferList
                  text="Fully custom 5-page website: Home, About, Services, Blog, Contact"
                  status="active"
                />
                <OfferList
                  text="Mobile-responsive & uniquely designed to match your brand"
                  status="active"
                />
                <OfferList
                  text="Advanced SEO for higher search visibility"
                  status="active"
                />
                <OfferList
                  text="Social media and email marketing integration"
                  status="active"
                />
                <OfferList
                  text="Blog, e-commerce, or booking system setup"
                  status="active"
                />
                <OfferList
                  text="Analytics with detailed reports"
                  status="active"
                />

                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Content{" "}
                  </p>
                </div>
                <OfferList
                  text="Professional copywriting for 5 pages"
                  status="active"
                />
                <OfferList
                  text="Up to 15 optimized images (client or stock)"
                  status="active"
                />
                <OfferList
                  text="Content tailored to your feedback"
                  status="active"
                />

                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Delivery & Support{" "}
                  </p>
                </div>
                <OfferList text="4-6 weeks delivery" status="active" />
                <OfferList text="3 revision rounds" status="active" />
              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Elevate your website with precision-crafted enhancements.{" "}
                </p>
              </div>
              <OfferList text="Extra Pages" status="active" />
              <OfferList text="Logo Design" status="active" />
              <OfferList text="SEO Pro" status="active" />
              <OfferList text="E-commerce Plus" status="active" />
              <OfferList text="Multilingual Support" status="active" />
              <OfferList text="Maintenance Suite" status="active" />
              <OfferList text="Custom Animations" status="active" />
              <OfferList text="Priority Support" status="active" />
              <OfferList text="Speed Boost" status="active" />
              <OfferList text="Hosting Essentials" status="active" />
            </PricingBox>
          )}
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export const PricingSocialMediamanagement = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative py-10">
      <div className="container px-10">
        <h1 className="p-4 py-10 text-center text-3xl font-bold text-white md:text-[45px]">
          {" "}
          Pricing Plans{" "}
        </h1>
        <div className="w-full">
          <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly ? "pointer-events-none text-primary" : "text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Plans
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly ? "text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Add-Ons
            </span>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div
          className={`grid ${
            isMonthly
              ? "grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
              : "flex items-center justify-center"
          }`}
        >
          {isMonthly ? (
            // Render Plans Section Cards
            <>
              <PricingBox packageName="Basic Package">
                <OfferList text="All UI Components" status="active" />
                <OfferList text="Use with Unlimited Projects" status="active" />
                <OfferList text="Commercial Use" status="active" />
                <OfferList text="Email Support" status="active" />
                <OfferList text="Lifetime Access" status="inactive" />
                <OfferList text="Free Lifetime Updates" status="inactive" />
              </PricingBox>
              <PricingBox packageName="Premium Package">
                <OfferList text="All UI Components" status="active" />
                <OfferList text="Use with Unlimited Projects" status="active" />
                <OfferList text="Commercial Use" status="active" />
                <OfferList text="Email Support" status="active" />
                <OfferList text="Lifetime Access" status="active" />
                <OfferList text="Free Lifetime Updates" status="active" />
              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Free Lifetime Updates" status="active" />
            </PricingBox>
          )}
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export const PricingpaidAdvertistment = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative py-10">
      <div className="container px-10">
        <h1 className="p-4 py-10 text-center text-3xl font-bold text-white md:text-[45px]">
          {" "}
          Pricing Plans{" "}
        </h1>
        <div className="w-full">
          <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly ? "pointer-events-none text-primary" : "text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Plans
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly ? "text-white" : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Add-Ons
            </span>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div
          className={`grid ${
            isMonthly
              ? "grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2"
              : "flex items-center justify-center"
          }`}
        >
          {isMonthly ? (
            // Render Plans Section Cards
            <>
              <PricingBox packageName="Basic Package">
                <OfferList text="All UI Components" status="active" />
                <OfferList text="Use with Unlimited Projects" status="active" />
                <OfferList text="Commercial Use" status="active" />
                <OfferList text="Email Support" status="active" />
                <OfferList text="Lifetime Access" status="inactive" />
                <OfferList text="Free Lifetime Updates" status="inactive" />
              </PricingBox>
              <PricingBox packageName="Premium Package">
                <OfferList text="All UI Components" status="active" />
                <OfferList text="Use with Unlimited Projects" status="active" />
                <OfferList text="Commercial Use" status="active" />
                <OfferList text="Email Support" status="active" />
                <OfferList text="Lifetime Access" status="active" />
                <OfferList text="Free Lifetime Updates" status="active" />
              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <OfferList text="All UI Components" status="active" />
              <OfferList text="Use with Unlimited Projects" status="active" />
              <OfferList text="Commercial Use" status="active" />
              <OfferList text="Email Support" status="active" />
              <OfferList text="Lifetime Access" status="active" />
              <OfferList text="Free Lifetime Updates" status="active" />
            </PricingBox>
          )}
        </div>
      </div>

      {/* Background SVG */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
