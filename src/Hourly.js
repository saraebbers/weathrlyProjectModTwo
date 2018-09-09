import React from 'react';
// import './Hourly.css';
import { HourlyCard } from './HourlyCard.js'

export const Hourly = (props) => {
  return (
    <div>
      <p>
        {
          props.hourlyWeather.map((hour, index) => {
          return <HourlyCard hourlyWeather={hour} key={index} />
          }) 
        } 

      </p>


    </div>
    )
}
