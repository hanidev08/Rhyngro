import Image from "next/image";
import React from "react";
import imgOne from "@/public/assets/images/Desert2.jpeg";

export const Hero = () => {
  return (
    <section className="">
      <div className="container mt-72 flex justify-centers">
        {/* <div
          className="md:hidden flex relative text-sm 
        max-w-[230px] mb-5 text-gray-400 uppercase"
        >
          IS AN ARCHITECTURAL practice CREATING PLACES TO LIVE IN, TO GET TO, TO
          BE PART OF
        </div> */}
        <div className=" relative w-[100vw] max-w-[1400px] aspect-[6/5]">
          <Image src={imgOne} alt="imgOne" fill className=" object-cover" />
        </div>
      </div>
    </section>
  );
};
