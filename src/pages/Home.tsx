import { CardData } from "../interfaces/cardData";
import React from "react";
import News from "../components/News";
import MatchCalendar from "../components/MatchCalender";
import TicketSection from "../components/TicketSection";

const Home: React.FC = () => {
    // Card data array
    const cardData: CardData[] = [
      {
        id: 1,
        image: "/image1.jpg",
        title: "Latest Match Highlights: Amazing Goals",
        time: "5:30",
        isVideo: true
      },
      {
        id: 2,
        image: "/image2.jpg",
        title: "Breaking Transfer News: Star Player Signs",
        time: "7 hours",
        tag: "NEWS"
      },
      {
        id: 3,
        image: "/image3.jpg",
        title: "Upcoming Match Preview: The Big Derby",
        time: "7 hours",
        tag: "MATCH"
      }
    ];
  
    return (
      <div className="min-h-screen">
        {/* Hero Section with Overlay */}
        <div className="relative h-[90vh]">
          {/* Hero Background */}
          <div className="absolute inset-0">
            <img 
              src="/api/placeholder/1920/1080" 
              alt="Hero"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
          </div>
  
          {/* Hero Content - Centered */}
          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-32 px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Featured Story Title
              </h1>
              <div className="flex items-center justify-center text-white space-x-4">
                <span>Category One</span>
                <span className="h-4 w-px bg-white"></span>
                <span>Category Two</span>
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
        <MatchCalendar/>
        <TicketSection/>
      </div>
    );
  };
  
  export default Home;