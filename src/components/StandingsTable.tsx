import React from 'react';
import barcelonaLogo from '../assets/images/barcelon.png';
import teamLogo from '../assets/images/realmadrid.png';
import team2Logo from '../assets/images/mancity.png';

interface Standing {
  position: number;
  team: string;
  points: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  formDirection: 'up' | 'down';
  nextMatch: string;
  teamLogo: string;
}

const sampleStandings: Standing[] = [
    { position: 1, team: 'Alavés', points: 15, matchesPlayed: 5, wins: 5, draws: 0, losses: 0, goalsFor: 12, goalsAgainst: 3, goalDifference: 9, formDirection: 'up', nextMatch: 'Real Madrid', teamLogo: team2Logo },
    { position: 2, team: 'Atletico Madrid', points: 12, matchesPlayed: 5, wins: 4, draws: 0, losses: 1, goalsFor: 10, goalsAgainst: 5, goalDifference: 5, formDirection: 'up', nextMatch: 'Sevilla', teamLogo: teamLogo },
    { position: 3, team: 'Sevilla', points: 10, matchesPlayed: 5, wins: 3, draws: 1, losses: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, formDirection: 'down', nextMatch: 'Barcelona', teamLogo: team2Logo },
    { position: 4, team: 'FC Barcelona', points: 9, matchesPlayed: 5, wins: 3, draws: 0, losses: 2, goalsFor: 11, goalsAgainst: 7, goalDifference: 4, formDirection: 'up', nextMatch: 'Valencia', teamLogo: barcelonaLogo },
    { position: 5, team: 'Real Madrid', points: 8, matchesPlayed: 5, wins: 2, draws: 2, losses: 1, goalsFor: 9, goalsAgainst: 6, goalDifference: 3, formDirection: 'down', nextMatch: 'Atletico Madrid', teamLogo: teamLogo },
    { position: 6, team: 'Valencia', points: 7, matchesPlayed: 5, wins: 2, draws: 1, losses: 2, goalsFor: 7, goalsAgainst: 8, goalDifference: -1, formDirection: 'up', nextMatch: 'Sevilla', teamLogo: teamLogo },
  ];

const StandingsTable: React.FC = () => {
  return (
    <div className="bg-white p-6 lg:px-10 lg:py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Standings</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b border-gray-300">
            <th className="py-2 px-3 font-semibold">Position</th>
            <th className="py-2 px-3 font-semibold">Team</th>
            <th className="py-2 px-3 font-semibold">Points</th>
            <th className="py-2 px-3 font-semibold">Matches played</th>
            <th className="py-2 px-3 font-semibold">Wins</th>
            <th className="py-2 px-3 font-semibold">Draws</th>
            <th className="py-2 px-3 font-semibold">Losses</th>
            <th className="py-2 px-3 font-semibold">Goals For</th>
            <th className="py-2 px-3 font-semibold">Goals Against</th>
            <th className="py-2 px-3 font-semibold">Goal Difference</th>
            <th className="py-2 px-3 font-semibold">Form</th>
            <th className="py-2 px-3 font-semibold">Next Match</th>
          </tr>
        </thead>
        <tbody>
          {sampleStandings.map((team, index) => (
            <tr key={index} className={`border-b border-gray-300 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-800 hover:via-yellow-600 hover:to-gray-800 hover:text-white hover:cursor-pointer" ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <td className="py-3 px-3 text-center font-medium">{team.position}</td>
              <td className="py-3 px-3 flex items-center space-x-3">
                <img src={team.teamLogo} alt={`${team.team} logo`} className="w-8 h-8 rounded-full" />
                <span>{team.team}</span>
              </td>
              <td className="py-3 px-3 text-center">{team.points}</td>
              <td className="py-3 px-3 text-center">{team.matchesPlayed}</td>
              <td className="py-3 px-3 text-center">{team.wins}</td>
              <td className="py-3 px-3 text-center">{team.draws}</td>
              <td className="py-3 px-3 text-center">{team.losses}</td>
              <td className="py-3 px-3 text-center">{team.goalsFor}</td>
              <td className="py-3 px-3 text-center">{team.goalsAgainst}</td>
              <td className="py-3 px-3 text-center">{team.goalDifference}</td>
              <td className="py-3 px-3 text-center">
                <span
                  className={`flex items-center space-x-1 ${
                    team.formDirection === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {team.formDirection === 'up' ? '▲' : '▼'}
                </span>
              </td>
              <td className="py-3 px-3 text-center text-yellow-600 font-semibold">{team.nextMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
