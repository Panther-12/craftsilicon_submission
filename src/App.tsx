import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import SingleNewsPage from './pages/SingleNewsPage';
import NewsPage from './pages/NewsPage';
import Fixtures from './pages/Fixtures';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<SingleNewsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/player/:id" element={<PlayerPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;