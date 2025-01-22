import React from "react";
import { FaFacebook, FaInstagram, FaGoogle, FaApple } from "react-icons/fa";
const Footer = () => {
  const footerLinks = {
    "START A BUSINESS": [
      "Features",
      "Solutions",
      "Integrations",
      "Enterprise",
      "Solutions",
    ],
    "GOVERNMENT REGISTRATION": [
      "Partners",
      "Community",
      "Developers",
      "App",
      "Blog",
    ],
    "COMPLIANCE & TAX": [
      "Channels",
      "Scale",
      "Watch the Demo",
      "Our Competition",
    ],
    "BIS & CDSCO": ["About Us", "News", "Leadership", "Media Kit"],
  };
  return (
    <footer className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-6">
            <p className="text-gray-300 max-w-xs">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaGoogle className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaApple className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-orange-400 font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-4 border-white flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
