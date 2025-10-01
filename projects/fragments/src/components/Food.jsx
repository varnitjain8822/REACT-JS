import FoodItem from "./FoodItems";
import styles from "./Food.module.css";
import { useState } from "react";

export default function Food({ items }) {

  let [activeitem,setactiveitem] = useState([]);

  let onbutton =(item,event) =>{
    let newitem=[...activeitem,item];
    setactiveitem(newitem);
  }

  return ( 
    <ul className={styles.listgroup} style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <FoodItem
          key={item}
          item={item}
          bought={activeitem.includes(item)
          }
          handleFunction={(event) => onbutton(item, event)}
        />
      ))}
    </ul>
  );
}
