import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">
                  {product.description.substring(0, 60)}...
                </p>
                <p className="fw-bold">💲{product.price}</p>
                <a href="#" className="btn btn-primary">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
