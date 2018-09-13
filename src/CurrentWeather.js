import React from 'react';
import './CurrentWeather.css';

 const CurrentWeather = (props) => {
  const {location, temp, dateTime, desc, humidity, icon, precipToday, text} = props.currentWeather;

  const dayOneInfo = props.tenDay[0];
  console.log(dayOneInfo);

  return (
    <div className='CurrentWeather'>
      <h1 className='location'>{location}</h1>
        <p className='temp'>{temp} º</p>
      <div className='icon-description'>
        <p className='description'>{desc}</p>
        <img className='icon' src={icon} />
      </div>
        <p className='update'> {dayOneInfo.dayOfWeek} Forecast:</p>
      <div className='day-high-low'>
        <p className='high'>High {dayOneInfo.high},</p>
        <p className='low'>Low {dayOneInfo.low}   Currently </p>
        <p className='todays-forecast'>{text} </p>
      </div>
    </div>
    )
} 

export default CurrentWeather