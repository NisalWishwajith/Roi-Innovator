"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  WebDesign,
  SocialMediaManagement,
  PaidAdvertising,
  MobileAppDevelopment,
  Copywriting,
  Contentcreation,
} from "@/src/components/Roadmap";
import {
  PricingpaidAdvertistment,
  PricingSocialMediamanagement,
  PricingWebDesign,
} from "../Pricing";


const tabConfig = [
  {
    id: "webdesign",
    label: "Web Design",
    introduction: `At ROIInnovators, we craft custom websites that blend stunning design with flawless functionality. Our web design services
     ensure your site reflects your brand’s identity, while our development team builds responsive, SEO-optimized websites that deliver a 
     seamless user experience across all devices. Whether it’s a sleek landing page or a full e-commerce platform, we bring your vision to 
     life and drive real business results. Let us transform your online presence today!`,
    component: <WebDesign />,
    pricing: <PricingWebDesign />,
  },
  {
    id: "socialmediamanagement",
    label: "Social Media Management",
    introduction: `At ROIInnovators, we manage your social media so you can focus on growing your business. We create engaging content, build brand awareness, 
    and foster meaningful connections with your audience across platforms like Facebook, Instagram, TikTok and LinkedIn. Our data-driven strategies ensure consistent
    growth and measurable results. Let us handle your social media presence, and watch your business thrive!`,
    component: <SocialMediaManagement />,
    pricing: <PricingSocialMediamanagement />,
  },
  {
    id: "paidadvertising",
    label: "Paid Advertising",
    introduction: `At ROIInnovators, our paid advertising services are designed to drive targeted traffic and boost conversions.
     We create tailored ad campaigns across platforms like Google, Facebook, TikTok and Instagram, optimizing every dollar to ensure 
     maximum ROI. From strategy to execution, we help you reach the right audience and achieve measurable results that grow your business. 
     Let’s turn clicks into customers!`,
    component: <PaidAdvertising />,
    pricing: <PricingpaidAdvertistment />,
  },
  {
    id: "mobileappdevelopment",
    label: "Mobile App Development",
    introduction: `At ROIInnovators, we create custom mobile apps that elevate your business. From concept to launch, we develop intuitive, 
    high-performance apps for iOS and Android, designed to engage users and streamline your operations. Whether it’s an app to boost customer
     interaction or simplify internal processes, we deliver innovative solutions tailored to your goals. Let’s turn your app idea into reality!`,
    component: <MobileAppDevelopment />,
  },
  {
    id: "copywriting",
    label: "Copy Writing",
    introduction: `At ROIInnovators, our copywriting services focus on crafting compelling text that grabs attention and drives action. Copywriting 
    is the art of creating persuasive content for websites, ads, and social media that speaks directly to your audience and encourages them to engage 
    with your business. Whether you need catchy headlines or engaging product descriptions, we’ll help tell your story and boost conversions with words that work!`,
    component: <Copywriting />,
  },
  {
    id: "contentcreation",
    label: "Content Creation",
    introduction: `At ROIInnovators, we create captivating content that speaks to your audience and elevates your brand. From eye-catching visuals to 
    engaging videos, we craft content tailored to your business goals. To get you started, we’re offering one free video—no strings attached! Let’s showcase 
    what we can do and help your business stand out online.`,
    component: <Contentcreation />,
  },
];

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(tabConfig[0].id);

  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref3, { once: true });

  return (
    <section id="service" className="relative">
      {/* Header Section */}
      <div className="text-center">
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://data.moonscdn.com/prompt/slices/2/watermarked/blue-road-black-background_JAKLl.png')",
          }}
        >
          <div className="bg-slate-950/80">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -40 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
              }
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-10 text-3xl font-bold leading-tight text-white md:text-[45px] xl:px-72"
            >
              Here&apos;s What You&apos;re Gonna Get in Each Service
            </motion.h1>
            <div className="container z-10 mx-auto px-10 py-5">
              <motion.p
                ref={ref1}
                initial={{ opacity: 0, y: -40 }}
                animate={
                  isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="pb-2 text-xl text-body-color md:text-2xl"
              >
                Select a Service
              </motion.p>

              {/* Tabs */}
              <motion.ul
                ref={ref2}
                initial={{ opacity: 0, y: -40 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
                }
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mb-4 flex flex-wrap justify-center text-center text-xs md:text-base"
                role="tablist"
              >
                {tabConfig.map(({ id, label }) => (
                  <li
                    key={id}
                    className="w-full md:w-1/2 p-1 lg:w-auto"
                    role="presentation"
                  >
                    <button
                      className={`w-full text-[17px] leading-tight rounded-lg border-2 p-2 lg:h-20 lg:w-48 ${
                        activeTab === id
                          ? "border-iceblue text-iceblue shadow-[0_0_15px_5px_rgba(56,182,255,0.3)]"
                          : "border-white text-white hover:border-iceblue hover:text-iceblue"
                      }`}
                      onClick={() => setActiveTab(id)}
                      type="button"
                      role="tab"
                      aria-controls={id}
                      aria-selected={activeTab === id}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </motion.ul>
              {/* Tab Content */}
              <div>
                {tabConfig.map(
                  ({ id, label, introduction, component }) =>
                    activeTab === id && (
                      <motion.div
                        key={id}
                        ref={ref3}
                        initial={{ opacity: 0, y: -40 }}
                        animate={
                          isInView3
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -100 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        role="tabpanel"
                        aria-labelledby={`${id}-tab`}
                      >
                        <h1 className="mt-7 text-orange-500 pb-8 pt-3 text-center text-4xl font-bold md:text-6xl">
                          {" "}
                          {label}
                        </h1>
                        <div className="pb-5">
                          <h1 className="rounded-md p-2 text-center font-semibold md:text-2xl">
                            Your brand, reimagined online
                          </h1>
                          <p className="text-sm md:text-md pt-2 text-center md:font-semibold text-gray-300">
                            Beautifully designed, seamlessly functional, and
                            built to make an impact. At ROIInnovators, we craft
                            websites that inspire, engage, and deliver real
                            results.
                          </p>
                          <hr className="md:w-1/2 mx-auto my-5 md:mt-10 border-1 border-gray-300" />
                          <div className="md:flex">
                            <div> 
                              <div className="text-2xl md:text-3xl font-semibold px-6 md:m-3"> Summery </div> 
                            </div>
                            <div>
                              <p className="text-xs md:text-md lg:text-lg md:pt-3 m-2 text-justify text-gray-300">
                                {introduction}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="m-auto pb-5">
                          <h1 className="my-2 m-auto flex justify-center w-fit text-center w-1/2 rounded-md border border-iceblue bg-black/90 py-2 px-6 text-center font-semibold shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] md:text-2xl">
                          How We Work
                          </h1>
                          {component}
                        </div>
                        <div className="flex justify-center">
                          <Link href={`/${id}form`}>
                            <button className="rounded-xl border border-primary bg-gradient-to-r from-cyan-400 to-blue-800 px-5 py-2 font-bold text-white shadow-[0_0_15px_5px_rgba(56,182,255,0.3)] transition-all duration-300 hover:scale-110 md:px-10 md:py-4 md:text-xl">
                              Get Started
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    )
                )}
              </div>
            </div>
            <div>
              {tabConfig.map(
                ({ id, pricing }) =>
                  activeTab === id && (
                    <motion.div
                      key={id}
                      ref={ref4}
                      initial={{ opacity: 0, y: -40 }}
                      animate={
                        isInView4
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -100 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      role="tabpanel"
                      aria-labelledby={`${id}-tab`}
                    >
                      {pricing}
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
