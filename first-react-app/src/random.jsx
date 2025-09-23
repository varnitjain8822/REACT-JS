function Random(){
  let number = Math.random()*10;
  return <h1 style={{'backgroundColor':"red"}}>Random Number {Math.round(number)}</h1>
}

export default Random;