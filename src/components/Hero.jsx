import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="carousel absolute left-0 -mt-20 w-screen max-h-96 sm:max-h-[40rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={hero1} className="w-full object-cover object-center" />
          <div className="absolute flex justify-between z-20 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute grid place-items-center w-full h-full bg-gradient-to-t from-[#191919ee] z-10 to-transparent p-20">
            <h2
              className="
            text-md font-bold text-neutral-content text-center sm:text-5xl tracking-wide
          "
            >
              Exceptional Elegance, Unparalleled Luxury
            </h2>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={hero2} className="w-full object-cover object-center" />
          <div className="absolute flex justify-between transform  z-20 -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ">
              ❯
            </a>
          </div>
          <div className="absolute grid place-items-center w-full h-full bg-gradient-to-t from-[#191919ee] z-10 to-transparent p-20">
            <h2
              className="
            text-md font-bold text-neutral-content text-center sm:text-5xl tracking-wide
          "
            >
              Your Sanctuary of Style and Sophistication
            </h2>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={hero3} className="w-full object-cover object-center" />
          <div className="absolute flex justify-between z-20 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute grid place-items-center w-full h-full bg-gradient-to-t from-[#191919ee] z-10 to-transparent p-20">
            <h2
              className="
            text-md font-bold text-neutral-content text-center sm:text-5xl tracking-wide
          "
            >
              Luxury Living, Tailored to You
            </h2>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={hero4} className="w-full object-cover object-center" />
          <div className="absolute flex justify-between z-20 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute grid place-items-center w-full h-full bg-gradient-to-t from-[#191919ee] z-10 to-transparent p-20">
            <h2
              className="
            text-md font-bold text-neutral-content text-center sm:text-5xl tracking-wide
          "
            >
              Elevate Your Lifestyle
            </h2>
          </div>
        </div>
      </div>
      <section className="mt-96 sm:mt-[40rem] text-primary text-center">
        <h1
          className="
        text-xl font-bold text-center sm:text-4xl tracking-wide 
        "
        >
          <span className="glow-gold text-base-content">Luxury </span>
          Living, <span className="glow-gold text-base-content">Tailored </span>
          to You
        </h1>
        <p className="text-justify mt-5 text-sm sm:text-lg text-secondary-content leading-6 tracking-wide">
          At Luxoria, excellence is not just a standard—it's a way of life. As
          purveyors of luxury living, we curate the finest products and provide
          unparalleled service to ensure that every aspect of your experience
          with us is nothing short of exceptional. From elegant furnishings to
          exquisite décor, we offer a meticulously curated collection that
          reflects our dedication to quality and sophistication. With a
          commitment to excellence at our core, Luxoria is where discerning
          individuals turn to elevate their lifestyle and indulge in the epitome
          of luxury.
        </p>
        <Link
          to="/products"
          className="btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content btn-lg mt-10 "
        >
          Shop Now
        </Link>
      </section>
    </>
  );
};

export default Hero;
