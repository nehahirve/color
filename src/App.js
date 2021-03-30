import { useState, useEffect } from 'react'
import './App.css'

const getRandomColor = () => {
  const randomRGB = () => Math.floor(Math.random() * Math.floor(256))
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
}

export default function App() {
  const [color, setColor] = useState(getRandomColor())
  const [buttonColor, setButtonColor] = useState(getRandomColor())
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const updatePos = e => setPos({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    window.addEventListener('mousemove', updatePos)
    return () => window.removeEventListener('mousemove', updatePos)
  }, [])

  return (
    <div
      className='container'
      style={{
        backgroundColor: color
      }}
    >
      <button
        style={{
          top: pos.y,
          left: pos.x,
          backgroundColor: buttonColor
        }}
        className='button'
        onClick={() => {
          setColor(getRandomColor)
          setButtonColor(getRandomColor)
        }}
      ></button>
    </div>
  )
}
