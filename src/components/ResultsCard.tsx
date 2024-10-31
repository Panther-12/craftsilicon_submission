import React from 'react';

interface ResultsCardProps {
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  homeScore: number;
  awayScore: number;
  league: string;
  matchday: string;
  date: string;
}

const ResultsCard: React.FC<ResultsCardProps> = ({
  homeTeam,
  homeLogo,
  awayTeam,
  awayLogo,
  homeScore,
  awayScore,
  league,
  matchday,
  date,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg border border-gray-200 mt-10 max-w-md mx-auto">
      {/* League and Date Info */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-600">{league}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      
      {/* Match Info */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-800 hover:via-yellow-600 hover:to-gray-800 hover:text-white transition duration-200 ease-in-out">
        {/* Home Team */}
        <div className="flex items-center space-x-2">
          <img src={homeLogo} alt={`${homeTeam} logo`} className="w-8 h-8" />
          <span className="font-bold">{homeTeam}</span>
        </div>

        {/* Score */}
        <div className="text-xl font-bold mx-4">
          <span>{homeScore}</span>
          <span className="mx-2">-</span>
          <span>{awayScore}</span>
        </div>

        {/* Away Team */}
        <div className="flex items-center space-x-2">
          <span className="font-bold">{awayTeam}</span>
          <img src={awayLogo} alt={`${awayTeam} logo`} className="w-8 h-8" />
        </div>
      </div>
      
      {/* Matchday Information */}
      <div className="text-center text-gray-500 text-xs mt-2">
        <span>{matchday}</span>
      </div>
    </div>
  );
};

export default ResultsCard;
