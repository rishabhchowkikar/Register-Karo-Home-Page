import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import ChooseComponent_1 from "../components/ChooseComponent_1";

const Choose = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-green-500" />,
      title: "No Hidden Fee",
      description:
        "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
    {
      icon: <FaSmile className="w-12 h-12 text-blue-500" />,
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-red-500" />,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section className="w-full h-[80%]">
      <div className="flex m-10 sm:m-24 flex-col lg:flex-row gap-8 sm:gap-12">
        <div className="lg:w-1/3 text-center sm:text-left w-full space-y-4">
          <h2 className="font-medium text-lg sm:text-xl text-orange-500">
            WHY REGISTERKARO.IN
          </h2>
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Why Choose Register Karo
          </h3>
          <p className="text-gray-600 text-lg sm:text-xl">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="lg:w-2/3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} rounded-lg p-4 transition-transform hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-base sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChooseComponent_1 />
    </section>
  );
};

export default Choose;
