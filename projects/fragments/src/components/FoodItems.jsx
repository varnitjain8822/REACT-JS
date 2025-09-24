export default function FoodItem(){
  const fooditems = ["dal","sabji","roti","bhindi","poori","ghee"];
   return <ul className="list-group">
        {fooditems.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
}