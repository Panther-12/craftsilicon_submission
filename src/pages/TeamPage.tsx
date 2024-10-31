import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import playerImage from '../assets/images/player.png';

interface Player {
  id: number;
  name: string;
  position: string;
  image: string;
  category: 'Goalkeepers' | 'Defenders' | 'Midfielders' | 'Forwards' | 'Coaching Staff';
}

// Dummy Data
const playersData: Player[] = [
  { id: 1, name: 'Iñaki Peña', position: 'Goalkeeper', image: playerImage, category: 'Goalkeepers' },
  { id: 2, name: 'Marc-André ter Stegen', position: 'Goalkeeper', image: playerImage, category: 'Goalkeepers' },
  { id: 3, name: 'Ronald Araújo', position: 'Defender', image: playerImage, category: 'Defenders' },
  { id: 4, name: 'Gerard Piqué', position: 'Defender', image: playerImage, category: 'Defenders' },
  { id: 5, name: 'Sergio Busquets', position: 'Midfielder', image: playerImage, category: 'Midfielders' },
  { id: 6, name: 'Frenkie de Jong', position: 'Midfielder', image: playerImage, category: 'Midfielders' },
  { id: 7, name: 'Frenkie de Jong', position: 'Midfielder', image: playerImage, category: 'Midfielders' },
  { id: 8, name: 'Robert Lewandowski', position: 'Forward', image: playerImage, category: 'Forwards' },
  { id: 9, name: 'Robert Lewandowski', position: 'Forward', image: playerImage, category: 'Forwards' },
  { id: 10, name: 'Robert Lewandowski', position: 'Forward', image: playerImage, category: 'Forwards' },
  { id: 11, name: 'Ansu Fati', position: 'Forward', image: playerImage, category: 'Forwards' },
  { id: 12, name: 'Xavi Hernández', position: 'Head Coach', image: playerImage, category: 'Coaching Staff' },
  { id: 13, name: 'Jordi Cruyff', position: 'Assistant Coach', image: playerImage, category: 'Coaching Staff' },
];

const TeamPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ['ALL', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards', 'Coaching Staff'];

  // Filtering players based on selected category
  const filteredPlayers = selectedCategory === 'ALL' ? playersData : playersData.filter((player) => player.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-yellow-600">FC BARCELONA FIRST TEAM</h1>

      {/* Filter Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterClick(category)}
            className={`px-4 py-2 rounded-md font-semibold text-gray-700 ${
              selectedCategory === category ? 'bg-gray-300' : 'bg-gray-200'
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Player Sections */}
      {categories
        .filter((category) => category !== 'ALL')
        .map((category) => (
          <div key={category}>
            {/* Category Title */}
            <h2 className="text-xl font-semibold text-center mb-6">{category}</h2>

            {/* Player Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
              {filteredPlayers
                .filter((player) => player.category === category)
                .map((player) => (
                  <div key={player.id} className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                    <Link to={`/player/${player.id}`} className="block">
                      <img src={player.image} alt={player.name} className="w-full h-60 object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <h3 className="text-white text-lg font-bold">{player.name}</h3>
                        <p className="text-yellow-400 text-sm">{player.position}</p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default TeamPage;
