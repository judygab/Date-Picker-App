import React from 'react';
import { WeekDay, Date } from '../../types';
import { Calendar } from './Calendar';

export const DatePicker: React.FC<{}> = ({}) => {
  return (
    <div className="date-picker-container">
      <div className="background-container"></div>
      <Calendar />
    </div>
  )
};
