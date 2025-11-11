import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="font-poppin bg-gray-300 text-gray-600 py-10 mt-10 w-full">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo & About Section */}
        <div>
  <h2 className="text-4xl font-bold text-black mb-4">JADOO</h2>
  <p className="text-sm leading-relaxed">
  Explore amazing destinations with JADOO, your trusted travel companion.
  </p>
</div>



        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

                {/* Quick Links */}
                <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help / FAQ</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Affiliates</a></li>
          </ul>
        </div>

                {/* Quick Links */}
                <div>
          <h3 className="text-lg font-semibold text-black mb-4">More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Airline Fess</a></li>
            <li><a href="#" className="hover:text-white">Airline</a></li>
            <li><a href="#" className="hover:text-white">Low Fare Tips</a></li>
          </ul>
        </div>

         {/* Social Icons */}

         <div className="p-6 flex flex-col items-center gap-6 max-w-4xl mx-auto">

      

      <div className="flex flex-row items-center gap-4">
        <FaFacebookF className="text-blue-600 w-6 h-6 hover:scale-110 transition" />
        <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition" />
        <FaTwitter className="text-blue-400 w-6 h-6 hover:scale-110 transition" />
      </div>

      {/* App Download Text */}
      <p className="text-sm sm:text-base text-gray-700 text-center sm:text-left">
        Discover Our App
      </p>

      {/* App Store Icons */}
      <div className="flex flex-row items-center gap-4">
        <FaGooglePlay className="w-6 h-6 hover:scale-110 transition" />
        <FaApple className="w-6 h-6 hover:scale-110 transition" />
      </div>
      </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} JADOO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
