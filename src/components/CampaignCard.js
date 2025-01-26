// CampaignCard.js
import React from "react";
import "./CampaignCard.css";

const CampaignCard = ({ image, title, description, progress, raised, goal, onViewDetails }) => {
  return (
    <div className="campaign-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="funding-stats">Raised: ${raised} / ${goal}</p>
      <button className="btn-primary" onClick={onViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default CampaignCard;
