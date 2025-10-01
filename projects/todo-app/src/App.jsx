import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/List'
import Grid from './components/Grid'
import Grid2 from './components/Grid2'
import "./App.css"
import Welcome from './components/welcome'
function App() {

  const initialtodotask=[{name:'buy chip',date:'23/08/2024'},{name:'dogame',date:'23/09/2024'},{name:'buy milk',date:'23/08/2024'}];

  const [todotask,settodoitem] = useState(initialtodotask);

  const onnewitem = (name,date)=>{
    console.log(`new item added ${name} and  date:${date}`)
    const newtodoitem=[...initialtodotask,{name:name,date:date}]
    settodoitem(newtodoitem);
  }

  const handledelete=(itemname)=>{
    console.log(`item deleted:${itemname}`);
    const newtodoitem=todotask.filter(item=>item.name!==itemname);
    settodoitem(newtodoitem);
  }
  
  return <div>
  <center><List/></center>
  {todotask.length ===0 && <Welcome ></Welcome>}
  <Grid  onnewitem={onnewitem}/>
  <div className="itemcontainer">
  <Grid2 todotask={todotask} handledelete={handledelete}/>
  </div>
  </div>
}
export default App;
