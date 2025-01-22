import React from "react";
import { LuCircleArrowRight } from "react-icons/lu";
import groutImg from "../assets/aboutImg.png";

const About = () => {
  return (
    <section className="w-full" id="about">
      <div className="flex flex-col sm:flex-row items-center justify-center m-10 sm:m-24 space-y-10 sm:space-y-0">
        <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-10 w-full sm:w-1/2">
          <h3 className="font-medium text-lg sm:text-xl text-orange-500">
            WELCOME TO REGISTERKARO.IN
          </h3>
          <h1 className="font-bold text-blue-900 text-3xl sm:text-4xl md:text-5xl">
            About <span className="text-orange-500">RegisterKaro</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-center sm:text-left">
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team that has consistently delivered on projects,
            thereby exceeding everyone’s expectations.
            <br />
            <br />I would strongly recommend their services to any organization
            that is looking for solid, reliable, and predictable outcomes.
          </p>
          <button className="px-6 py-3 flex items-center justify-center gap-2 text-lg sm:text-xl font-bold text-white bg-blue-900 rounded-lg">
            Learn More <LuCircleArrowRight />
          </button>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0 object-contain">
          <img
            draggable={false}
            src={groutImg}
            alt="Group Image"
            className="w-full sm:w-auto max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
