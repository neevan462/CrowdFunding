import React from 'react';
import './CampaignCard.css';

const CampaignCard = ({ title, description, goal, raised, image }) => {
  // Calculate the progress percentage
  const progress = (raised / goal) * 100;

  return (
    <div className="campaign-card">
      <img className="campaign-image" src={image} alt={title} />
      <div className="campaign-details">
        <h2 className="campaign-title">{title}</h2>
        <p className="campaign-description">{description}</p>
        <div className="campaign-progress">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="campaign-footer">
          <span className="campaign-goal">Goal: ${goal}</span>
          <span className="campaign-raised">Raised: ${raised}</span>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
