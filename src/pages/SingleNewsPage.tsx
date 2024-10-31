import React from 'react';
import { Facebook, Twitter, Instagram, X, MessageSquare } from 'lucide-react';
import News from '../components/News';
import authorImg from '../assets/images/player.png'; 
import newsImage from '../assets/images/news/image1.jpg'

const SingleNewsPage: React.FC = () => {
  return (
    <div className="bg-white text-black max-w-7xl mx-auto p-6 lg:px-10 lg:py-10 space-y-10">
      {/* Header Section with Image */}
      <div className="space-y-6">
        <img
          src={newsImage}
          alt="News cover"
          className="w-full h-80 lg:h-[32rem] object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">
          Murang’a seal seals Gor Mahia
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Tusker FC is thrilled to announce the signing of goalkeeper Joseph Ochuka from Bandari FC. Ochuka has signed a
          year-long deal with the club and will bring his impressive goalkeeping skills and experience to our squad as we
          gear up for the new season.
          <br /><br />
          Ochuka, known for his agility, sharp reflexes, ball-playing ability, and leadership on the field, has been a
          standout performer in the Premier League...
        </p>
      </div>

      {/* Comment Section */}
      <div className="bg-yellow-50 border border-yellow-400 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <img
            src={authorImg} // Replace with the actual path to the author avatar image
            alt="Author avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1 space-y-4">
            <p className="text-gray-700">
              "I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end
              result was delicious. I will definitely be making this again. Thanks for sharing!"
            </p>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">👍</button>
              <button className="text-gray-500 hover:text-gray-700">👎</button>
              <button className="text-yellow-600 font-semibold">Reply</button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-b py-4 border-gray-200">
        <p className="text-sm font-semibold text-gray-700 mb-4 md:mb-0">SHARE ARTICLE</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-600">
            <X size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600">
            <MessageSquare size={24} />
          </a>
        </div>
      </div>

      {/* Related News Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">Related Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dummy data used for related news */}
          <News
            title="Spain men in basketball and football action"
            time="3 hrs ago"
            image={newsImage}
            isVideo={false}
            tag="CLUB"
          />
          <News
            title="Chimezie Metu joins the team"
            time="3 hrs ago"
            image={newsImage}
            isVideo={false}
            tag="BASKETBALL"
          />
          <News
            title="Barça complete first double training session in Orlando"
            time="7 hrs ago"
            image={newsImage} 
            isVideo={false}
            tag="FIRST TEAM"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleNewsPage;
