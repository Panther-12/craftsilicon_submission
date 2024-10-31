import { CardData } from "../interfaces/cardData";
import React from "react";
import News from "../components/News";
import hero from "../assets/images/hero.jpg"
import home1 from "../assets/images/home-1.jpg"
import home2 from "../assets/images/home-2.jpg"
import home3 from "../assets/images/home-3.jpg"
import { Clock } from "lucide-react";
import TicketsSection from "../components/TicketsSection";
import MatchCountdown from "../components/MatchCountdown";
import StoreSection from "../components/StoreSection";
import NewsSection from "../components/NewsSection";
import PlayersCarousel from "../components/PlayerCarousel";
import PartnersSection from "../components/PartnerSection";

const Home: React.FC = () => {
    // Card data array
    const cardData: CardData[] = [
      {
        id: 1,
        image: home1,
        title: "Latest Match Highlights: Amazing Goals",
        time: "5:30",
        isVideo: true
      },
      {
        id: 2,
        image: home2,
        title: "Breaking Transfer News: Star Player Signs",
        time: "7 hours",
        tag: "NEWS"
      },
      {
        id: 3,
        image: home3,
        title: "Upcoming Match Preview: The Big Derby",
        time: "7 hours",
        tag: "MATCH"
      }
    ];
  
    return (
      <div className="min-h-screen bg-black">
        {/* Hero Section with Overlay */}
        <div className="relative h-[90vh]">
          {/* Hero Background */}
          <div className="absolute inset-0">
            <img 
              src={hero}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
          </div>
  
          {/* Hero Content - Centered */}
          <div className="relative z-10 h-full flex flex-col items-start justify-end pb-32 px-6">
            <div className="text-left max-w-5xl mx-auto">
              {/* Main Title with Vertical Divider */}
              <h1 className="text-white font-bold flex items-center mb-2 border-b-4 border-white pb-1">
                <span className="text-5xl md:text-6xl lg:text-7xl">PREVIEW</span>
                <span className="border-l-4 border-white mx-4 h-10"></span>
                <span className="text-5xl md:text-6xl lg:text-7xl">Barça v Man City</span>
              </h1>
              
              {/* Subheading Section */}
              <div className="flex items-center space-x-3 mt-2 justify-center">
                {/* Category Label with Yellow Square Icon */}
                <span className="flex items-center space-x-1 text-yellow-400 font-semibold text-sm">
                  <span className="bg-yellow-400 h-3 w-3 mr-1"></span>
                  <span className="text-yellow-400 border-b border-yellow-400">FIRST TEAM</span>
                </span>
                
                {/* Divider Line */}
                <span className="h-4 w-px bg-white"></span>
                
                {/* Timestamp with Clock Icon */}
                <span className="flex items-center space-x-1 text-white opacity-75 text-sm">
                  <Clock size={16} className="text-white opacity-75" />
                  <span className="border-b border-white">1 hr ago</span>
                </span>
              </div>
            </div>
          </div>            
        </div>
  
        {/* Cards Section - Centered with Mapping */}
        <div className="relative bg-gradient-to-b from-yellow-900/10 to-black/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center -mt-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {cardData.map(({ id, ...cardProps }) => (
                  <News
                    key={id}
                    {...cardProps}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <MatchCountdown/>
        <TicketsSection/>
        <StoreSection/>
        <NewsSection/>
        <PlayersCarousel/>
        <PartnersSection/>
      </div>
    );
  };
  
  export default Home;