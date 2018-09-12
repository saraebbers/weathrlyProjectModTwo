import React from 'react';
import './DayCard.css';

export const DayCard = (props) => {
const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  return (
    <div className='DayCard'>
      <div className='detail'>
        <p>{dayOfWeek}</p>
        <img className='detail-icon' src={icon} />
      </div>
      <div className='temp-detail'>
        <p className='high-low'>high/low: {high}º/{low}º</p>
      </div>
    </div>
    )
}


// <p className='high-low-precip'>Precipitation: {precipitation}</p>


