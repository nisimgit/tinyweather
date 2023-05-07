import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Input = ({cityInputHandler}) => {

  const [cityInput, setCityInput] = useState('')

  const handleChange = (e) => {
    setCityInput(e.target.value)
  }

  const handleSubmit = () => {
    cityInputHandler(cityInput)
    setCityInput('')
  }

  const handleClear = () => {
    setCityInput('')
  }

  const checkEnterClick = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <Form style={{
        display: 'flex', flexDirection: 'row', paddingBottom: '1rem'
      }}>
      <Form.Control
        placeholder='Enter a city' value={cityInput} onChange={handleChange} onKeyDown={checkEnterClick}>
      </Form.Control>
      <Button
        variant='secondary' onClick={handleClear} style={{marginLeft: '1rem'}}>
        Clear
      </Button>
      <Button
        variant='primary' onClick={handleSubmit} style={{marginLeft: '1rem'}}>
        Submit
      </Button>
    </Form>
  )
}

export default Input