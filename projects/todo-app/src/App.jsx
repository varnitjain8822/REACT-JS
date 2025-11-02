/*import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Grid from "./components/Grid";
import Grid2 from "./components/Grid2";
import Welcome from "./components/Welcome";
import { todotaskcontext } from "./store/todostore";

function App() {
  const initialtodotask = [
    { name: "buy chip", date: "2024-08-23" },
    { name: "dogame", date: "2024-09-23" },
    { name: "buy milk", date: "2024-08-23" },
  ];

  const [todotask, settodoitem] = useState(initialtodotask);

  // Add new item
  const onnewitem = (itemName, itemDueDate) => {
    settodoitem((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  // Delete item
  const handledelete = (itemname) => {
    const newtodoitem = todotask.filter((item) => item.name !== itemname);
    settodoitem(newtodoitem);
  };

  return (
    <todotaskcontext.Provider value={{items:todotask,addnewitem:onnewitem,deleteitem:handledelete}}>
      <div className="App">
        <center>
          <List />
        </center>
        <Welcome todotask={todotask} />
        <Grid onnewitem={onnewitem} />
        <div className="itemcontainer">
          <Grid2 handledelete={handledelete} />
        </div>
      </div>
    </todotaskcontext.Provider>
  );
}

export default App;


*/


import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Grid from "./components/Grid";
import Grid2 from "./components/Grid2";
import Welcome from "./components/Welcome";
import { todotaskcontext } from "./store/todostore";
function App() {
  const initialtodotask = [
    { name: "buy chip", date: "2024-08-23" },
    { name: "dogame", date: "2024-09-23" },
    { name: "buy milk", date: "2024-08-23" },
  ];

  const [todotask, settodoitem] = useState(initialtodotask);

  // Add new item
  const onnewitem = (itemName, itemDueDate) => {
    settodoitem((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  // Delete item
  const handledelete = (itemname) => {
    const newtodoitem = todotask.filter((item) => item.name !== itemname);
    settodoitem(newtodoitem);
  };

  return (
    <todotaskcontext.Provider value={{items:todotask,addnewitem:onnewitem,deleteitem:handledelete}}>
      <div className="App">
        <center>
          <List />
        </center>
        <Welcome/>
        <Grid />
        <div className="itemcontainer">
          <Grid2  />
        </div>
      </div>
    </todotaskcontext.Provider>
  );
}

export default App;

