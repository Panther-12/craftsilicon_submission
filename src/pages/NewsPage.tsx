/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import News from '../components/News';
import { Search } from 'lucide-react';
import newsImage from '../assets/images/news/image1.jpg';

interface NewsItem {
  id: number;
  title: string;
  time: string;
  image: string;
  isVideo: boolean;
  tag: string;
}

const sampleNewsData: NewsItem[] = [
  { id: 1, title: 'Spain men in basketball and football action', time: '3 hrs ago', image: newsImage, isVideo: false, tag: 'CLUB' },
  { id: 2, title: 'Chimezie Metu joins the team', time: '3 hrs ago', image: newsImage, isVideo: false, tag: 'BASKETBALL' },
  { id: 3, title: 'Barça complete first double training session in Orlando', time: '7 hrs ago', image: newsImage, isVideo: false, tag: 'FIRST TEAM' },
  { id: 4, title: 'Chimezie Metu joins the team', time: '3 hrs ago', image: newsImage, isVideo: false, tag: 'BASKETBALL' },
  { id: 5, title: 'Barça complete first double training session in Orlando', time: '7 hrs ago', image: newsImage, isVideo: false, tag: 'FIRST TEAM' },
  { id: 6, title: 'Barça complete first double training session in Orlando', time: '7 hrs ago', image: newsImage, isVideo: false, tag: 'FIRST TEAM' },
];

const NewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>(sampleNewsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredNews = newsData.filter(news => {
    const matchesFilter = selectedFilter === 'ALL' || news.tag === selectedFilter;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white m-2">
      {/* Title */}
      <h1 className="text-center text-3xl font-semibold mb-6 text-yellow-600">Muranga Seal News</h1>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
        {/* Filters */}
        <div className="flex space-x-4">
          {['ALL', 'CLUB', 'BASKETBALL', 'FIRST TEAM'].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-md font-semibold ${
                selectedFilter === filter ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search News..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full md:w-64 rounded-md border border-gray-300"
          />
          <Search size={20} className="absolute right-3 top-2 text-gray-500" />
        </div>
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <News
              key={news.id}
              title={news.title}
              time={news.time}
              image={news.image}
              isVideo={news.isVideo}
              tag={news.tag}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No news found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
