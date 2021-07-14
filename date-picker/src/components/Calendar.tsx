import React, { MouseEvent, useState } from 'react';
import { WeekDay, Date } from '../../types';
import { WeekDays } from '../configs/WeekDays';
import { monthDates } from '../configs/MonthDays';
import { ChevronLeftIcon } from '../assets/icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../assets/icons/ChevronRightIcon';

export const Calendar: React.FC<{}> = ({}) => {
  //const [monthDates, setMonthDates] = useState<Date[] | []>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(e.currentTarget.getAttribute('value'));
  }

  const generateDates = (date: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    console.log(selectedDateNumber);
    for (let i = 0; i < 7; i++) {
      return <button className={`date ${date == 18 ? "today" : ""} ${date == selectedDateNumber ? "selected" : ""}`} value={date} onClick={handleChange}><p>{date}</p></button>;
    }
  }

  const generateWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i+= daysInWeek) {
      tempArray.push(dates.slice(i, i+daysInWeek));
    }

    return tempArray;
  }

  return (
    <div className="calendar-container">
      <div className="datepicker-container">
        <ChevronLeftIcon color="white"/>
        <span>February 2020</span>
        <ChevronRightIcon color="white"/>
      </div>
      <div className="weekdays-container">
        {WeekDays.map(day => (
          <div className="week-day">{day}</div>
        )
        )}
      </div>
      <div className="calendar">
        {generateWeeks(monthDates).map(week => (
          <div className="week">
            {week.map(day => (generateDates(day.day)))}
          </div>
        ))}
      </div>
    </div>
  )
};
