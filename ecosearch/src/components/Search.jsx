import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product list from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        const data = await res.json();

        if (!data || !Array.isArray(data.products))
          throw new Error("Invalid API response format");

        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search input
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        )
      );
    }
  }, [searchQuery, products]);

  // Show loading spinner
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-success" role="status" />
        <p className="mt-2">Loading products...</p>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          Error fetching products: {error}
        </div>
      </div>
    );
  }

  // Render product cards
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold text-success mb-4">
        🛍️ Product Search
      </h2>

      {/* Search Bar */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto text-center shadow-sm border-success"
          placeholder="Search by name, category, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ fontWeight: "500", borderRadius: "25px" }}
        />
      </div>

      {/* Product Cards */}
      <div className="row justify-content-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
              <div
                className="card shadow-sm border-success"
                style={{ width: "18rem", borderRadius: "10px" }}
              >
                <img
                  src={product.thumbnail || product.images?.[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-success fw-bold">
                    {product.title}
                  </h5>
                  <p className="card-text text-muted">
                    {product.description?.slice(0, 60)}...
                  </p>
                  <p className="fw-bold text-dark">₹{product.price}</p>
                  <button className="btn btn-success">Add to Cart 🛒</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found.</p>
        )}
      </div>
    </div>
  );
}
