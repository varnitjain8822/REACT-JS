import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Community from './components/Community.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Market from './components/Market.jsx';
import Categories from './components/Categories.jsx';
import Search from './components/Search.jsx';
import Review from './components/Review.jsx';
import Slider from './components/Slider.jsx';
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Slider></Slider>
      <Search />
      <About />
      <Features />
      <Review></Review>
      <Contact />
      <Community />
      <Footer />
    </div>
  );
}
