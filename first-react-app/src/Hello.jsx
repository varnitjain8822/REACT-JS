//dynamic variables and function using 
function Hello(){
   var MyName = "vansh"
   let fullname = () =>{
    return 'Prashant Jain'
   }
  return <h1>
    Hello this is {MyName} jain
    <br></br>
    Hello this is {fullname()}
  </h1>

}
export default Hello;