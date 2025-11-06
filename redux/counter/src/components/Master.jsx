import Displaycounter from "./Displaycounter.jsx";
import'bootstrap/dist/css/bootstrap.min.css'; 




const Master = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            <Displaycounter />
          </p>
          <a href="#" className="btn btn-primary">+1</a>
          <a href="#" className="btn btn-primary">-1</a>
        </div>
      </div>
    </>
  );
};

export default Master;
