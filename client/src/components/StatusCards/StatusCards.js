import React from 'react';
import './StatusCards.css';

const StatusCard = ({ backgroundColor, icon, statistic, label, progress,progressColor }) => {
  return (
    <div className="status-card" style={{ backgroundColor }}>
      <div className="status-card-header">
        <div className="status-card-icon">{icon}</div>
        <div className="status-card-progress" style={{ '--progress': `${progress * 360}deg`, '--progress-color': progressColor }}></div>
      </div>
      <div className="status-card-content">
        <h2 className="status-card-statistic">{statistic}</h2>
        <p className="status-card-label">{label}</p>
      </div>
    </div>
  );
};

export default StatusCard;
