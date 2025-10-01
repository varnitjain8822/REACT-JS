import { useState } from 'react';
import { IoPersonAdd } from "react-icons/io5";


import styles from './Grid2.module.css'
export default function Grid({onnewitem}) {

  const [todo,settodo] = useState("");
  const [date,setdate] = useState("");

  const namechange=(event)=>{
       settodo(event.target.value)
  }

  const datechange=(event)=>{
    setdate(event.target.value); 
  }

  const handleaddbutton=(event)=>{
    console.log(event);
    event.preventDefault();
   /* onnewitem(todo,date); 
    settodo("");
    setdate("");
     */
  } 

  return (
    <form onSubmit={handleaddbutton}>
    <div className={`${styles.container} text-center`}>
      <div className="row">
        <div className="col">
        <input type="text"  placeholder='Enter Tasks To Do ' onChange={namechange}  value={todo}/>
        
        </div>  
        <div className="col">
          <input 
            type="date" 
            className="form-control" 
            placeholder="Input group example" 
            aria-label="Input group example" 
            value={date}
            aria-describedby="btnGroupAddon" onChange={datechange}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-warning" onSubmit={handleaddbutton}><IoPersonAdd />

</button>
        </div>
      </div> 
      <br></br>
    </div>
    </form>
  );
}
