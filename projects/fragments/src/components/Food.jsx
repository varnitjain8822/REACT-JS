import FoodItem from "./FoodItems";
import styles from "./Food.module.css";

// passing function via prop
export default function Food({ items }) {
  return (
    <ul className={styles.listgroup} style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <FoodItem
          key={item}
          item={item}
          handleFunction={() => console.log(`${item} clicked`)}
        />
      ))}
    </ul>
  );
}
