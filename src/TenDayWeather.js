import React from 'react';
import './TenDayWeather.css';
import { DayCard } from './DayCard' ;

export const TenDayWeather = (props) => {
  return(
    <div className='TenDayWeather'>
      <p> 
        {
          props.tenDay.map((day, index) => {
          return <DayCard tenDay={day} key={index} />
          })
        }
      </p>
    </div>
    )

}
