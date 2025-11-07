import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* {shortcuts} */}
        <div>
          <h3 className="text-[#F59E0B] text-xl font-semibold mb-4">
            Shortcuts
          </h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Contact Us",
              "News",
              "FAQs",
              "Careers",
              "Privacy Policy",
            ].map((item) => (
              <li key={item} className="hover:text-[#F59E0B] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm leading-relaxed">
            The Master’s Real Estate is Islamabad’s leading real estate
            investment and marketing company in Pakistan. We provide reliable
            investment advice and investment opportunities with the best
            commercial and residential real estate projects.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              className="bg-[#F59E0B] p-2 rounded-md text-black hover:opacity-90"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#F59E0B] p-2 rounded-md text-black hover:opacity-90"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-[#F59E0B] p-2 rounded-md text-black hover:opacity-90"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-[#F59E0B] p-2 rounded-md text-black hover:opacity-90"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[#F59E0B] text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdEmail className="text-[#F59E0B]" />
              inf@themrl.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-[#F59E0B]" />
              0304-111-5-675
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-[#F59E0B]" />
              2nd floor 149-B Broadway, Commercial, DHA Phase 8, Lahore
            </li>
          </ul>
          <a
            href="https://wa.me/923041115675"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
          >
            <FaWhatsapp />
            Reach us on Whatsapp
            <span className="ml-1 bg-red-600 text-xs px-2 py-px rounded-full">
              1
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        Copyright © 2021 All Right Reserved The Master's Real Estate & Builders
      </div>
    </footer>
  );
};

export default Footer;
