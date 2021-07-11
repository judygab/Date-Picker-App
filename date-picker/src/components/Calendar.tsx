import React, { useState } from 'react';
import { WeekDay, Date } from '../../types';
import { WeekDays } from '../configs/WeekDays';
import { monthDates } from '../configs/MonthDays';
import { ChevronLeftIcon } from '../assets/icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../assets/icons/ChevronRightIcon';

export const Calendar: React.FC<{}> = ({}) => {
  //const [monthDates, setMonthDates] = useState<Date[] | []>([]);
  const generateDates = (date: number) => {
    for (let i = 0; i < 7; i++) {
      return <div className="date"><p>{date}</p></div>;
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
        <span>July 2020</span>
        <ChevronRightIcon color="white"/>
      </div>
      <div className="weekdays-container">
        {WeekDays.map(day => (
          <div className="week-day" key="{day}">{day}</div>
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
