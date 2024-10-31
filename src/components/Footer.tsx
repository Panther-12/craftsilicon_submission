import React from 'react';
import { Facebook, Youtube, X, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-black text-yellow-400 py-8 px-12">
    {/* New Top Section: Email and Phone */}
    <div className="flex justify-between items-center text-gray-200 first-line:first-line:bg-opacity-90 mb-7">
      <span className="font-semibold">MURANGASEALS@GMAIL.COM</span>
      <span className="font-semibold">+254 790 770982</span>
    </div>

    {/* Middle Section: Subscribe */}
    <div className="bg-yellow-500 px-10 py-10 flex flex-col md:flex-row items-center justify-between rounded-lg mb-8">
      <h3 className="text-2xl font-semibold text-black mb-4 md:mb-0">
        Register Now So You Don’t Miss Our Games
      </h3>
      <div className="flex items-center bg-black rounded-lg p-3 w-3/4 ml-4">
        <input
          type="email"
          placeholder="Enter your Email"
          className="flex-grow bg-black text-yellow-400 outline-none border-2 border-yellow-400 rounded-lg px-4 py-2 placeholder-yellow-400"
        />
        <button className="bg-yellow-500 text-black font-semibold rounded-lg px-6 py-2 ml-2 hover:bg-yellow-600">
          Subscribe Now
        </button>
      </div>
    </div>

    {/* Links and Icons Section */}
    <div className="flex justify-between items-center border-b border-yellow-400 py-6 px-6 mb-8">
      {/* Links */}
      <div className="flex space-x-8 text-sm font-semibold">
        <a href="#" className="hover:text-yellow-500">Home</a>
        <a href="#" className="hover:text-yellow-500">About</a>
        <a href="#" className="hover:text-yellow-500">Events</a>
        <a href="#" className="hover:text-yellow-500">Blogs</a>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex space-x-6">
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
    <div className="flex justify-between items-center text-sm font-semibold text-yellow-400 px-6 py-4">
      <span>©Murang’a Seal. All rights reserved</span>
      <span className="text-xl font-bold">Murang’a Seal</span>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-yellow-500">Terms of Service</a>
        <a href="#" className="hover:text-yellow-500">Privacy policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
