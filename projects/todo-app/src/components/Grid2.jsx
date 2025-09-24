export default function Grid2() {
  let name = "varnit";
  let date = "19/03/2025";
  return (<div class="container text-center">
  <div class="row">
    <div class="col">
      <h1>{name}</h1>
    </div>
    <div class="col">
      {date}
    </div>
    <div class="col">
      <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </div>
</div>)
}