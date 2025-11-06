import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserReviews() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fake review templates
  const reviewSamples = [
    "Absolutely loved this product! Great quality and value for money.",
    "The item arrived on time and works as expected. Highly recommend!",
    "Good packaging and excellent performance. Would buy again.",
    "I was skeptical at first but this exceeded my expectations.",
    "Decent product for the price. Customer service was also responsive.",
    "Superb quality! Feels premium and eco-friendly.",
    "A must-have for anyone looking to live sustainably!",
  ];

  // Function to generate random star rating (4-5 stars)
  const randomStars = () => {
    const stars = Math.floor(Math.random() * 2) + 4; // 4 or 5
    return "⭐".repeat(stars) + (stars === 4 ? "☆" : "");
  };

  // Generate a random recent date
  const randomDate = () => {
    const daysAgo = Math.floor(Math.random() * 60) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Fetch users from API
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data.users.slice(0, 9)); // first 9 users
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5 text-success">
        <div className="spinner-border" role="status"></div>
        <p>Loading customer reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-4">
        Error fetching reviews: {error}
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5" id="reviews">
      <h2 className="text-center text-success fw-bold mb-4">
        🛍️ Customer Reviews
      </h2>

      <div className="row justify-content-center">
        {users.map((user, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={user.id}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                borderRadius: "10px",
                transition: "0.3s",
                backgroundColor: "#fff",
              }}
            >
              <div className="card-body">
                {/* Profile Section */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">
                      {user.firstName} {user.lastName}
                    </h6>
                    <small className="text-muted">
                      {randomDate()} •{" "}
                      <span className="text-success fw-semibold">
                        Verified Purchase
                      </span>
                    </small>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-warning small mb-2">{randomStars()}</p>
                <p className="text-muted" style={{ fontSize: "0.95rem" }}>
                  “{reviewSamples[index % reviewSamples.length]}”
                </p>

                <div className="text-muted small mt-3">
                  <i className="bi bi-geo-alt"></i>{" "}
                  {user.address?.city}, {user.address?.state}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
