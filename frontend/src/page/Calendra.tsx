// src/Calendar.js
import React from 'react';
import './Calendar.css';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1); // Create an array of 35 dates

  const events = [
    { date: 16, label: 'Annual Leave one day', type: 'annual-leave' },
    { date: 21, label: 'Public Holiday', type: 'public-holiday' },
    { date: 24, label: '4th Employee Anniversary', type: 'employee-anniversary' },
    { date: 26, label: 'Emergency Leave', type: 'emergency-leave' },
    { date: 2, label: 'Sick Leave', type: 'sick-leave' },
    { date: 31, label: '4th Employee Anniversary', type: 'employee-anniversary' }
  ];

  return (
    <div className="calendar">
      <div className="header">
        {daysOfWeek.map((day) => (
          <div className="day" key={day}>{day}</div>
        ))}
      </div>
      <div className="dates">
        {dates.map((date) => {
          const event = events.find(e => e.date === date);
          return (
            <div className={`date ${event ? event.type : ''}`} key={date}>
              {date <= 31 && <span>{date}</span>}
              {event && <div className="event">{event.label}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
