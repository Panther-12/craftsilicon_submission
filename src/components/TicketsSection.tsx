import React from 'react';
import men from '../assets/images/men-news.png';
import women from '../assets/images/women-news.png';

const TicketsSection: React.FC = () => (
  <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-5xl mx-auto mt-10">
    <h2 className="text-2xl font-semibold text-center mb-6">
      <span className="text-yellow-600">Murang’a Seal Tickets</span>
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Ticket Cards */}
      <div className="relative group">
        <img src={men} alt="Men's Football" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-75 px-2 py-1 rounded">
          MEN'S FOOTBALL
        </div>
      </div>
      
      <div className="relative group">
        <img src={men} alt="Men's Football" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-75 px-2 py-1 rounded">
          MEN'S FOOTBALL
        </div>
      </div>
      
      <div className="relative group">
        <img src={women} alt="Women's Football" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-75 px-2 py-1 rounded">
          WOMEN'S FOOTBALL
        </div>
      </div>

      {/* Duplicate Cards for Full Layout */}
      <div className="relative group">
        <img src={men} alt="Men's Football" className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-4 left-4 text-white font-semibold bg-black bg-opacity-75 px-2 py-1 rounded">
          MEN'S FOOTBALL
        </div>
      </div>
    </div>
  </div>
);

export default TicketsSection;
