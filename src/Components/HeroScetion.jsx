import React from "react";
import TravelImage from "../assets/images/Traveller 1@2x.png";
import PlaneImage from "../assets/images/plane.png";
import DecoreImage from "../assets/images/Decore.png";
import TagLineImage from "../assets/images/Tagline.png";
import HeadingImage from "../assets/images/Heading.png";
import DescImage from "../assets/images/Desc.png";
import CTAImage from "../assets/images/CTA.png";
import PlayDemoImage from "../assets/images/Play Demo.png";

function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row bg-gray-100 overflow-hidden">

      {/* ✅ Left side: Text */}
      <div className="md:w-1/2 px-6 sm:px-12 md:px-16 lg:px-24 mt-12 md:mt-24 text-center md:text-left z-10">
        <img src={TagLineImage} alt="Tagline" className="mb-4 sm:mb-6 md:mb-8" />
        <img src={HeadingImage} alt="Heading" className="mb-4 sm:mb-6 md:mb-8" />
        <img src={DescImage} alt="Description" className="mb-6 sm:mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
  {/* Primary CTA Button */}
  <button className="bg-yellow-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
    Find Out More
  </button>

  {/* Play Demo Button */}
  <button className="bg- hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white bg-red-600 rounded-2xl"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.273v7.454a1 1 0 001.234.97l6.518-1.88a1 1 0 00.75-.97v-2.57a1 1 0 00-.75-.97z" />
    </svg>
    Play Demo
  </button>
</div>


      </div>

      {/* ✅ Right side wrapper */}
      <div className="md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
        
        {/* ✅ Background Image FULLY from top */}
        <img
          src={DecoreImage}
          alt="Background decor"
          className="absolute top-0 right-0 w-full h-full object-cover object-top"
        />

        {/* ✅ Main hero image */}
        <img
          src={TravelImage}
          alt="Traveler"
          className="relative z-10 w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 h-auto rounded-lg shadow-xl"
        />

        {/* Optional planes */}
        <img
          src={PlaneImage}
          alt="Left plane"
          className="absolute right-[60%] top-[18%] w-16 h-16 sm:w-20 sm:h-20 hidden md:block"
        />
        <img
          src={PlaneImage}
          alt="Right plane"
          className="absolute left-[75%] top-[24%] w-16 h-16 sm:w-20 sm:h-20 hidden md:block"
        />
      </div>
    </section>
  );
}

export default HeroSection;
