import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import React from 'react'
import viteLogo from '/vite.svg'
import Error from './components/Error';
import Food from './components/Food'
function App() {

  const fooditems = ["dal", "sabji", "roti", "bhindi", "poori", "ghee","roti2"];
  return <>
  <h1 className='kg-heading'>hello food</h1>
  <Error items={fooditems}></Error>
  <Food items={fooditems}></Food>
  </>
    
};


export default App
