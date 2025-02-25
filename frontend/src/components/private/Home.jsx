import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pokhara from '../../assets/images/pokhara.jpg';
import ChitwanNationalPark from '../../assets/images/chitwannationalpark.jpg';
import Gosaikunda from '../../assets/images/gosaikunda1.jpg';
import GhaleGaun from '../../assets/images/ghale gaun.jpg';
import Aarnapurna from '../../assets/images/aarnapurna.jpg';
import Lumbini from '../../assets/images/lumbinidestination7.jpg';
import RaraLake from '../../assets/images/raralake.jpg';
import NavBar from '../../assets/images/navbar.jpeg';
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../../styles/Home.css';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (location.state?.scrollToContact) {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      // Clear the state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit contact form');
    }
  };

  return (
    <div className="Home-body">
      <Navbar />
      <section id="home" className="hero">
        <img src={NavBar} alt="navbar" className="hero-image" />
        <div className="hero-content">
          <h1 className="home-head">Discover Nepal's Beauty</h1>
          <p>Experience the majesty of the Himalayas and rich cultural heritage</p>
        </div>
      </section>

      <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card" >
            <img src={Pokhara} alt="Pokhara" />
            <h3>Pokhara: The jewel of the Himalayas</h3>
            <p>Pokhara: Serenity, adventure, and breathtaking beauty</p>
          </div>
          <div className="destination-card">
            <img src={ChitwanNationalPark} alt="chitwan" />
            <h3>Chitwan National Park</h3>
            <p>Chitwan: Where wildlife meets wilderness</p>
          </div>
          <div className="destination-card">
            <img src={Gosaikunda} alt="gosaikunda" />
            <h3>Gosainkunda Mahadev</h3>
            <p>Sacred, tranquil, and breathtaking place</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Nepal Odyssey?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-mountain"></i>
            <h3>Expert Guides</h3>
            <p>Professional and experienced local guides</p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Safe Travel</h3>
            <p>Your safety is our top priority</p>
          </div>
          <div className="feature">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Best Value</h3>
            <p>Competitive prices with no hidden costs</p>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="card">
          <img src={GhaleGaun} alt="ghale gaun" />
          <h2>Ghale Gaun</h2>
          <p>Experience the majestic Himalayas and breathtaking views.</p>
        </div>
        <div className="card">
          <img src={Aarnapurna} alt="Annapurna Circuit" />
          <h2>Annapurna Circuit</h2>
          <p>Explore the serene trails of the Annapurna range.</p>
        </div>
        <div className="card">
          <img src={Pokhara} alt="Pokhara City" />
          <h2>Pokhara City</h2>
          <p>Discover the tranquil lakes and vibrant culture.</p>
        </div>
        <div className="card">
          <img src={Lumbini} alt="Lumbini" />
          <h2>Lumbini</h2>
          <p>The birthplace of Lord Buddha, rich in history and spirituality.</p>
        </div>
        <div className="card">
          <img src={RaraLake} alt="Rara lake" />
          <h2>Rara Lake</h2>
          <p>Real beauty of rara.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal</p>
            <p><i className="fas fa-phone"></i> +977 1234567890</p>
            <p><i className="fas fa-envelope"></i> info@nepalodyssey.com</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;