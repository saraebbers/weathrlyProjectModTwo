import React from 'react';
import './DayCard.css';

export const DayCard = (props) => {
const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  return (
    <div className='DayCard'>
      <p>{dayOfWeek}</p>
      <img src={icon} />
      <div className='detail'>
        <p>High: {high}</p>
        <p>Low: {low}</p>
      </div>
      <div className='detail'>
        <p>Precipitation: {precipitation}</p>
        <p>Snow: {snow}</p>
      </div>
    </div>
    )
}

