import Title from './Title'
import Input from './Input'
import Weather from './Weather'
import Toast from 'react-bootstrap/Toast'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const cityNameError = () => {
  alert('Please enter a valid city name')
}
const key = null  // Enter your API key here, get it here https://www.weatherapi.com/
export const url = `https://api.weatherapi.com/v1/current.json?key=${key}&aqi=no&q=`

const App = () => {
  const [cities, setCities] = useState([])

  const cityRemoveHandler = (cityToRemove) => {
    setCities(cities.filter((city) => city !== cityToRemove))
  }

  const cityInputHandler = (cityInput) => {
    if (!/^[a-zA-Z\s]{2,}$/.test(cityInput)) {
      cityNameError()
      return
    }
    axios
      .get(url + cityInput)
      .then((res) => {
        if (res.status === 200) {
          if (!cities.includes(res.data.location.name)) {
            setCities([...cities, res.data.location.name])
          }
        } else {
          cityNameError()
          return
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          cityNameError()
          return
        }
      })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
        minWidth: '600px',
      }}
    >
      <Title title="Weather" />
      <Input cityInputHandler={cityInputHandler} />
      <Weather
        cities={cities}
        setCities={setCities}
        cityRemoveHandler={cityRemoveHandler}
      />
    </div>
  )
}

export default App
