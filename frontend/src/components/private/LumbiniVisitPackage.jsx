
import React from "react";
import { useNavigate } from "react-router-dom";
import lumbini1 from "../../assets/images/lumbini1.avif";
import lumbini2 from "../../assets/images/lumbini4.jpg";
import lumbini3 from "../../assets/images/lumbini3.jpg";
import lumbini4 from "../../assets/images/lumbini5.jpg";
import lumbini5 from "../../assets/images/lumbini5.jpg";
import lumbini6 from "../../assets/images/lumbini6.webp";
import Navbar from "../../components/private/Navbar";
import Footer from "..//..//components/private/Footer";
import '../../styles/Allpackages.css';
// Back Button Component
const BackButton = () => {
  const navigate = useNavigate();
  return <button className="back-button" onClick={() => navigate(-1)}>⬅ Back</button>;
};

// Book Button Component
const BookButton = () => {
  return <button className="book-button" onClick={() => window.location.href = "/booking"}>Book Now</button>;
};

// Image Gallery Component
const ImageGallery = () => {
  const images = [lumbini1, lumbini2, lumbini3, lumbini4, lumbini5, lumbini6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Lumbini Site ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Lumbini Visit Package Inclusions:</h3>
      <ul>
        <li>3 Nights, 4 Days Stay in Comfortable Hotels or Homestays</li>
        <li>Daily Breakfast & Dinner with Local Delicacies</li>
        <li>Guided Tour of Major Sites (Maya Devi Temple, Lumbini Garden, Ashoka Pillar)</li>
        <li>Visit to Various Buddhist Monasteries (Chinese, Vietnamese, and Others)</li>
        <li>Peaceful Meditation Sessions at Lumbini International Meditation Center</li>
        <li>Transportation Services with Pick-up and Drop-off</li>
        <li>Panoramic View from World Peace Pagoda</li>
        <li>Professional Guides for Historical and Cultural Insights</li>
        <li>Traditional Cultural Performances (Optional)</li>
      </ul>
    </div>
  );
};

// About the Places Section
const AboutThePlaces = () => {
  return (
    <div className="about-places">
      <h2>About Lumbini</h2>
      <p>
        Lumbini is a UNESCO World Heritage Site and the birthplace of Lord Buddha, located in the Rupandehi District of Nepal. It is one of the most sacred pilgrimage sites for Buddhists around the world. 
        The Maya Devi Temple, which marks the spot of Buddha's birth, is at the heart of Lumbini. The site is also home to the Ashoka Pillar, built by Emperor Ashoka in 249 BC, and numerous monasteries built by Buddhist communities from various countries.
      </p>
      <p>
        The Lumbini Garden is a peaceful space where visitors can meditate and reflect on the life and teachings of Buddha. The World Peace Pagoda offers breathtaking views of the surrounding area and is a symbol of global peace.
      </p>
      <p>
        Lumbini is not just a religious center, but also a place of great historical significance, offering insight into Buddhist philosophy and a tranquil atmosphere for self-reflection.
      </p>
    </div>
  );
};

// Main Lumbini Visit Package Component
const LumbiniVisitPackage = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Lumbini Visit Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Discover the Charm of the Birthplace of Gautam Buddha (Lumbini)</h2>
        <p>
          The Lumbini Visit Package offers an enriching and spiritually fulfilling journey to one of the most
          sacred places in the world. This package typically includes a guided tour of Lumbini's key historical 
          and spiritual sites, such as the Maya Devi Temple, the Lumbini Garden, the Ashoka Pillar, and the World 
          Peace Pagoda.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Places */}
      <AboutThePlaces />
    </div>
    <Footer />
    </div>
  );
};

export default LumbiniVisitPackage;
