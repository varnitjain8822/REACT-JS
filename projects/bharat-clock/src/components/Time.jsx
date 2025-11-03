import { use, useEffect, useState } from "react";

export default function Time() {
  const[time,settime] = useState(new Date());

  useEffect(()=>{
    const interval = setInterval(()=>{
      settime(new Date());
    },1000);
    
    return ()=> clearInterval(interval);
  },[]);  
  return (
  <h1 class="fw-bolder">This is current time : 
  {time.toLocaleDateString()} - {""} 
  {time.toLocaleTimeString()}</h1>)
}