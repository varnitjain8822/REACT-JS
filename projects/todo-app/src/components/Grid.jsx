import { useRef } from 'react';
import { IoPersonAdd } from "react-icons/io5";
import styles from './Grid2.module.css';
import { todotaskcontext } from '../store/todostore';
import { useContext } from 'react';

export default function Grid() {
const { addnewitem } = useContext(todotaskcontext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const [todo, settodo] = useState("");
  // const [date, setdate] = useState("");

  /*const namechange = (event) => {
    settodo(event.target.value);
  };

  const datechange = (event) => {
    setdate(event.target.value); 
  };
  */

  const handleaddbutton = (event) => {
    event.preventDefault(); // ✅ uncommented to prevent page reload
    // if (!todo || !date) return;  optional: avoid empty tasks
    // onnewitem(todo, date); 
    // settodo("");
    // setdate("");

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addnewitem(todoName, dueDate); 
  }; 

  return (
    <form onSubmit={handleaddbutton}>
      <div className={`${styles.container} text-center`}>
        <div className="row">
          <div className="col">
            <input 
              type="text"  
              placeholder="Enter Tasks To Do" 
              ref={todoNameElement}
            />
          </div>  
          <div className="col">
            <input 
              type="date" 
              className="form-control" 
              ref={dueDateElement}  // ✅ remove value prop
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-warning">
              <IoPersonAdd />
            </button>
          </div>
        </div> 
        <br />
      </div>
    </form>
  );
}
