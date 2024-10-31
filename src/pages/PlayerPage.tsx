// PlayerPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerProfile from './PlayerProfile';

interface Player {
  id: string;
  name: string;
  position: string;
  squadNumber: number;
  birthDetails: string;
  previousClubs: string;
}

const PlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  // Dummy data for demonstration purposes
  const players: Player[] = [
    {
      id: '1',
      name: 'Lamine Yamal',
      position: 'Forward',
      squadNumber: 19,
      birthDetails: 'March 24, 2001, Bondy, France',
      previousClubs: 'Saint-Etienne, Nice (loan)',
    },
    {
      id: '2',
      name: 'Inaki Pena',
      position: 'Goalkeeper',
      squadNumber: 13,
      birthDetails: 'March 2, 1999, Barcelona, Spain',
      previousClubs: 'Barcelona B',
    },
  ];

  useEffect(() => {
    if (id) {
      const foundPlayer = players.find((player) => player.id === id);
      setPlayer(foundPlayer || null);
    }
    setLoading(false);
  }, [id]); // This ensures that the effect runs whenever 'id' changes

  if (loading) {
    return <p>Loading...</p>; // Temporary loading message
  }

  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <PlayerProfile
      playerName={player.name}
      playerPosition={player.position}
      squadNumber={player.squadNumber}
      birthDetails={player.birthDetails}
      previousClubs={player.previousClubs}
    />
  );
};

export default PlayerPage;
