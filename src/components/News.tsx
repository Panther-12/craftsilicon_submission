/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import { Play, Square } from 'lucide-react';
import { CardData } from '../interfaces/cardData';


interface CardProps extends Omit<CardData, 'id'> {}

const News: React.FC<CardProps> = ({  title, time, isVideo, tag }) => (
  <div className="relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
    <div className="relative h-52">
      <img 
        src={`/api/placeholder/${400}/${300}`} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm">
        {isVideo ? (
          <div className="flex items-center space-x-2">
            <Play size={16} className="text-yellow-400" />
            <span>{time}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-1">
              <Square size={14} className="text-black" />
            </div>
            <span className="text-yellow-400">{tag}</span>
            <span className="mx-2">•</span>
            <span>{time}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default News;