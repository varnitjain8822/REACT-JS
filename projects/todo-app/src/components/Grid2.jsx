import styles from './Grid2.module.css'

export default function Grid2({todotask}) {
 
  return todotask.map((item)=>((<div class="styles.container text-center">
  <div class="row">
    <div class="col">
      <h1>{item.name}</h1>
    </div>
    <div class="col">
      {item.date}
    </div>
    <div class="col">
      <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </div>
</div>)
  ))
}