import React from 'react';
import './DayCard.css';

export const DayCard = (props) => {
const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  return (
    <div className='DayCard'>
      <div className='detail'>
        <img src={icon} />
        <h2>{dayOfWeek}</h2>
      </div>
      <div className='detail'>
        <p>high / low: {high} / {low}</p>
      <p>Precipitation: {precipitation}</p>
      </div>
    </div>
    )
}

