import React, { useState } from 'react';
import barcelonaLogo from '../assets/images/barcelon.png';
import realmadridLogo from '../assets/images/realmadrid.png';
import atleticoLogo from '../assets/images/mancity.png';
import StandingsTable from '../components/StandingsTable';
import ResultsCard from '../components/ResultsCard';

interface Fixture {
  date: string;
  time: string;
  league: string;
  matchday: string;
  homeTeam: string;
  awayTeam: string;
}

// Define the structure for the ResultsCard data
interface ResultsData {
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
  
  // Dummy results data
  const resultsData: ResultsData[] = [
    {
      homeTeam: 'FC Barcelona',
      homeLogo: barcelonaLogo,
      awayTeam: 'Real Madrid',
      awayLogo: realmadridLogo,
      homeScore: 2,
      awayScore: 1,
      league: 'La Liga',
      matchday: 'Matchday 4',
      date: '31 August 2024',
    },
    {
      homeTeam: 'Atletico Madrid',
      homeLogo: atleticoLogo,
      awayTeam: 'Sevilla FC',
      awayLogo: barcelonaLogo,
      homeScore: 3,
      awayScore: 3,
      league: 'La Liga',
      matchday: 'Matchday 5',
      date: '1 September 2024',
    },
  ];

const sampleFixtures: Fixture[] = [
  { date: 'SAT 31 AUG', time: '17:00', league: 'LALIGA', matchday: 'Matchday 4', homeTeam: 'FC Barcelona', awayTeam: 'Real Valladolid' },
  { date: 'SUN 1 SEP', time: '19:00', league: 'LALIGA', matchday: 'Matchday 5', homeTeam: 'Real Madrid', awayTeam: 'Atletico Madrid' },
  { date: 'WED 4 SEP', time: '21:00', league: 'CHAMPIONS LEAGUE', matchday: 'Group Stage', homeTeam: 'Manchester City', awayTeam: 'Paris Saint-Germain' },
  { date: 'SAT 7 SEP', time: '18:30', league: 'PREMIER LEAGUE', matchday: 'Matchday 6', homeTeam: 'Liverpool', awayTeam: 'Chelsea' },
  { date: 'TUE 10 SEP', time: '20:00', league: 'SERIE A', matchday: 'Matchday 3', homeTeam: 'Juventus', awayTeam: 'Inter Milan' },
  { date: 'FRI 13 SEP', time: '22:00', league: 'BUNDESLIGA', matchday: 'Matchday 5', homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund' },
];

const FixturesPage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>('AUG');
  const [activeTab, setActiveTab] = useState<'Schedule' | 'Standings' | 'Results'>('Schedule'); // Tab state
  const [filters, setFilters] = useState({
    gender: 'MEN',
    competition: 'ALL',
    location: 'ALL',
  });

  const months = ['AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const filteredFixtures = sampleFixtures.filter((fixture) => {
    const fixtureMonth = fixture.date.split(' ')[2];
    const isMonthMatch = selectedMonth ? fixtureMonth === selectedMonth : true;
    const isCompetitionMatch = filters.competition === 'ALL' || fixture.league === filters.competition;
    const isGenderMatch = filters.gender === 'MEN';
    const isLocationMatch = filters.location === 'ALL';

    return isMonthMatch && isCompetitionMatch && isGenderMatch && isLocationMatch;
  });

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="flex justify-center bg-black text-white">
        <button
          className={`px-6 py-3 font-semibold ${activeTab === 'Schedule' ? 'border-b-2 border-yellow-400' : ''}`}
          onClick={() => setActiveTab('Schedule')}
        >
          Schedule
        </button>
        <button
          className={`px-6 py-3 font-semibold ${activeTab === 'Standings' ? 'border-b-2 border-yellow-400' : ''}`}
          onClick={() => setActiveTab('Standings')}
        >
          Standings
        </button>
        <button
          className={`px-6 py-3 font-semibold ${activeTab === 'Standings' ? 'border-b-2 border-yellow-400' : ''}`}
          onClick={() => setActiveTab('Results')}
        >
          Results
        </button>
      </div>

      {activeTab === 'Schedule' ? (
        <div className="p-6 lg:px-10 lg:py-8">
          {/* Month Selector */}
          <div className="grid grid-cols-5 gap-4 pb-4 mb-4">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-md border border-gray-200 w-full text-center ${
                  selectedMonth === month ? 'bg-gray-300' : ''
                }`}
              >
                <span className="text-gray-500 text-xs">{index < 5 ? 2024 : 2025}</span>
                <span className="block text-gray-700 text-sm">{month}</span>
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <select
                value={filters.gender}
                onChange={(e) => handleFilterChange('gender', e.target.value)}
                className="px-4 py-3 w-full bg-gray-200 text-gray-700 rounded-md focus:outline-none"
              >
                <option value="MEN">MEN</option>
                <option value="WOMEN">WOMEN</option>
              </select>
            </div>
            <div className="relative">
              <select
                value={filters.competition}
                onChange={(e) => handleFilterChange('competition', e.target.value)}
                className="px-4 py-3 w-full bg-gray-200 text-gray-700 rounded-md focus:outline-none"
              >
                <option value="ALL">ALL</option>
                <option value="LALIGA">LALIGA</option>
                <option value="CHAMPIONS LEAGUE">CHAMPIONS LEAGUE</option>
                <option value="PREMIER LEAGUE">PREMIER LEAGUE</option>
                <option value="SERIE A">SERIE A</option>
                <option value="BUNDESLIGA">BUNDESLIGA</option>
              </select>
            </div>
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="px-4 py-3 w-full bg-gray-200 text-gray-700 rounded-md focus:outline-none"
              >
                <option value="ALL">ALL</option>
                <option value="HOME">HOME</option>
                <option value="AWAY">AWAY</option>
              </select>
            </div>
          </div>

          {/* Fixture List */}
          <div className="bg-white p-6 lg:px-10 lg:py-8">
            <h3 className="text-gray-600 text-sm uppercase mb-4">
              {selectedMonth ? `${selectedMonth} 2024` : 'Fixtures'}
            </h3>
            <table className="w-full border-collapse">
              <tbody>
                {filteredFixtures.length > 0 ? (
                  filteredFixtures.map((fixture, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="p-4 text-left">
                        <div>
                          <p className="text-gray-500 text-xs">{fixture.date}</p>
                          <p className="text-yellow-600 font-semibold">{fixture.time}</p>
                        </div>
                      </td>
                      <td className="p-4 text-left">
                        <div className="flex items-center space-x-2">
                          <p className="text-red-500 font-semibold">{fixture.league}</p>
                          <span className="text-gray-400">|</span>
                          <p className="text-gray-400 text-xs">{fixture.matchday}</p>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <p className="text-gray-800 font-semibold">{fixture.homeTeam}</p>
                          <img src={barcelonaLogo} alt={`${fixture.homeTeam} logo`} className="w-8 h-8 rounded-full shadow-sm" />
                          <span className="text-gray-400">vs.</span>
                          <img src={realmadridLogo} alt={`${fixture.awayTeam} logo`} className="w-8 h-8 rounded-full shadow-sm" />
                          <p className="text-gray-800 font-semibold">{fixture.awayTeam}</p>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="px-4 py-2 bg-yellow-400 text-white rounded-md font-semibold">TICKETS</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">
                      No fixtures found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : activeTab === 'Results' ?  
      (resultsData.map((result, index) => (
        <ResultsCard
          key={index}
          homeTeam={result.homeTeam}
          homeLogo={result.homeLogo}
          awayTeam={result.awayTeam}
          awayLogo={result.awayLogo}
          homeScore={result.homeScore}
          awayScore={result.awayScore}
          league={result.league}
          matchday={result.matchday}
          date={result.date}
        />
      ))):(
        // Standings Table Placeholder
        <StandingsTable />
      )}
    </div>
  );
};

export default FixturesPage;
