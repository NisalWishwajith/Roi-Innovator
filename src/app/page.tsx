
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Brands from "@/src/components/Brands";
import Contact from "@/src/components/Contact";
import Video from "@/src/components/Video";
import Testimonials from "@/src/components/Testimonials";
import Pagination from "@/src/components/Paginations";
import ScrollTop from "@/src/components/ScrollToTop";
import Services from "@/src/components/Services";

export default function Home() {

  return (
    <>
      <ScrollTop />
      <Hero />
      <Video />
      <About />
      <Services />
      <Brands />
      <Pagination />
      <Testimonials />
      <Contact />
    </>
  );
}
