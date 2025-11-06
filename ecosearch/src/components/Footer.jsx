import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-start">
          {/* Product Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success fw-bold mb-3">🛍️ Product Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Electronics</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Groceries</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Fashion</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Home & Kitchen</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Beauty & Health</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success fw-bold mb-3">🏢 Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light text-decoration-none d-block mb-2">About Us</a></li>
              <li><a href="#careers" className="text-light text-decoration-none d-block mb-2">Careers</a></li>
              <li><a href="#blog" className="text-light text-decoration-none d-block mb-2">Blog</a></li>
              <li><a href="#partners" className="text-light text-decoration-none d-block mb-2">Our Partners</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4">
            <h5 className="text-success fw-bold mb-3">💬 Customer Support</h5>
            <ul className="list-unstyled">
              <li><a href="#contact" className="text-light text-decoration-none d-block mb-2">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Return Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Shipping Info</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Order Tracking</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4 text-center text-md-start">
            <h5 className="text-success fw-bold mb-3">🌍 Follow Us</h5>
            <div className="d-flex justify-content-md-start justify-content-center gap-3 mb-3">
              <a href="#" className="text-light fs-4"><FaFacebook /></a>
              <a href="#" className="text-light fs-4"><FaInstagram /></a>
              <a href="#" className="text-light fs-4"><FaTwitter /></a>
              <a href="#" className="text-light fs-4"><FaLinkedin /></a>
            </div>
            <p className="text-secondary small">
              Stay updated with the latest offers and trends.
            </p>
          </div>
        </div>

        <hr className="border-success opacity-50" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="mb-1">© 2025 <span className="fw-bold text-success">EcoSearch</span> | All Rights Reserved</p>
          <p className="small text-secondary">
            Built with ❤️ by the EcoSearch Team
          </p>
        </div>
      </div>
    </footer>
  );
}
