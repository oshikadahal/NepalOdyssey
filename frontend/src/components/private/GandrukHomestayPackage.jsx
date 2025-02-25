
import React from "react";
import { useNavigate } from "react-router-dom";
import ghandruk1 from "../../assets/images/gandruk1.jpg";
import ghandruk2 from "../../assets/images/gandruk2.jpg";
import ghandruk3 from "../../assets/images/gandruk3.jpg";
import ghandruk4 from "../../assets/images/gandruk4.jpg";
import ghandruk5 from "../../assets/images/gandruk5.jpg";
import ghandruk6 from "../../assets/images/gandruk6.jpg";
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
  const images = [ghandruk1, ghandruk2, ghandruk3, ghandruk4, ghandruk5, ghandruk6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Ghandruk Homestay ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    
    
    <div className="package-inclusions">
      <h3>Ghandruk Homestay Package Inclusions:</h3>
      <ul>
        <li>3 Days, 2 Nights Stay in a Traditional Gurung Homestay</li>
        <li>Homemade Organic Meals (Breakfast, Lunch, and Dinner)</li>
        <li>Guided Village Tour and Interaction with Local Families</li>
        <li>Opportunity to Wear Traditional Gurung Dress for Photos</li>
        <li>Hiking Trails with Panoramic Views of Annapurna and Machapuchare</li>
        <li>Cultural Dance Performance by Local Women’s Group</li>
        <li>Visit to the Gurung Museum and Local Handicraft Shops</li>
        <li>Transport from Pokhara to Ghandruk and Return</li>
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
        Ghandruk is a beautiful Gurung village located in the Annapurna region, offering spectacular views of the Annapurna and Machapuchare mountains. It is well-known for its traditional stone houses, terraced fields, and warm hospitality.
      </p>
      <p>
        The village is a gateway to popular trekking routes such as the Annapurna Base Camp and Poon Hill treks, making it an ideal destination for both adventure seekers and cultural enthusiasts.
      </p>
      <p>
        A homestay in Ghandruk provides an authentic experience where visitors can learn about the Gurung way of life, enjoy homemade organic meals, and participate in local traditions and festivities.
      </p>
    </div>
  );
};

// Main Ghandruk Homestay Package Component
const GhandrukHomestayPackage = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Ghandruk Homestay Package</h1>
        <BookButton />
      </div>

      {/* Explore Ghandruk */}
      <div className="description">
        <h2>Experience the Warmth of Ghandruk Homestay</h2>
        <p>
          The Ghandruk Homestay package offers a unique opportunity to immerse yourself in the traditional Gurung culture while enjoying the stunning beauty of the Annapurna region. Nestled in the foothills of the Himalayas, Ghandruk is a picturesque village known for its warm hospitality, breathtaking mountain views, and rich cultural heritage.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Place */}
      <AboutThePlaces />
    </div>
    <Footer/>
    </div>
  );
};

export default GhandrukHomestayPackage;
