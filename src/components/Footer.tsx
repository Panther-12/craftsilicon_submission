import React from 'react';
import { Facebook, Youtube, X, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-black text-yellow-400 py-8 px-6 lg:px-12">
    {/* Top Section: Email and Phone */}
    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-200 mb-7 text-center sm:text-left">
      <span className="font-semibold mb-2 sm:mb-0">MURANGASEALS@GMAIL.COM</span>
      <span className="font-semibold">+254 790 770982</span>
    </div>

    {/* Middle Section: Subscribe */}
    <div className="bg-yellow-500 px-6 sm:px-10 py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between rounded-lg mb-8">
      <h3 className="text-lg sm:text-2xl font-semibold text-black mb-4 sm:mb-0 text-center sm:text-left">
        Register Now So You Don’t Miss Our Games
      </h3>
      <div className="flex flex-col sm:flex-row items-center bg-black rounded-lg p-3 w-full sm:w-3/4 lg:w-2/3 mt-4 sm:mt-0">
        <input
          type="email"
          placeholder="Enter your Email"
          className="flex-grow bg-black text-yellow-400 outline-none border-2 border-yellow-400 rounded-lg px-4 py-2 mb-3 sm:mb-0 sm:mr-2 placeholder-yellow-400"
        />
        <button className="bg-yellow-500 text-black font-semibold rounded-lg px-4 sm:px-6 py-2 hover:bg-yellow-600 w-full sm:w-auto">
          Subscribe Now
        </button>
      </div>
    </div>

    {/* Links and Icons Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center border-b border-yellow-400 py-6 px-4 sm:px-6 mb-8 space-y-4 lg:space-y-0">
      {/* Links */}
      <div className="flex space-x-8 text-sm font-semibold justify-center lg:justify-start">
        <a href="#" className="hover:text-yellow-500">Home</a>
        <a href="#" className="hover:text-yellow-500">About</a>
        <a href="#" className="hover:text-yellow-500">Events</a>
        <a href="#" className="hover:text-yellow-500">Blogs</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 justify-center lg:justify-end">
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <Youtube size={24} />
        </a>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <X size={24} />
        </a>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <MessageSquare size={24} />
        </a>
      </div>
    </div>

    {/* Bottom Section: Trademark, Name, and Terms */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-yellow-400 px-4 sm:px-6 py-4 space-y-4 md:space-y-0">
      <span className="text-center md:text-left">©Murang’a Seal. All rights reserved</span>
      <span className="text-xl font-bold text-center">Murang’a Seal</span>
      <div className="flex space-x-4 justify-center md:justify-end">
        <a href="#" className="hover:text-yellow-500">Terms of Service</a>
        <a href="#" className="hover:text-yellow-500">Privacy policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
