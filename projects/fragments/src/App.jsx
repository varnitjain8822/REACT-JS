import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import viteLogo from '/vite.svg';
import Error from './components/Error';
import Food from './components/Food';
import Container from './components/Container';
import Foodinput from './components/Foodinput';

function App() {
  const [fooditems, setFoodItems] = useState([ 
  ]);

  const [text, setText] = useState("hello world");


 
  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      let newitems=[...fooditems,value];
        setFoodItems(newitems); 
    }
  };


  return (
    <>
      <Container>
        <h1 className="kg-heading">hello food</h1>
        <Error items={fooditems} />
        <Food items={fooditems} />
        <Foodinput handleOnChange={handleOnChange} />
      </Container>
    </>
  );
}

export default App;
