import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import Time from './components/Time'

function App() {
  return (
    <center>
      <ClockHeading/> 
      <ClockSlogan/>
      <Time/>
    </center>
  )
}

export default App
