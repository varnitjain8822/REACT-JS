import VjButton from "./VjButton";
import Hello from "./Hello";
import Random from "./random";
function App(){
  //here it is not html it is xml react is automatically converting it to jsx can check it at babeljs.io/repl
  return <div>
    <h1>hello world </h1>
    <button>button</button>
    <Hello></Hello>
    <VjButton></VjButton>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div>
}

export default App;
