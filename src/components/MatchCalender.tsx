import React from 'react';
import MatchCard from './MatchCard';
import { Calendar1Icon } from 'lucide-react';

const MatchCalendar: React.FC = () => {
  const upcomingMatches = [
    {
      team1: 'FC Barcelona',
      team2: 'Man City',
      time: '01:00',
      location: 'Camping World Stadium',
      isUpcoming: true,
    },
    {
      team1: 'FC Barcelona',
      team2: 'R. Madrid',
      time: '01:00',
      location: 'MetLife Stadium',
      isUpcoming: true,
    },
  ];

  return (
    <div className="bg-black text-yellow-500 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Murang'a First Team</div>
        <div className="text-sm">
          <Calendar1Icon className="mr-1" />
          Sync Schedules to Calendar
        </div>
      </div>
      <div className="flex mt-4">
        <div className="flex flex-col items-center">
          <div className="bg-yellow-500 text-black p-2 rounded-full">L</div>
          <div className="text-sm mt-2">H</div>
          <div className="bg-yellow-500 text-black p-2 rounded-full">L</div>
          <div className="bg-yellow-500 text-black p-2 rounded-full">M</div>
        </div>
        <div className="flex-1 ml-4">
          {upcomingMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchCalendar;