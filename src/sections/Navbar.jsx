import React, { useState } from "react";
import { IoMdMail, IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaPinterest,
} from "react-icons/fa6";
import logo from "../assets/Logo.webp";

const LogoArray = [FaInstagram, FaFacebook, FaXTwitter, FaPinterest];

const LinksArray = [
  { name: "Home", href: "#home" },
  { name: "Our Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "#contact" },
  { name: "About Us", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="hidden md:flex items-center justify-end gap-5 text-white bg-blue-900 px-8 md:px-16 lg:px-24 py-2 md:py-3 text-sm">
        <span className="flex items-center gap-1">
          <IoMdMail className="size-4" />
          <p>www.registerkaro.in</p>
        </span>
        <p>|</p>
        <span className="flex items-center gap-1">
          <FaPhoneAlt className="size-3" />
          <p>+91844774613</p>
        </span>
        <p>|</p>
        <span className="flex items-center gap-2">
          {LogoArray.map((Logo, i) => (
            <Logo key={i} className="size-5 cursor-pointer" />
          ))}
        </span>
      </div>

      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center">
          <img
            draggable={false}
            src={logo}
            alt="RegisterKaro_Img"
            className="h-10 md:h-12"
          />
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
            Register<span className="text-orange-400">Karo</span>
          </p>
        </div>

        <div className="hidden md:flex items-center gap-5 text-lg">
          {LinksArray.map(({ href, name }, i) => (
            <a
              key={i}
              href={href}
              className="cursor-pointer hover:text-orange-500"
            >
              <p>{name}</p>
            </a>
          ))}
          <IoMdSearch className="size-6 cursor-pointer" />
          <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
            Talk An Expert
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="size-8 text-blue-900" />
            ) : (
              <IoMdMenu className="size-8 text-blue-900" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl text-blue-900"
          >
            <IoMdClose />
          </button>

          <div className="flex flex-col space-y-3 text-blue-900 text-sm">
            <span className="flex items-center gap-2">
              <IoMdMail className="size-5" />
              <p>www.registerkaro.in</p>
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="size-4" />
              <p>+91844774613</p>
            </span>
            <div className="flex gap-4 mt-3">
              {LogoArray.map((Logo, i) => (
                <Logo key={i} className="size-6 cursor-pointer" />
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4 text-lg">
            {LinksArray.map(({ href, name }, i) => (
              <a
                key={i}
                href={href}
                className="cursor-pointer hover:text-orange-500"
              >
                <p>{name}</p>
              </a>
            ))}
            <button className="bg-orange-500 px-4 py-2 rounded-md text-white">
              Talk An Expert
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
