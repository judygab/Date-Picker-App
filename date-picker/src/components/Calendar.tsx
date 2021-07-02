import React from 'react';
import { WeekDay, Date } from '../../types';
import { WeekDays } from '../configs/WeekDays';

export const Calendar: React.FC<{}> = ({}) => {
  return (
    <div className="calendar-container">
      <div className="week-days">
        {WeekDays.map(day => (
          <div>{day}</div>
        )
        )}
      </div>
    </div>
  )
};
