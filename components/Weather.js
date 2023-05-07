import { useCallback, useState, useEffect } from 'react'
import WeatherRenderer from './WeatherRenderer'
import axios from 'axios'
import { url } from './App'
import getTimeStamp from '@/util/getTimeStamp'

const Weather = ({ cities, setCities, cityRemoveHandler }) => {
  const [weatherData, setWeatherData] = useState([])
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    cities.map((city) => {
      axios.get(url + city).then((res) => {
        if (res.status === 200) {
          setWeatherData((prev) => [
            ...prev,
            {
              name: res.data.location.name,
              temperature: res.data.current.temp_c,
              condition: res.data.current.condition.text,
              iconUrl: res.data.current.condition.icon,
            },
          ])
        } else {
          Alert(`City named ${city} not found`)
        }
      })
    })
    return () => {
      setWeatherData([])
    }
  }, [cities, setCities])

  return (
    <>
      <WeatherRenderer
        weatherData={weatherData}
        cityRemoveHandler={cityRemoveHandler}
      />
    </>
  )
}

export default Weather
