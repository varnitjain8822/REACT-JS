export default function Grid() {


  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>TASKS</h1>
        </div>
        <div className="col">
          <input 
            type="date" 
            className="form-control" 
            placeholder="Input group example" 
            aria-label="Input group example" 
            aria-describedby="btnGroupAddon" 
          />
        </div>
        <div className="col">
          <button type="button" class="btn btn-warning">ADD TO TASKS</button>
        </div>
      </div>
    </div>
  );
}
