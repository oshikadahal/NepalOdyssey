
import React from "react";
import { useNavigate } from "react-router-dom";
import bandipur1 from "../../assets/images/bandipur.jpg";
import bandipur2 from "../../assets/images/Bandipur2.webp";
import bandipur3 from "../../assets/images/bandipur3.jpg";
import bandipur4 from "../../assets/images/bandipur4.webp";
import bandipur5 from "../../assets/images/bandipur5.jpg";
import bandipur6 from "../../assets/images/bandipur6.avif";

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
  const images = [bandipur1, bandipur2, bandipur3, bandipur4, bandipur5, bandipur6];

  return (
    <div className="image-gallery">
      
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Bandipur ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Bandipur Tour Package Inclusions:</h3>
      <ul>
        <li>2 Nights, 3 Days Stay in a Boutique Newari Guesthouse</li>
        <li>Daily Breakfast with Traditional Newari Delicacies</li>
        <li>Guided Walk Through Bandipur's Historic Streets</li>
        <li>Visit to Siddha Cave, Nepal's Largest Cave</li>
        <li>Sunset & Sunrise Viewpoints Over the Himalayas</li>
        <li>Short Hiking Trails to Ramkot Village and Tundikhel</li>
        <li>Exploration of the Silk Farming Industry</li>
        <li>Transportation from Kathmandu or Pokhara to Bandipur</li>
      </ul>
    </div>
  );
};

// About the Places Component
const AboutThePlaces = () => {
  return (
    <div className="about-places">
      <h2>About the Place</h2>
      <p>
        Bandipur is a historic hilltop town that retains its traditional Newari charm while offering stunning mountain views. The town is known for its pedestrian-friendly streets, terraced farms, and cultural heritage.
      </p>
      <p>
        The nearby Siddha Cave, one of the largest in Nepal, is a must-visit for adventure seekers. Bandipur also serves as a gateway to scenic hiking trails, leading to picturesque villages and viewpoints.
      </p>
      <p>
        A trip to Bandipur offers a peaceful retreat, ideal for those looking to escape the busy city life and immerse themselves in Nepal’s rich history and natural beauty.
      </p>
    </div>
  );
};

// Main Bandipur Tour Package Component
const BandipurPackage = () => {
  return (
    <div>
    
    
    <div className="container">
      

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Bandipur Tour Package</h1>
        <BookButton />
      </div>

      {/* Explore Bandipur */}
      <div className="description">
        <h2>Discover the Timeless Charm of Bandipur</h2>
        <p>
          The Bandipur Tour Package takes you to one of Nepal’s most charming hilltop towns, known for its well-preserved cultural heritage and stunning Himalayan views. Located between Kathmandu and Pokhara, Bandipur is a hidden gem with cobbled streets, traditional Newari architecture, and breathtaking sunset and sunrise viewpoints.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Place */}
      <AboutThePlaces />
      </div>

      
    </div>
  );
};

export default BandipurPackage;
