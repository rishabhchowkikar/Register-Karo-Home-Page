import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const BlogComponent_1 = ({ id, img, name, title, subtitle, tags }) => {
  return (
    <div
      key={id}
      className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        draggable={false}
        src={img}
        alt={title}
        className="w-full h-55  object-cover"
      />

      <div className="p-4">
        <div className="text-sm text-gray-500">{name} • 1 January 2023</div>

        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <FaArrowUpRightFromSquare className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>

        <p className="text-gray-600 mt-2 text-sm">{subtitle}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent_1;
