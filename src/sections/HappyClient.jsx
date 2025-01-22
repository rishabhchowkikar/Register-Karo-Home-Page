import React from "react";
import {
  FaDropbox,
  FaPinterest,
  FaGitlab,
  FaMicrosoft,
  FaShopify,
  FaGithub,
  FaFigma,
  FaAtlassian,
  FaMailchimp,
} from "react-icons/fa";
import {
  SiSketch,
  SiFramer,
  SiAdobexd,
  SiSlack,
  SiTrello,
  SiMiro,
  SiHeroku,
  SiUdemy,
  SiDeliveroo,
  SiAsana,
  SiAirtable,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import ClientComponent_1 from "../components/ClientComponent_1";

const icons = [
  { Icon: FaDropbox, color: "text-blue-500" },
  { Icon: FaPinterest, color: "text-red-500" },
  { Icon: FaShopify, color: "text-green-500" },
  { Icon: SiSketch, color: "text-yellow-500" },
  { Icon: SiMiro, color: "text-orange-400" },
  { Icon: SiSlack, color: "text-purple-500" },
  { Icon: FaGitlab, color: "text-orange-500" },
  { Icon: SiTrello, color: "text-blue-400" },
  { Icon: SiFramer, color: "text-black" },
  { Icon: FaGithub, color: "text-gray-800" },
  { Icon: FaMicrosoft, color: "text-blue-500" },
  { Icon: SiAdobexd, color: "text-pink-500" },
  { Icon: FaFigma, color: "text-purple-600" },
  { Icon: TbBrandVscode, color: "text-blue-600" },
  { Icon: SiHeroku, color: "text-purple-700" },
  { Icon: FaAtlassian, color: "text-blue-500" },
  { Icon: SiUdemy, color: "text-black" },
  { Icon: SiDeliveroo, color: "text-green-500" },
  { Icon: FaMailchimp, color: "text-black" },
  { Icon: SiAsana, color: "text-pink-500" },
  { Icon: SiAirtable, color: "text-yellow-500" },
];
const HappyClient = () => {
  return (
    <section className="h-full">
      <div>
        <div className="m-10 sm:m-16">
          <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Our Happy Clients
            </h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Professionally cultivate one-to-one customer service with robust
              ideas. Dynamically innovate resource-leveling customer service for
              state of the art customer service.
            </p>
          </div>
        </div>

        <div className="max-w-full mx-auto px-4">
          <div className="relative">
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 justify-items-center shadow-lg rounded-lg ">
              {icons.map((IconObj, index) => (
                <div key={index} className="group relative p-5 cursor-pointer">
                  <div
                    className="w-16 h-16  flex items-center justify-center bg-white rounded-full shadow-lg 
                            transition-all duration-300 ease-in-out
                            hover:shadow-xl hover:-translate-y-1
                            group-hover:scale-110"
                  >
                    <IconObj.Icon className={`w-8 h-8 ${IconObj.color}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className=" my-6 text-center">
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 
                           hover:text-gray-900 transition-colors duration-200"
              >
                Show more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 via-white to-pink-50 opacity-50" />
          </div>
        </div>
      </div>
      <div className="bg-orange-400">
        <ClientComponent_1 />
      </div>
    </section>
  );
};

export default HappyClient;
