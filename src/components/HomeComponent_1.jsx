import React from "react";

const HomeComponent_1 = ({ children, title, subtitle }) => {
  return (
    <span className="flex gap-5">
      <div className="flex flex-col items-center justify-center gap-1">
        {children}
      </div>
      <span className="flex flex-col">
        <h1 className="text-2xl  font-bold bg-gradient-to-r from-orange-500 to-blue-900 text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="text-xs">{subtitle}</p>
      </span>
    </span>
  );
};

export default HomeComponent_1;
