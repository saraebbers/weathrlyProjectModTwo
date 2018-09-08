function clean(dataFromAPI) {
  
  const {display_location, temp_f, observation_time, weather, relative_humidity, icon_url} = dataFromAPI.current_observation;

  return {
    currentWeather: {
      location: display_location.full, 
      temp: temp_f,
      dateTime: observation_time,
      desc: weather,
      humidity: relative_humidity,
      icon: icon_url
    }
    // hourlyWeather: [
    // ]
    // tenDay: [
    // ]
  }

}

export default clean;