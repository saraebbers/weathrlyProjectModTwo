function clean(dataFromAPI) {
  
  const {display_location, temp_f, observation_time, weather, relative_humidity, icon_url} = dataFromAPI.current_observation;
     
      console.log(dataFromAPI.hourly_forecast.slice(0,7))

  return {
    currentWeather: {
      location: display_location.full, 
      temp: temp_f,
      dateTime: observation_time,
      desc: weather,
      humidity: relative_humidity,
      icon: icon_url
    }

    // dataFromAPI.hourly_forecast.slice(0,8) 
    // hourlyWeather: [
    // ]
    // tenDay: [
    // ]
  }

}

export default clean;