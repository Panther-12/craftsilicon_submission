import React from 'react';
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
  } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-yellow-500 py-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Muranga  
Seal</div>
        <div className="flex gap-4">
          <FacebookIcon size={24} />
          <InstagramIcon size={24} />
          <TwitterIcon size={24} />
          {/* <WhatsappIcon size={24} /> */}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Register Now So You Don't Miss Our Games</h2>
        <div className="flex gap-4 mt-4">
          <input type="email" className="w-full border border-yellow-500 px-4 py-2 rounded" placeholder="Enter your Email" />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">Subscribe Now</button>
        </div>
      </div>
      <nav className="mt-8 flex justify-between">
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  );
}

export default Footer;