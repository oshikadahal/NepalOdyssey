
import React from "react";
import { useNavigate } from "react-router-dom";
import gorkha1 from '../../assets/images/Gorkha.jpg';
import gorkha2 from '../../assets/images/Gorkha2.jpeg';
import gorkha3 from '../../assets/images/Gorkha3.jpg';
import gorkha4 from '../../assets/images/Gorkha4.jpg';
import gorkha5 from '../../assets/images/Gorkha5.webp';
import gorkha6 from '../../assets/images/Gorkha6.jpg';
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
  const images = [gorkha1, gorkha2, gorkha3, gorkha4, gorkha5, gorkha6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gorkha ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Gorkha Tour Package Inclusions:</h3>
      <ul>
        <li>4 Nights, 5 Days Stay in a Comfortable Hotel or Home Stay</li>
        <li>Daily Breakfast & Dinner with Local Specialties</li>
        <li>Guided Sightseeing Tour of Gorkha’s Historical Sites</li>
        <li>Visit to Gorkha Durbar (Palace) & Shahid Smarak</li>
        <li>Sunrise and Sunset Views from Scenic Locations</li>
        <li>Excursion to Manakamana Temple via Cable Car</li>
        <li>Visit to Buddha Stupa & Siddha Cave</li>
        <li>Traditional Cultural Performances (Dances & Songs)</li>
        <li>Comfortable Transportation & Pick-up Services</li>
      </ul>
    </div>
  );
};

// Main Gorkha Tour Component
const GorkhaTour = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Gorkha Tour Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Explore the Beauty of Gorkha</h2>
        <p>
          The Gorkha Tour Package offers an enriching journey through Nepal's rich cultural heritage,
          natural beauty, and historical landmarks. The tour typically includes a visit to Gorkha Durbar,
          the historic palace where King Prithvi Narayan Shah was born, offering a glimpse into Nepal's 
          royal history and stunning views of the surrounding mountains.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Places */}
      <div className="about-places">
        <h2>About the Place</h2>
        <p>
          <strong>Gorkha Durbar:</strong> The Gorkha Durbar is a historic palace and the birthplace of King Prithvi Narayan Shah, 
          the founder of the Shah Dynasty and unifier of Nepal. Perched on a hilltop, it offers panoramic views of the surrounding valleys 
          and the majestic Himalayas.
        </p>
        <p>
          <strong>Manakamana Temple:</strong> Located atop a hill in Gorkha, the Manakamana Temple is a sacred pilgrimage site dedicated to 
          the Hindu goddess Bhagwati, believed to fulfill wishes. Visitors can take a cable car ride from Kurintar to the temple, enjoying 
          spectacular views of the Trishuli River and surrounding mountains.
        </p>
        <p>
          <strong>Buddha Stupa:</strong> The Buddha Stupa is a peaceful spot for meditation and reflection. Surrounded by beautiful landscapes, 
          it offers a serene environment and a vantage point for breathtaking valley views.
        </p>
        <p>
          <strong>Shahid Smarak:</strong> The Shahid Smarak (Martyrs' Memorial) is a tribute to Nepal's heroes who fought for independence. 
          Located near the Gorkha Durbar, it provides a historical perspective and a place of respect.
        </p>
        <p>
          <strong>Siddha Cave:</strong> Siddha Cave, one of Nepal’s largest caves, is a fascinating natural wonder with impressive stalactites 
          and stalagmites formations. It's a must-visit for adventure lovers and explorers.
        </p>
      </div>
    </div> 
    <Footer />
    </div>
  );
};

export default GorkhaTour;
