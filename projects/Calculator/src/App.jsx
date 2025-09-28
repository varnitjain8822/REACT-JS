import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import  Button from "./components/Button"
import Display from './components/Display'
function App() {
  const buttonarray=['1','2','3','4','5','6','7','8','9','0','+','-','*','/'];
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <div className={styles.buttoncontainer}>
       <Button buttonarray={buttonarray}></Button>
      </div>
    </div>
    );
}

export default App
