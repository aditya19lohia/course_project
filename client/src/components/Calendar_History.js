import React from 'react';
import './Calendar_History.css';
import Calendar from './Calendar/Calendar';
import History from './History/History';

const Calendar_History = () => {
  return (
    <div className="Calendar_History-container">
        <Calendar />
        <History />
    </div>
  );
};

export default Calendar_History;
