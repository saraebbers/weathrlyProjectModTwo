function clean(dataFromAPI) {
  
  const {display_location, temp_f, observation_time, weather, relative_humidity, icon_url, precip_today_in} = dataFromAPI.current_observation;
  const {fcttext} = dataFromAPI.forecast.txt_forecast.forecastday[0];

  return {
    currentWeather: {
      location: display_location.full, 
      temp: temp_f,
      dateTime: observation_time,
      desc: weather,
      humidity: relative_humidity,
      icon: icon_url,
      precipToday: precip_today_in,
      text: fcttext
    },

    hourlyWeather: 
      dataFromAPI.hourly_forecast.slice(0,7).map(eachHour => {
        return {
          icon: eachHour.icon_url,
          temp: eachHour.temp.english,
          time: eachHour.FCTTIME.civil
        }
      }),

    tenDay: 
      dataFromAPI.forecast.simpleforecast.forecastday.map(eachDay => {
        return {
          dayOfWeek: eachDay.date.weekday,
          icon: eachDay.icon_url,
          high: eachDay.high.fahrenheit,
          low: eachDay.low.fahrenheit,
          precipitation: eachDay.qpf_allday.in,
          snow: eachDay.snow_allday.in,
          forecastTxt: eachDay.fcttext_metric,
          
        }
      }),
  }

}

export default clean;