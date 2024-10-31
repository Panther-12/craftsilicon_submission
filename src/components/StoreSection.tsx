import React from 'react';
import { ArrowRight } from 'lucide-react';
import store1 from '../assets/images/store/store1.png';
import store2 from '../assets/images/store/store2.png';
import store3 from '../assets/images/store/store3.png';
import store4 from '../assets/images/store/store4.png';
import store11 from '../assets/images/store/store11.png';
import store22 from '../assets/images/store/store22.png';
import store33 from '../assets/images/store/store33.png';
import store44 from '../assets/images/store/store44.png';

const StoreSection: React.FC = () => (
  <div className="bg-white text-yellow-400 py-10 px-4 mt-10">
    {/* Section Title */}
    <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
      <h2 className="text-3xl font-semibold">
        Murang’a <span className="text-yellow-600">seal</span> Store
      </h2>
      <button className="bg-black text-white font-semibold px-4 py-2 rounded-md border border-white hover:bg-yellow-600 hover:text-black">
        OFFICIAL STORE MURANG’A SEAL
      </button>
    </div>

    {/* Store Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {/* Card Template */}
      {[{
          title: 'NEW KIT',
          description: 'We already have it here! Get the new 2024-25 kit and be the first to wear it.',
          headerImage: store1,
          bodyImage: store11,
        },
        {
          title: 'TRAINING',
          description: 'Get the new training collection and dress like your favorite players.',
          headerImage: store2,
          bodyImage: store22,
        },
        {
          title: 'BARÇITY',
          description: 'Discover Barçity collection, inspired by the college style.',
          headerImage: store3,
          bodyImage: store33,
        },
        {
          title: 'MEMORABILIA',
          description: 'Take a piece of history home. The most exclusive products.',
          headerImage: store4,
          bodyImage: store44,
          isHighlighted: true,
        }].map((card, index) => (
        <div
          key={index}
          className={`bg-white ${card.isHighlighted ? 'border-2 border-blue-400' : ''} rounded-lg shadow-lg transition-all hover:shadow-xl flex flex-col`}
        >
          {/* Header Image */}
          <img src={card.headerImage} alt={`${card.title} Header`} className="w-full h-32 object-cover rounded-t-lg" />

          {/* Body Content */}
          <div className="flex flex-col justify-between p-6 flex-grow">
            <div className="flex items-center mb-4">
              <img src={card.bodyImage} alt={card.title} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-lg font-bold text-black">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{card.description}</p>
              </div>
            </div>
            <hr className="w-full border-gray-300 my-2" />
            <button className="flex items-center space-x-2 text-black font-semibold mt-2">
              <span>SHOP NOW</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StoreSection;
