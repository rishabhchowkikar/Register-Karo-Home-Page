import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import MobileImgs from "../assets/mobile.png";
import ImportantNumberComponent from "../components/ImportantNumberComponent";
const MobileAppSection = () => {
  return (
    <>
      <section className="relative w-full bg-blue-900">
        <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
                Manage Your Services by Your Mobile Phone
              </h1>

              <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                Download our app to manage and track your services. Our app
                enables you to stay in touch with our experts and aids you in
                tracking your progress.
              </p>

              <div className="space-y-4">
                <p className="text-lg md:text-xl font-medium">Get the App</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center px-5 py-2 bg-white hover:bg-gray-100 rounded-lg transition-colors">
                    <FaApple className="text-xl md:text-2xl text-gray-800" />
                    <div className="flex flex-col items-start ml-2 text-gray-800">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-medium">App Store</span>
                    </div>
                  </button>

                  <button className="flex items-center justify-center px-5 py-2 bg-white hover:bg-gray-100 rounded-lg transition-colors">
                    <FaGooglePlay className="text-xl md:text-2xl text-gray-800" />
                    <div className="flex flex-col items-start ml-2 text-gray-800">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-medium">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-end items-center">
              <div className="w-[80%] absolute bottom-[100] right-0 transform translate-x-14">
                <img
                  draggable={false}
                  src={MobileImgs}
                  alt="Mobile app screenshots"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        <ImportantNumberComponent />
      </section>
    </>
  );
};

export default MobileAppSection;
