import React from "react";
import companyFormationImg from "../assets/companyFormation.svg";
import companySecretarialServiceImg from "../assets/secretarialService.svg";
import virtualOfficeImg from "../assets/virtualOffice.svg";
import annualCompilanceImg from "../assets/annualCompilance.svg";
import payrollImg from "../assets/payroll.svg";
import bookKeepingImg from "../assets/bookKeeping.svg";
import ServicesComponent_1 from "../components/ServicesComponent_1";

const ServicesArray = [
  {
    img: companyFormationImg,
    title: "Company Formation",
    subtitle: "Build web-based solutions that enhance customer experience.",
  },
  {
    img: companySecretarialServiceImg,
    title: "Company Secretarial Services",
    subtitle:
      "Make data-driven decisions and utilize technology to reach business goals.",
  },
  {
    img: virtualOfficeImg,
    title: "Virtual Office Address",
    subtitle:
      "Foster customer relationships by effectively serving your market.",
  },
  {
    img: annualCompilanceImg,
    title: "Annual Compilance Services",
    subtitle: "Turn your ideas into modern products with our design experts.",
  },
  {
    img: payrollImg,
    title: "Payroll Services",
    subtitle: "Expand your business across the globe with minimal effort.",
  },
  {
    img: bookKeepingImg,
    title: "Bookkeeping Services",
    subtitle:
      "Steering user behaviors with creative design, data insights & technology.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-slate-100" id="services">
      <div className="w-full max-w-screen-xl mx-auto py-10 px-5 flex flex-col  gap-10 items-center">
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="font-medium text-lg sm:text-xl text-orange-500">
            WELCOME TO REGISTERKARO.IN
          </h3>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Explore Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
          {ServicesArray.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center ${
                i % 3 !== 2 ? "sm:border-r sm:border-gray-300" : ""
              } pr-6`}
            >
              <ServicesComponent_1
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
              />
            </div>
          ))}
        </div>
        <div className=" w-full sm:w-[20%]">
          <button className="w-full bg-blue-900 p-5 rounded-md font-medium text-white">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
