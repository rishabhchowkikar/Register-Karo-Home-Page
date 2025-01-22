import React from "react";

const NumbersArray = [
  {
    id: 1,
    title: "1M",
    subtitle: "Customers",
  },

  {
    id: 2,
    title: "12",
    subtitle: "Year of Excellence",
  },
  {
    id: 3,
    title: "41",
    subtitle: "R&D Engineers",
  },
  {
    id: 4,
    title: "78",
    subtitle: "Countries",
  },
  {
    id: 5,
    title: "3278",
    subtitle: "Partners",
  },
  {
    id: 6,
    title: "41",
    subtitle: "Award Recieved",
  },
];

const ImportantNumberComponent = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl font-bold text-orange-500 mb-2">
            WHY REGISTER KARO
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Some Numbers are Important
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {NumbersArray.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="relative inline-block">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-orange-500 to-blue-900 text-transparent bg-clip-text ">
                  {title}
                </span>
                <span className="absolute -right-5 -top-4 text-3xl md:text-4xl font-bold text-orange-500">
                  +
                </span>
              </div>
              <span className="mt-2 text-sm text-gray-600 font-medium">
                {subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantNumberComponent;
