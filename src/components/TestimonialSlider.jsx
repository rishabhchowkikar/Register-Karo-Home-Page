import React from "react";
import TestimonialImg from "../assets/TestimonialImg.png";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialSlider = ({ currentSlide, setCurrentSlide }) => {
  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: TestimonialImg,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: TestimonialImg,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: TestimonialImg,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-2 md:px-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <FaQuoteRight className="w-8 h-8 text-blue-600" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <img
                      draggable={false}
                      src={testimonial.image}
                      alt="image"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
