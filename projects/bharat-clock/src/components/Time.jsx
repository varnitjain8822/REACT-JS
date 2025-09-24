export default function Time() {
  let time = new Date();
  return (<h1 class="fw-bolder">This is current time : {time.toLocaleDateString()} - {""} {time.toLocaleTimeString()}</h1>)
}