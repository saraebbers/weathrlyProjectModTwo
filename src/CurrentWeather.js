import React from 'react';
import './CurrentWeather.css';

export const CurrentWeather = (props) => {
  const {location, temp, dateTime, desc, humidity, icon, precipToday} = props.currentWeather;
  return (
    <div className='CurrentWeather'>
      <p className='location'>{location}</p>
      <p className='temp'>{temp} º</p>
      <p classname='description'>{desc}</p>
      <p className='update'>{dateTime}</p>
      <img src={icon} />
    </div>
    )


} 

// <p>Humidity: {humidity}</p>
// <p>Precipitation Today: {precipToday}</p>

