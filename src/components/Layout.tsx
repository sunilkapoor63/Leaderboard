import React from 'react';
import Leaderboard from './Leaderboard';
import AddScorePopup from './AddScorePopup';
import './Layout.css';
import eventImage from '../assets/BANER-SHANNH 1.png';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <section className="page">
        <Leaderboard />
      </section>
      <section className="page second-slide" style={{ backgroundImage: `url(${eventImage})` }}>
        <div className="scrolling-image-container">
          <img src={eventImage} alt="Event" className="event-image" />
        </div>
      </section>
      <AddScorePopup />
    </div>
  );
};

export default Layout;
