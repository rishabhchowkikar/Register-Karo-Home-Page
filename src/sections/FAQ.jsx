import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import FAQComponent from "../components/FAQComponent";
import TestimonialSlider from "../components/TestimonialSlider";
const FAQ = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  return (
    <>
      <section className="w-full bg-blue-900">
        <div className="p-16">
          <div className="flex items-center justify-between   ">
            <h1 className="text-3xl font-extrabold text-white">
              What People Say About Us
            </h1>
            <div className="flex items-center justify-evenly gap-5">
              <span
                onClick={prevSlide}
                className="p-3 rounded-full  bg-orange-500 text-white cursor-pointer"
              >
                <MdKeyboardDoubleArrowLeft size={25} />
              </span>
              <span
                onClick={nextSlide}
                className="p-3 rounded-full  bg-orange-500 text-white cursor-pointer"
              >
                <MdKeyboardDoubleArrowRight size={25} />
              </span>
            </div>
          </div>
          <div className="py-10">
            <TestimonialSlider
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
        </div>
      </section>
      <section className="">
        <FAQComponent />
      </section>
    </>
  );
};

export default FAQ;
