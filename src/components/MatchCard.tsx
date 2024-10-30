import React from 'react';
import {
  ClockIcon,
  LocateIcon,
} from 'lucide-react';


interface MatchCardProps {
  team1: string;
  team2: string;
  time: string;
  location: string;
  isUpcoming: boolean;
}

const MatchCard: React.FC<MatchCardProps>=({ team1, team2, time, location, isUpcoming }) => {
  return (
    <div className={`bg-black text-yellow-500 p-4 rounded-lg ${isUpcoming ? 'border-yellow-500 border-2' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{team1}</div>
        <div className="text-xl font-bold">{team2}</div>
      </div>
      <div className="flex items-center mt-2">
        <ClockIcon className="mr-2" />
        <span>{time}</span>
      </div>
      <div className="flex items-center mt-2">
        <LocateIcon className="mr-2" />
        <span>{location}</span>
      </div>
      {isUpcoming && (
        <div className="mt-4">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">Tickets</button>
        </div>
      )}
    </div>
  );
}

export default MatchCard;