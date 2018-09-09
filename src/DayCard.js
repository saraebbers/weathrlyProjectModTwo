import React from 'react';
import './DailyCard.css';

export const DayCard = (props) => {
const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  return (
    <div className='DayCard'>
      <p>{dayOfWeek}</p>
      <img src={icon} />
      <p>High: {high}</p>
      <p>Low: {low}</p>
      <p>Precipitation: {precipitation}</p>
      <p>Snow: {snow}</p>
    </div>
    )
}

