/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import { Play, Square } from 'lucide-react';
import { CardData } from '../interfaces/cardData';

interface CardProps extends Omit<CardData, 'id'> {}

const News: React.FC<CardProps> = ({ title, time, image, isVideo, tag }) => (
  <div className="relative flex flex-col bg-black rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
    {/* Image Section */}
    <div className="relative h-40">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Video Icon Overlay for Videos */}
      {isVideo && (
        <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-opacity-75 bg-black p-1 rounded">
          <Play size={16} className="text-yellow-400" />
          <span className="text-xs text-white">{time}</span>
        </div>
      )}
    </div>
    
    {/* Content Section */}
    <div className="p-3 bg-gray-900">
      <h3 className="text-base font-semibold text-white mb-2 justify-center text-center">{title}</h3>
      <div className="flex items-center justify-between text-xs text-gray-400">
        {!isVideo && (
          <div className="flex items-center space-x-1 mt-8 justify-center text-center">
            <Square size={14} className="text-yellow-400 bg-yellow-400" />
            <span className="text-yellow-400 font-semibold">{tag}</span>
            <span className="mx-1 text-gray-500">•</span>
            <span className="text-gray-400">{time}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default News;
