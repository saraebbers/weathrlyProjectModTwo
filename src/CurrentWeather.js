import React from 'react';
import './CurrentWeather.css';

export const CurrentWeather = (props) => {
  const {location, temp, dateTime, desc, humidity, icon, precipToday, text} = props.currentWeather;

  const dayOneInfo = props.tenDay[0];
  console.log(dayOneInfo);

  return (
    <div className='CurrentWeather'>
      <p>{ location }</p>
      <p>Current Temperature: {temp} F</p>
      <p>{ dateTime }</p>
      <p>{ desc }</p>
      <p>Humidity: { humidity }</p>
      <img src={icon} />
      <p>Precipitation Today: { precipToday }</p>
      
      <p>day of week </p>
      <p>{dayOneInfo.dayOfWeek}</p>
     
      <p>high/low: {dayOneInfo.high} / {dayOneInfo.low}</p>
      <p>summary: {text} </p>
    </div>
    )


} 
