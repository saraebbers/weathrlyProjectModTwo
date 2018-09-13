import React from 'react';
import './DayCard.css';

export const DayCard = (props) => {
const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  return (
    <div className='DayCard'>
      <img className='detail-icon' src={icon} />
      <p>{dayOfWeek}</p>
      <p>high/low: {high}º/{low}º</p>
      </div> 
    )
}
