import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();
        setProducts(data.products.slice(0, 6)); // show 6 slides
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status" />
        <p className="mt-2 text-success">Loading product slider...</p>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center mt-5">
        Error: {error}
      </div>
    );

  return (
    <div className="d-flex justify-content-center my-5">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade shadow-lg"
        data-bs-ride="carousel"
        data-bs-interval="1000" // auto-slide every 1 seconds
        style={{
          width: "85%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel items */}
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={product.thumbnail}
                className="d-block w-100"
                alt={product.title}
                style={{
                  height: "70vh",
                  objectFit: "cover",
                  filter: "brightness(85%)",
                }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3 className="fw-bold text-light">{product.title}</h3>
                <p className="text-light">
                  {product.description.slice(0, 80)}...
                </p>
                <button className="btn btn-success fw-semibold">
                  Shop Now 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
