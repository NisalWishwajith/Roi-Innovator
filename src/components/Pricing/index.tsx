"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { MdOutlineControlPoint } from "react-icons/md";





export const PricingWebDesign = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                <OfferList text="Custom 3-page website (Home, About, Contact)" status="active" />
                <OfferList text="Mobile-responsive design" status="active" />
                <OfferList text="Clean, modern templates" status="active" />
                <OfferList text="Basic SEO optimization" status="active" />
                <OfferList text="Social media links & contact form" status="active"/>
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
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                    The Essentials for a Consistent Presence.{" "}
                  </p>
                </div>
                <OfferList text="Platforms 1-2 (Instagram, Facebook, or TikTok)" status="active"/>
                <OfferList text="3 posts per week, crafted for engagement" status="active" />
                <OfferList text="Optimized posting times" status="active" />
                <OfferList text="Basic Audience interaction (comments & messages)" status="active" />
                <OfferList text="Monthly performance report" status="active"/>
                <OfferList text="Basic hashtag strategy for growth" status="active" />

                {/* <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Content{" "}
                  </p>
                </div>
                <OfferList text="Client-provided text and up to 5 optimized images" status="active"/>
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
                <OfferList text="1-Month Email Support" status="active" /> */}

              </PricingBox>

              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Elevate Your Social Media Game.{" "}
                  </p>
                </div>
                <OfferList text="Platforms Up to 4 (Instagram, Facebook, TikTok, LinkedIn)" status="active" />
                <OfferList text="Mobile-responsive & uniquely designed to match your brand" status="active" />
                <OfferList text="Advanced SEO for higher search visibility" status="active"/>
                <OfferList text="Social media and email marketing integration" status="active"/>
                <OfferList text="Blog, e-commerce, or booking system setup" status="active" />
                <OfferList text="Analytics with detailed reports" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="3 revision rounds" status="active" /> */}

              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Push boundaries. Expand possibilities.{" "}
                </p>
              </div>
              <OfferList text="Extra Platforms" status="active" />
              <OfferList text="Custom Content Creation" status="active" />
              <OfferList text="Paid Ad Management" status="active" />
              <OfferList text="Influencer Collaboration" status="active" />
              <OfferList text="Advanced Analytics" status="active" />
              <OfferList text="Reputation Management" status="active" />
              <OfferList text="24/7 Engagement" status="active" />
              <OfferList text="Trend Spotting" status="active" />
              <OfferList text="Monthly Strategy Sessions" status="active" />
              <OfferList text="Content Library" status="active" />
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


























export const PricingPaidAdvertistment = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                    Smart Ads. Better Results.{" "}
                  </p>
                </div>
                <OfferList text="Up to 3 platforms (e.g., Facebook, Instagram, Google Ads)" status="active" />
                <OfferList text="Up to $2,000/month (ad spend not included)" status="active" />
                <OfferList text="Awareness, engagement, traffic, and conversion-focused campaigns" status="active" />
                <OfferList text="8 custom ads per month (static, carousel, and short videos)" status="active" />
                <OfferList text="Advanced audience strategies, including lookalikes and retargeting" status="active" />
                <OfferList text="Daily monitoring, A/B testing, and real-time adjustments" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="1-Month Email Support" status="active" /> */}

              </PricingBox>

              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Data-Driven Ads. Extraordinary Growth.{" "}
                  </p>
                </div>
                <OfferList text="Unlimited platforms (e.g., Facebook, Instagram, Google Ads, LinkedIn)" status="active" />
                <OfferList text="Up to $10,000/month (ad spend not included)" status="active" />
                <OfferList text="Comprehensive strategies, including seasonal and event-based campaigns" status="active"/>
                <OfferList text="Unlimited custom ads with premium visuals and video content" status="active"/>
                <OfferList text="AI-driven audience segmentation and predictive retargeting" status="active"/>
                <OfferList text="24/7 performance tracking and dynamic budget allocation" status="active"/>
                <OfferList text="Custom analytics dashboard and bi-weekly strategy sessions" status="active"/>

{/* 
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
                <OfferList text="3 revision rounds" status="active" /> */}

              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <div className="mb-2 mt-5 flex">
                {/* <MdOutlineControlPoint className="text-md mr-1 w-5" /> */}
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  {/* Elevate your website with precision-crafted enhancements.{" "} */}
                </p>
              </div>
              <OfferList text="Extra Platforms" status="active" />
              <OfferList text="Custom Landing Pages" status="active" />
              <OfferList text="Video Ad Production" status="active" />
              <OfferList text="Dynamic Remarketing" status="active" />
              <OfferList text="Premium Audience Research" status="active" />
              <OfferList text="Event-Based Campaigns" status="active" />
              <OfferList text="Advanced Analytics Dashboard" status="active" />
              <OfferList text="Extended Budget Management" status="active" />
              <OfferList text="Dedicated Ad Specialist" status="active" />
              <OfferList text="Performance Audit" status="active" />
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














export const PricingContenCreating = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                    Perfect for a strong, consistent foundation.{" "}
                  </p>
                </div>
                <OfferList text="8 custom designs (posters, flyers, ads) per month" status="active" />
                <OfferList text="4 short videos edited for Instagram or TikTok" status="active" />
                <OfferList text="2 optimized blog posts (up to 500 words)" status="active" />
                <OfferList text="Content delivery within 7 business days" status="active" />
                <OfferList text="1 round of revisions per item" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="1-Month Email Support" status="active" /> */}


              </PricingBox>


              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Your vision, reimagined.{" "}
                  </p>
                </div>
                <OfferList text="15 custom designs (posters, flyers, ads) per month" status="active" />
                <OfferList text="8 short videos edited + 2 professional video shoots for Instagram or TikTok" status="active" />
                <OfferList text="4 SEO-optimized blog posts (up to 800 words)" status="active" />
                <OfferList text="Expedited content creation within 5 business days" status="active"/>
                <OfferList text="Unlimited revisions" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="3 revision rounds" status="active" /> */}

              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Video Editing{" "}
                </p>
              </div>
              <OfferList text="Up to 10 videos (up to 5 minutes each)" status="active" />
              <OfferList text="Hollywood-grade editing with cinematic effects" status="active" />
              <OfferList text="Advanced sound design and audio mastering" status="active" />
              <OfferList text="Dedicated editor for seamless collaboration" status="active" />
              <OfferList text="Priority delivery in 3 business days" status="active" />


              <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Videography{" "}
                </p>
              </div>
              <OfferList text="Half-day shoot (4 hours)" status="active" />
              <OfferList text="4K ultra-HD video quality" status="active" />
              <OfferList text="Advanced lighting and audio setup" status="active" />
              <OfferList text="Edited highlight reel (2–3 minutes)" status="active" />
              <OfferList text="Perfect for marketing campaigns and product launches" status="active" />


              {/* <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Photography{" "}
                </p>
              </div>
              <OfferList text="Full-day photoshoot (up to 8 hours)" status="active" />
              <OfferList text="50+ expertly retouched photos" status="active" />
              <OfferList text="Creative direction and styling" status="active" />
              <OfferList text="High-resolution and web-optimized formats" status="active" />
              <OfferList text="On-location or studio setup for product photography" status="active" />
              <OfferList text="Tailored for campaigns, and premium projects" status="active" />
              <OfferList text="Ideal for branding, product photography, and social media" status="active" /> */}

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












export const PricingMobileAppDevelopment = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                    Elevate your app with advanced features.{" "}
                  </p>
                </div>

                <OfferList text="iOS & Android" status="active" />
                <OfferList text="Complex, Feature-rich design" status="active" />
                <OfferList text="Custom functionality, API integrations" status="active" />
                <OfferList text="Advanced, tailored design for optimal user experience" status="active" />
                <OfferList text="Full backend development and integration" status="active" />
                <OfferList text="10–12 weeks" status="active" />
                <OfferList text="Up to 3 rounds" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="1-Month Email Support" status="active" /> */}

              </PricingBox>

              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Unleash your app's full potential.{" "}
                  </p>
                </div>
                <OfferList text="iOS & Android (plus cross-platform support)" status="active"/>
                <OfferList text="Fully custom, cutting-edge design" status="active"/>
                <OfferList text="Advanced functionality, AI, real-time data integration" status="active"/>
                <OfferList text="Premium, personalized design with animation" status="active"/>
                <OfferList text="Scalable, high-performance backend" status="active"/>
                <OfferList text="Comprehensive testing, including beta launch" status="active"/>
                <OfferList text="14–16 weeks" status="active"/>
                <OfferList text="Unlimited revisions during development" status="active"/>
              

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="3 revision rounds" status="active" /> */}

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















export const PricingCopyWriting = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative pb-20">
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
              ? "grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2  lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20"
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
                    Words that inspire. Stories that sell.{" "}
                  </p>
                </div>

                <OfferList text="Up to 3 pages" status="active" />
                <OfferList text="5 items (150–200 words each)" status="active" />
                <OfferList text="10 short posts" status="active" />
                <OfferList text="1 email (up to 300 words)" status="active" />
                <OfferList text="1 post (up to 500 words)" status="active" />
                <OfferList text="Primary keyword integration" status="active" />
                <OfferList text="5–7 business days" status="active" />
                <OfferList text="1 round included" status="active" />

                {/* <div className="mb-2 mt-5 flex">
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
                <OfferList text="1-Month Email Support" status="active" /> */}

              </PricingBox>

              <PricingBox packageName="Premium Package">
                <div className="mb-2 mt-5 flex">
                  <MdOutlineControlPoint className="text-md mr-1 w-5" />
                  <p className="text-md flex text-left font-semibold leading-none">
                    {" "}
                    Tailored content for extraordinary results.{" "}
                  </p>
                </div>
                <OfferList
                  text="Fully custom 5-page website: Home, About, Services, Blog, Contact"
                  status="active"
                />
                <OfferList text="Up to 6 pages" status="active" />
                <OfferList text="10 items (200–300 words each)" status="active" />
                <OfferList text="20 posts" status="active" />
                <OfferList text="2 emails (up to 500 words each)" status="active" />
                <OfferList text="2 posts (up to 1,000 words each)" status="active" />
                <OfferList text="3 variations (e.g., Facebook, Google)" status="active" />
                <OfferList text="Keyword research and optimization" status="active" />
                <OfferList text="3–5 business days" status="active" />
                <OfferList text="Up to 3 rounds" status="active" />
               
{/* 
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
                <OfferList text="3 revision rounds" status="active" /> */}

              </PricingBox>
            </>
          ) : (
            // Render Add-Ons Section Card centered
            <PricingBox packageName="Add-Ons">
              <div className="mb-2 mt-5 flex">
                <MdOutlineControlPoint className="text-md mr-1 w-5" />
                <p className="text-md flex text-left font-semibold leading-none">
                  {" "}
                  Amplify your impact with tailored enhancements.{" "}
                </p>
              </div>
              <OfferList text="Extra Pages" status="active" />
              <OfferList text="Additional Blog Posts" status="active" />
              <OfferList text="Social Media Campaigns" status="active" />
              <OfferList text="Email Sequences" status="active" />
              <OfferList text="Landing Pages" status="active" />
              <OfferList text="Custom SEO Package" status="active" />
              <OfferList text="Industry Research" status="active" />
              <OfferList text="Custom Tone Development" status="active" />
              <OfferList text="Performance Audit" status="active" />
              <OfferList text="Priority Turnaround" status="active" />
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






