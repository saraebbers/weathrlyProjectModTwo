import React from 'react';
import './CurrentWeather.css';

export const CurrentWeather = (props) => {
  const {location, temp, dateTime, desc, humidity, icon, precipToday} = props.currentWeather;
  return (
    <div className='CurrentWeather'>
      <p>{location}</p>
      <p>Current Temperature: {temp} F</p>
      <p>{dateTime}</p>
      <p>{desc}</p>
      <p>Humidity: {humidity}</p>
      <img src={icon} />
      <p>Precipitation Today: {precipToday}</p>
      
      <p>day of week </p>

     
      <p>high/low: {} / {}</p>
      <p>summary: {} </p>
    </div>
    )


} 
