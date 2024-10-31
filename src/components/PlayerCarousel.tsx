/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import player from '../assets/images/player.png';

const playerData = [
  { id: 1, image: player },
  { id: 2, image: player },
  { id: 3, image: player },
];

const PlayersCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNext = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % playerData.length);
    };
  
    const handlePrev = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + playerData.length) % playerData.length);
    };
  
    return (
      <div className="bg-gradient-to-r from-yellow-600 via-indigo-900 to-purple-600 py-12 mt-10">
        <div className="max-w-5xl mx-auto">
          {/* Title and Arrows */}
          <div className="flex items-center justify-between mb-8 px-4">
            <h2 className="text-center text-white text-2xl font-semibold">Players</h2>
            
            {/* Arrows on Right Side */}
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="bg-purple-800 text-white rounded-full p-2 hover:bg-yellow-500 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="bg-purple-800 text-white rounded-full p-2 hover:bg-yellow-500 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
  
          {/* Carousel Wrapper */}
          <div className="relative flex items-center">
            {/* Carousel Container */}
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                }}
              >
                {playerData.map((player) => (
                  <div
                    key={player.id}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
                  >
                    <div
                      className="bg-cover bg-center rounded-lg overflow-hidden shadow-md h-80"
                      style={{ backgroundImage: `url(${player.image})` }}
                    >
                      <img src={player.image} alt="Player" className="opacity-0" /> {/* For accessibility */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Indicator Bars */}
          <div className="flex justify-center space-x-2 mt-4">
            {playerData.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded ${
                  currentSlide === index ? 'bg-yellow-500 w-16' : 'bg-gray-400 w-8'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PlayersCarousel;