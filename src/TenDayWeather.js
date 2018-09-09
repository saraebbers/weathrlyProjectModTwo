import React from 'react';
// import './TenDayWeather.css';
import { DayCard } from './DayCard' ;

export const TenDayWeather = (props) => {
  // const {dayOfWeek, icon, high, low, precipitation, snow} = props.tenDay;
  console.log(props.tenDay)
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
