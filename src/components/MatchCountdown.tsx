import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import barcelona from '../assets/images/barcelon.png';
import realmadrid from '../assets/images/realmadrid.png';
import mancity from '../assets/images/mancity.png';

const MatchCountdown: React.FC = () => (
  <div className="bg-white text-black shadow-lg px-6 lg:px-10 py-10 lg:py-15 h-fit">
    {/* Header Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 border-b border-gray-200 space-y-4 lg:space-y-0">
      <h2 className="text-center lg:text-left text-xl lg:text-2xl font-semibold text-black">
        <span className="text-yellow-600">Murang’a First Team</span>
      </h2>
      <div className="text-center">
        <p className="text-xs uppercase font-semibold text-gray-500">Next Match</p>
        <div className="text-2xl lg:text-3xl font-bold text-yellow-600 flex space-x-1 lg:space-x-2 justify-center">
          <span>00</span><span>:</span>
          <span>11</span><span>:</span>
          <span>46</span><span>:</span>
          <span>21</span>
        </div>
        <div className="text-xs text-gray-500 uppercase flex justify-center space-x-4 lg:space-x-6 mt-1">
          <span>Days</span>
          <span>Hours</span>
          <span>Mins</span>
          <span>Secs</span>
        </div>
      </div>
      <button className="flex items-center text-blue-500 hover:text-blue-600 mt-2 lg:mt-0">
        <Calendar size={16} className="mr-1" />
        <span>Sync Schedules to Calendar</span>
      </button>
    </div>

    {/* Main Content */}
    <div className="flex flex-col lg:flex-row h-fit mt-4">
      {/* Left Section: View all Results */}
      <div className="w-full lg:w-1/3 bg-gradient-to-b from-yellow-500 to-yellow-400 flex items-center justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-4">
        <p className="text-white text-lg font-semibold text-center">View all Results</p>
      </div>

      {/* Matches Section */}
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none border-t lg:border-t-0 lg:border-l border-gray-200">
        {/* First Match Card */}
        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md w-full">
          <div className="flex justify-between w-full items-center text-xs text-gray-500 font-semibold mb-2">
            <span>31 WEDNESDAY JULY</span>
            <ArrowRight size={16} className="text-gray-500" />
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <img src={barcelona} alt="Barcelona Logo" className="w-10 h-10" />
            <span className="text-yellow-500 text-2xl font-bold">01:00</span>
            <img src={mancity} alt="Man City Logo" className="w-10 h-10" />
          </div>
          <p className="text-sm font-medium text-center">FC Barcelona v Man City</p>
          <button className="bg-yellow-500 text-white py-1 px-4 mt-2 rounded-md">Tickets</button>
        </div>

        {/* Second Match Card */}
        <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md w-full">
          <div className="flex justify-between w-full items-center text-xs text-gray-500 font-semibold mb-2">
            <span>04 SUNDAY AUGUST</span>
            <ArrowRight size={16} className="text-gray-500" />
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <img src={barcelona} alt="Barcelona Logo" className="w-8 h-8" />
            <span className="text-yellow-500 text-2xl font-bold">01:00</span>
            <img src={realmadrid} alt="Real Madrid Logo" className="w-10 h-10" />
          </div>
          <p className="text-sm font-medium text-center">FC Barcelona v R. Madrid</p>
          <button className="bg-yellow-500 text-white py-1 px-4 mt-2 rounded-md">Tickets</button>
        </div>
      </div>
    </div>
  </div>
);

export default MatchCountdown;
