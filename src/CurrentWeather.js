import React from 'react';
import './CurrentWeather.css';

export const CurrentWeather = (props) => {
  const {location, temp, dateTime, desc, humidity, icon, precipToday} = props.currentWeather;
  return (
    <div>
      <p>{location}</p>
      <p>Current Temperature: {temp} F</p>
      <p>{dateTime}</p>
      <p>{desc}</p>
      <p>Humidity: {humidity}</p>
      <img src={icon} />
      <p>Precipitation Today: {precipToday}</p>


      


    </div>
    )


} 
