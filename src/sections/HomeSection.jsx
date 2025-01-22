import React from "react";
import Vector from "../assets/Vector.png";
import Vector_1 from "../assets/Vector_1.png";
import Vector_2 from "../assets/Vector_2.png";
import Vector_3 from "../assets/Vector_3.png";
import ClientImg from "../assets/SVG_1.png";
import FinanceStabilityImg from "../assets/SVG.png";
import Group_img from "../assets/Group_3.png";
import TargetImg from "../assets/target.png";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

import HomeComponent_1 from "../components/HomeComponent_1";
import TrustedClient from "./TrustedClient";

const VectorArray = [Vector, Vector_1, Vector_2, Vector_3];

const HomeSection = () => {
  return (
    <section className="h-full mt-[72px] md:mt-[110px]" id="home">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-orange-200 to-blue-200 px-5">
        <div className="m-15 md:m-20">
          <span>
            <h3 className="flex items-center gap-2 font-medium text-sm md:text-base">
              <FaStar className="text-orange-500" />
              <p>Google Rating</p>
              <span className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <span key={index} className="bg-orange-300 p-0.5 rounded-sm">
                    <FaStar className="text-white" />
                  </span>
                ))}
              </span>
            </h3>
            <h1 className="my-5 font-bold md:my-5 text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
              Your Trusted Partner for Compliance Business needs
            </h1>
            <p className="text-lg font-medium md:text-xl text-center md:text-left">
              An online business compliance platform that helps entrepreneurs
              and other individuals with various,{" "}
              <b>registrations, tax filings</b>, and other <b>legal matters</b>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex items-center justify-start gap-5 w-full my-7">
              <HomeComponent_1 title="4.5+" subtitle="Customer Rating">
                {[0, 2].map((startIndex) => (
                  <div key={startIndex} className="flex gap-1">
                    {VectorArray.slice(startIndex, startIndex + 2).map(
                      (imgSrc, index) => (
                        <img
                          draggable={false}
                          key={index}
                          src={imgSrc}
                          alt={`Vector ${index}`}
                        />
                      )
                    )}
                  </div>
                ))}
              </HomeComponent_1>

              <HomeComponent_1 title="20,000+" subtitle="Clients">
                <img draggable={false} src={ClientImg} alt="Clients" />
              </HomeComponent_1>

              <HomeComponent_1 title="99.8%" subtitle="Financial Stability">
                <img
                  draggable={false}
                  src={FinanceStabilityImg}
                  alt="Finance Stability"
                />
              </HomeComponent_1>
            </div>

            <span className="flex flex-col mb-9 sm:flex-row items-center gap-3 sm:gap-5 w-full justify-center sm:justify-start">
              <button className="bg-blue-900 px-4 py-2 w-full sm:w-auto rounded-sm text-xl font-bold text-white">
                Talk An Expert
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto">
                <div className="bg-orange-500 p-2 rounded-full">
                  <FaPlay />
                </div>
                <p className="text-lg font-medium">See how it works</p>
              </button>
            </span>
          </span>
        </div>

        <div className="hidden lg:flex items-center relative p-5">
          <img
            draggable={false}
            src={Group_img}
            alt="GroupImg"
            className="w-[80%] md:w-[60%] lg:w-[100%]"
          />
          <img
            draggable={false}
            src={TargetImg}
            alt="targetImg"
            className="absolute right-2 md:right-5 bottom-2 md:bottom-5 w-[40%] md:w-[30%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
