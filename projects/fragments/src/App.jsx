import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import viteLogo from '/vite.svg'
import FoodItem from './components/FoodItems';
import Error from './components/Error';

function App() {
  return (
    <React.Fragment>
      <FoodItem/>
      <Error/>
    </React.Fragment>
  );
}


export default App
