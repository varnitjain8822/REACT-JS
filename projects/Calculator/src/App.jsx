import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import  Button from "./components/Button"
import Display from './components/Display'
function App() {
  const buttonarray=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','C','='];

  let [calval,setval]=useState("");
  const onbuttonclick=(buttontext)=>{
  if(buttontext==='C'){
     setval("");
  }
  else if (buttontext==='='){
       const result = eval(calval);
       setval(result);
  }
  else{
  const newvalue= calval+buttontext;
  setval(newvalue);
}
  }

  return (
    <div className={styles.calculator}>
      <Display calval={calval}></Display>
      <div className={styles.buttoncontainer}>
       <Button buttonarray={buttonarray} onbuttonclick={onbuttonclick}></Button>
      </div>
    </div>
    );
}

export default App
  h