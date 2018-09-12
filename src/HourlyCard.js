import React from 'react';
import './HourlyCard.css';

export const HourlyCard = (props) =>{
  const {icon, temp, time} = props.hourlyWeather;
  return (
    <div className='HourlyCard'>
      <p className='time-temp'>{time}</p>
      <img className='condition-icon' src={icon} />
      <p className='time-temp'> {temp}º</p>
    </div>

  )

}
