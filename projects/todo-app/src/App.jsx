import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import List from './components/List'
import Grid from './components/Grid'
import Grid2 from './components/Grid2'
import "./App.css"
function App() {
  return <div>
  <center><List/></center>
  <Grid/>
  <div class="itemcontainer">
  <Grid2/>
  <Grid2/>
  <Grid2/>
  </div>
  </div>
}
export default App;
