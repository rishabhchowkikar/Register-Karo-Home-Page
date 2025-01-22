import React from "react";
import { LuCircleArrowRight } from "react-icons/lu";

const ServicesComponent_1 = ({ title, subtitle, img, key }) => {
  return (
    <div
      key={key}
      className="w-full flex flex-col items-center justify-center text-center space-y-4 p-4"
    >
      <span>
        <img draggable={false} src={img} alt={title} className="h-auto" />
      </span>
      <h1 className="text-lg font-medium">{title}</h1>
      <p className="text-base font-light">{subtitle}</p>
      <span>
        <button className="px-4 py-2 flex items-center justify-center gap-2 text-md font-bold text-black border-2 border-black rounded-lg">
          Learn More <LuCircleArrowRight />
        </button>
      </span>
    </div>
  );
};

export default ServicesComponent_1;
