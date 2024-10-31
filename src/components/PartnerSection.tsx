import React from 'react';
import Ambilight from '../assets/images/partners/ambilight.png';
import Nike from '../assets/images/partners/nike.png';
import Spotify from '../assets/images/partners/spotify.png';

const partnerData = [
  { id: 1, image: Nike, alt: 'Nike', large: true },
  { id: 2, image: Spotify, alt: 'Spotify', large: true },
  { id: 3, image: Ambilight, alt: 'Ambilight TV', large: false },
];

const PartnersSection: React.FC = () => (
  <div className="bg-black py-12 mt-10">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
      {/* Title and Line */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div>
          <h2 className="text-sm font-semibold text-yellow-500 uppercase">Main Partners</h2>
          <div className="border-l-2 border-yellow-500 h-10 mt-1"></div> {/* Adjusted vertical line */}
        </div>
      </div>

      {/* Partner Logos */}
      <div className="flex items-center justify-center space-x-6 flex-grow">
        {partnerData.map((partner) => (
          <img
            key={partner.id}
            src={partner.image}
            alt={partner.alt}
            className={`object-contain ${
              partner.large ? 'h-24 w-auto' : 'h-5 w-auto'
            }`} // Increased size for the first two logos
          />
        ))}
      </div>

      {/* View All Partners Button */}
      <div className="flex-shrink-0">
        <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 transition">
          VIEW ALL PARTNERS
        </button>
      </div>
    </div>
  </div>
);

export default PartnersSection;
