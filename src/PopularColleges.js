import React from 'react';
import './PopularColleges.css';

const PopularColleges = () => {
  return (
    <div className="popular-colleges-container">
      <div className="popular-colleges-title">Most Popular Colleges</div>
      <div className="college-card-container">
        <div className="college-card">
          <div className="college-image" />
          <img className="college-logo" src="https://via.placeholder.com/65x69" alt="College Logo" />
          <div className="college-name">NAME OF COLLEGE</div>
          <div className="college-location">Location</div>
          <div className="college-rank">NIRF Rank</div>
          <div className="apply-now">APPLY NOW</div>
        </div>
      </div>
    </div>
  );
};

export default PopularColleges;
