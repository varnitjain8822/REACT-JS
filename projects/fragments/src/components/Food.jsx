import FoodItem from "./FoodItems";

export default function Food({items}) {
  return <>
    <ul className="list-group">
      {items.map((item) => (
        <FoodItem key={item} FoodItem={item}></FoodItem>
      ))}
    </ul>
  </>
}
