import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products/category-list");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success position-relative"
      style={{ zIndex: 1000 }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          EcoSearch
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li
              className="nav-item position-relative"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-link">Categories</span>

              {/* Category Overlay */}
              {showCategories && (
                <div
                  className="category-overlay shadow-lg p-3 bg-white rounded position-absolute"
                  style={{
                    top: "100%",
                    left: 0,
                    width: "350px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    border: "2px solid #198754",
                  }}
                >
                  <h6 className="text-success text-center mb-2 fw-bold">
                    Product Categories
                  </h6>
                  {loading ? (
                    <p className="text-center text-muted">Loading...</p>
                  ) : (
                    <ul className="list-group">
                      {categories.map((cat, i) => (
                        <li
                          key={i}
                          className="list-group-item list-group-item-action text-capitalize"
                          style={{
                            cursor: "pointer",
                            transition: "0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "rgba(25,135,84,0.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "")
                          }
                        >
                          {cat.replaceAll("-", " ")}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#community">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Extra styling */}
      <style>{`
        .category-overlay {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
