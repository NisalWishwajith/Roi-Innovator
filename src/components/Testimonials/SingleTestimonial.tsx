import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, bg } = testimonial;
  const textcolor = testimonial.bg.replace(/\[|\]/g, "");

  return (
    <div className="mt-10 w-full ">
      <div
        className="wow fadeInUp mx-8 h-[400px] rounded-xl border border-iceblue bg-black/70 p-4 shadow-[0_0_15px_5px_rgba(56,182,255,0.1)] transition-all duration-500 ease-in-out hover:-translate-y-4 md:mx-0 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
<div className="relative mb-5 m-auto w-[100%] max-w-[220px] aspect-square">
  <Image src={image} alt={name} fill className="object-cover" />
</div>


        <div className="flex items-center border-t-2 border-iceblue">
          <div className="mt-6 w-full">
            <h5
              className={`mb-1 text-center text-lg font-semibold text-iceblue lg:text-base xl:text-xl`}
            >
              {name}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
