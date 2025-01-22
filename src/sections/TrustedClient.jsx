import React from "react";
import OracleImg from "../assets/oracle.svg";
import SamsungImg from "../assets/samsung.svg";
import MorpheusImg from "../assets/morpheus.svg";
import SegmentImg from "../assets/segment.svg";
import MondayImg from "../assets/monday.svg";

const TrustedBusiness = [
  OracleImg,
  MorpheusImg,
  SamsungImg,
  MondayImg,
  SegmentImg,
];

const TrustedClient = () => {
  return (
    <div className="h-full my-16 flex flex-col gap-7 items-center justify-center text-center">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-center justify-center gap-8">
        {TrustedBusiness.map((img, i) => (
          <img
            draggable={false}
            key={i}
            src={img}
            alt={`Img ${i}`}
            className="max-w-[1000px] sm:max-w-[140px] md:max-w-[170px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedClient;
