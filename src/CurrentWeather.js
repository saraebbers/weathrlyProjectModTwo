import React from 'react';
import './CurrentWeather.css';

 export default function CurrentWeather (props) {
  const {location, temp, dateTime, desc, humidity, icon, precipToday, text} = props.currentWeather;

  const dayOneInfo = props.tenDay[0];
  console.log(dayOneInfo);

  return (
    <div className='CurrentWeather'>
      <p className='location'>{location}</p>
      <p className='temp'>{temp} º</p>
      <p classname='description'>{desc}</p>
      <p className='update'>day of week: {dayOneInfo.dayOfWeek}</p>
      <p>high/low: {dayOneInfo.high} / {dayOneInfo.low}</p>
      <p>summary: {text} </p>
      <img src={icon} />
    </div>
    )
} 

