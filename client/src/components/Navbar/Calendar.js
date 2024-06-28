import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const currentDate = new Date().getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const renderCalendar = (month, year) => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    const calendarRows = [];

    for (let i = 0; i < 6; i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cells.push(<td key={j}></td>);
        } else if (date > daysInMonth) {
          break;
        } else {
          const isCurrentDate = date === currentDate && month === new Date().getMonth() && year === new Date().getFullYear();
          cells.push(
            <td key={j} className={isCurrentDate ? 'current' : ''} onClick={() => selectDate(date)}>
              {date}
            </td>
          );
          date++;
        }
      }
      calendarRows.push(<tr key={i}>{cells}</tr>);
    }

    return calendarRows;
  };

  const selectDate = (date) => {
    const allCells = document.querySelectorAll('.calendar-table tbody td');
    allCells.forEach((cell) => {
      if (cell.textContent == date) {
        cell.classList.add('selected');
      } else {
        cell.classList.remove('selected');
      }
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev - 1;
      if (newMonth < 0) {
        setCurrentYear(year => year - 1);
        return 11;
      }
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = prev + 1;
      if (newMonth > 11) {
        setCurrentYear(year => year + 1);
        return 0;
      }
      return newMonth;
    });
  };

  useEffect(() => {
    renderCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={handlePrevMonth}>&lt;</button>
        <span className="calendar-month-year">{monthNames[currentMonth]} {currentYear}</span>
        <button className="calendar-nav" onClick={handleNextMonth}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendar(currentMonth, currentYear)}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
