import FoodItem from "./FoodItems";

export default function ListItem(props){
   return <li key={FoodItem}className="list-group-item">{props.FoodItem}</li>
}