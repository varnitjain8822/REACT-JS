import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center mt-3 text-success">
        <div className="spinner-border" role="status"></div>
        <p>Loading categories...</p>
      </div>
    );

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div className="col-md-4 col-sm-6 mb-3" key={index}>
              <div
                className="card text-center shadow-sm border-success"
                style={{
                  borderRadius: "15px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="card-body">
                  <h6 className="card-title text-capitalize">{category}</h6>
                  <p className="card-text text-muted">
                    Explore top products in {category}.
                  </p>
                  <button className="btn btn-outline-success btn-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No categories found.</p>
        )}
      </div>
    </div>
  );
}
