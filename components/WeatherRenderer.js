import { useEffect, useState, useCallback } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import getTimeStamp from '@/util/getTimeStamp'

const WeatherRenderer = ({ weatherData, cityRemoveHandler }) => {
  const renderer = useCallback(
    () =>
      weatherData.map((city, index) => {
        return (
          <Card
            key={index}
            style={{ width: '160px', margin: '5px', textAlign: 'center' }}
          >
            <Card.Img
              variant="top"
              src={city.iconUrl}
              alt={city.condition}
              style={{ opacity: 0.2 }}
            />
            <Card.Header>{city.name}</Card.Header>
            <Card.ImgOverlay>
              <Card.Body>
                <Card.Title>{city.temperature}°C</Card.Title>
                <Card.Text>{city.condition}</Card.Text>
                <Card.Text>{getTimeStamp().time}</Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
            <Card.Footer>
              <Button
                style={{ opacity: 0.6, color: 'white' }}
                variant="primary"
                size="sm"
                onClick={() => cityRemoveHandler(city.name)}
              >
                Remove
              </Button>
            </Card.Footer>
          </Card>
        )
      }),
    [weatherData, cityRemoveHandler]
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '50%',
        justifyContent: 'center',
      }}
    >
      {renderer()}
    </div>
  )
}
export default WeatherRenderer
