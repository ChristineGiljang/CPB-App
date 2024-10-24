import React, { useState } from 'react';
import './calendar.css';
import TaskList from '../tasklist/tasklist';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };
    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const renderDays = () => {
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const days = [];

        weekdays.forEach((day, index) => {
            days.push(
                <div key={`weekday-${index}`} className="day weekday">
                    {day}
                </div>
            );
        });
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="day empty"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <div key={i} className="day">
                    {i}
                </div>
            );
        }
        return days;
    };
    return (
        <div className="calendar-content">
            <div className="calendar">
                <div className="header">
                    <button onClick={handlePrevMonth}>Previous</button>
                    <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                    <button onClick={handleNextMonth}>Next</button>
                </div>
                <div className="days">
                    {renderDays()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;