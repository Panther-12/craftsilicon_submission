import React from 'react';
import { Clock } from 'lucide-react';
import image1 from "../assets/images/news/image1.jpg";

interface NewsItem {
  image: string;
  title: string;
  category: string;
  timestamp: string;
}

const dummyNewsData: NewsItem[] = [
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
  {
    image: image1,
    title: 'Spain men in basketball and football action',
    category: 'CLUB',
    timestamp: '3 hrs ago',
  },
];

const NewsSection: React.FC = () => (
  <div className="bg-white py-12 px-4 mt-10">
    {/* Section Title */}
    <div className="flex max-w-6xl mx-auto mb-8 items-center justify-center">
      <h2 className="text-3xl font-semibold text-center">
        Murang’a <span className="text-yellow-600">Seal</span> News
      </h2>
    </div>

    {/* News Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {dummyNewsData.map((newsItem, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex flex-col"
        >
          {/* Image */}
          <img src={newsItem.image} alt="News" className="w-full h-40 object-cover" />

          {/* Content */}
          <div className="p-4">
            <h3 className="text-base font-semibold text-black mb-2">
              {newsItem.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500 space-x-3 mt-2">
              {/* Category Tag */}
              <div className="flex items-center text-yellow-600 font-semibold">
                <span className="bg-yellow-600 w-2 h-2 rounded-full mr-1"></span> {newsItem.category}
              </div>

              {/* Timestamp */}
              <div className="flex items-center justify-between space-x-1">
                <Clock size={14} className="text-gray-500" />
                <span>{newsItem.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsSection;
