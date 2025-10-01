import styles from './Grid2.module.css'
import { MdDelete } from "react-icons/md";

export default function Grid2({ todotask, handledelete }) {
  return todotask.map((item) => (
    <div key={item.name} className={`${styles.container} text-center`}>
      <div className="row">
        <div className="col">
          <h1>{item.name}</h1>
        </div>
        <div className="col">
          {item.date}
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handledelete(item.name)}
          >
           <MdDelete />

          </button>
        </div>
      </div>
    </div>
  ));
}
