import styles from "./FoodItems.module.css";

// props are immutable
export default function FoodItem(props) {
  return (
    <li className={styles["kg-item"]}>
      <span className={styles["kg-span"]}>{props.FoodItem}</span>
    </li>
  );
}
