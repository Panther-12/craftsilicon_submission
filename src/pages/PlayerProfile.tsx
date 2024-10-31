import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profile from '../assets/images/player.png';

// Dummy data for seasons, competitions, and stats
const seasons = ['2023-2024', '2022-2023', '2021-2022'];
const competitions = ['Premier League', 'Champions League', 'FA Cup'];
const tabs = ['General', 'Defence', 'Distribution', 'Attack', 'Discipline', 'Minutes Played'];

interface PlayerProfileProps {
  playerName: string;
  playerPosition: string;
  squadNumber: number;
  birthDetails: string;
  previousClubs: string;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({
  playerName,
  playerPosition,
  squadNumber,
  birthDetails,
  previousClubs,
}) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const [selectedCompetition, setSelectedCompetition] = useState(competitions[0]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Dummy stats data
  const stats = {
    General: {
      clearances: 78,
      blocks: 17,
      interceptions: 29,
      tacklesRate: 63.4,
      duelsRate: 59.7,
      aerialDuelsRate: 59.5,
    },
  };

  const handleTabClick = (tab: string) => setActiveTab(tab);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Player Image and Navigation */}
      <div className="flex flex-col items-center space-y-4 relative">
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-yellow-400 hover:text-white">
            ←
          </button>
          <div className="relative">
            <img
              src={profile}
              alt={playerName}
              className="w-74 h-auto rounded-lg shadow-lg mx-auto"
            />
            <div className="absolute bottom-[-20px] left-0 right-0 mx-auto w-48 bg-black text-white py-2 px-4 rounded-md shadow-lg text-center transform -translate-y-2 -translate-x-[-95]">
              <p className="text-sm uppercase">{playerPosition}</p>
              <h2 className="text-lg font-semibold">{playerName}</h2>
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded font-bold hover:text-white hover:bg-yellow-400">
            →
          </button>
        </div>
      </div>

      {/* Player Info */}
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">{playerName}</h1>
        <h2 className="text-lg font-medium text-gray-500">{playerPosition}</h2>
      </div>

      {/* Player Profile Details */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Player Profile</h3>
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0">
          <p><strong>Squad Number:</strong> {squadNumber}</p>
          <p><strong>Born:</strong> {birthDetails}</p>
          <p><strong>Previous Clubs:</strong> {previousClubs}</p>
        </div>
      </div>

      {/* Season and Competition Dropdowns */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg focus:outline-none w-full sm:w-auto"
        >
          {seasons.map((season) => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
        <select
          value={selectedCompetition}
          onChange={(e) => setSelectedCompetition(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg focus:outline-none w-full sm:w-auto"
        >
          {competitions.map((competition) => (
            <option key={competition} value={competition}>{competition}</option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex justify-between items-center border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Content with Circular Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-6">
        {/* Basic Stats */}
        <div className="bg-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-bold">{stats.General.clearances}</h4>
          <p>Clearances</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-bold">{stats.General.blocks}</h4>
          <p>Blocks</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <h4 className="text-xl font-bold">{stats.General.interceptions}</h4>
          <p>Interceptions</p>
        </div>

        {/* Circular Progress Bars */}
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div style={{ width: '50%' }}> {/* Set width to 50% for smaller size */}
            <CircularProgressbar
              value={stats.General.tacklesRate}
              text={`${stats.General.tacklesRate}%`}
              styles={buildStyles({
                textColor: '#ffcd00',
                pathColor: '#ffcd00',
                trailColor: '#eee',
                textSize: '24px', // Larger text size for percentage
              })}
            />
          </div>
          <p className="mt-4 text-gray-700 text-sm">Tackles Success Rate</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div style={{ width: '50%' }}>
            <CircularProgressbar
              value={stats.General.duelsRate}
              text={`${stats.General.duelsRate}%`}
              styles={buildStyles({
                textColor: '#ffcd00',
                pathColor: '#ffcd00',
                trailColor: '#eee',
                textSize: '24px',
              })}
            />
          </div>
          <p className="mt-4 text-gray-700 text-sm">Duels Success Rate</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
          <div style={{ width: '50%' }}>
            <CircularProgressbar
              value={stats.General.aerialDuelsRate}
              text={`${stats.General.aerialDuelsRate}%`}
              styles={buildStyles({
                textColor: '#ffcd00',
                pathColor: '#ffcd00',
                trailColor: '#eee',
                textSize: '24px',
              })}
            />
          </div>
          <p className="mt-4 text-gray-700 text-sm">Aerial Duels Success Rate</p>
        </div>
      </div>

      {/* Player Description */}
      <div className="mt-6">
        <p className="text-gray-700 leading-relaxed">
          France international William continued to establish himself as one of the best center backs in England during his second season of first-team action. The elegant, pacey center back became the first Arsenal outfield player in the Premier League era, and the first since Lee Dixon in 1989/90, to play every minute of the league season...
        </p>
      </div>
    </div>
  );
};

export default PlayerProfile;
