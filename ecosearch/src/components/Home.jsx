import React from "react";
import "./Homee.css";

export default function Home() {
  return (
    <div className="home-background d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="display-2 fw-bold text-white fade-in">
          Welcome to EcoSearch
        </h1>
        <p className="lead fade-text text-white">
          Your one-stop platform for sustainable and eco-friendly living
        </p>
      </div>
    </div>
  );
}
