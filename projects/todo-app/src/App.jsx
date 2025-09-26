import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/List'
import Grid from './components/Grid'
import Grid2 from './components/Grid2'
import "./App.css"
function App() {

  const todotask=[{name:'buy milk',date:'23/08/2024'},{name:'dogame',date:'23/09/2024'},{name:'buy milk',date:'23/08/2024'},{name:'dogame',date:'23/09/2024'}];
  return <div>
  <center><List/></center>
  <Grid/>
  <div class="itemcontainer">
  <Grid2 todotask={todotask}/>
  </div>
  </div>
}
export default App;
