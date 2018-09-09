import React from 'react';
// import './HourlyCard.css';

export const HourlyCard = (props) =>{
  const {icon, temp, time} = props.hourlyWeather;
  return (
    <div className='HourlyCard'>
      <img src={icon} />
      <p> Temperature: {temp}</p>
      <p>Time: {time}</p>
    </div>

  )

}
