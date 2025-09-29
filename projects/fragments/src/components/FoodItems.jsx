import styles from "./FoodItems.module.css";

export default function FoodItem(props) {
  return (
    <li className={styles["kg-item"]}>
      <span className={styles["kg-span"]}>{props.item}</span>
      <button
        type="button"
        className={`${styles.button} btn btn-success`}
        onClick={props.handleFunction}
      >
        ON
      </button>
    </li>
  );
}
