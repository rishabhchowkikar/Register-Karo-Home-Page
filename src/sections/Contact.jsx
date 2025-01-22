import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ClientExample from "../components/ClientExample";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  return (
    <>
      <section
        className="w-full min-h-[400px] bg-gradient-to-br from-orange-500  to-blue-900"
        id="contact"
      >
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-2">
              <p className="text-white text-sm md:text-base uppercase tracking-wider">
                1% OF THE INDUSTRY
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Welcome to your new digital reality. Now.
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition-colors duration-200"
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              {[
                "Instant results",
                "User-friendly interface",
                "Personalized customization",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center text-white gap-2"
                >
                  <IoMdCheckmarkCircleOutline className="w-5 h-5 text-white" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="h-full">
        <ClientExample />
      </section>
    </>
  );
};

export default Contact;
