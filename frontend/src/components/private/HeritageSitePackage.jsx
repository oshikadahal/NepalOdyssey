
import React from "react";
import { useNavigate } from "react-router-dom";
import bhaktapur from '../../assets/images/heritagebhaktapur1.jpg';
import patan from '../../assets/images/HeritagePatan2.jpg';
import kathmandu from '../../assets/images/HeritageKathmandu3.jpg';
import pashupatinath from '../../assets/images/HeritagePashupashupatinath.jpg';
import chaungunarayan from '../../assets/images/HeritageChaungunarayan4.webp';
import swayambhunath from '../../assets/images/heritagesyambhu.jpg';
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

const ImageGallery = () => {
  const images = [bhaktapur, patan, kathmandu, pashupatinath, chaungunarayan, swayambhunath];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Heritage Site ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Heritage Sites Tour Package Inclusions:</h3>
      <ul>
        <li>7 Nights, 8 Days Stay in Comfortable Hotels or Homestays</li>
        <li>Daily Breakfast & Dinner with Local Cuisine</li>
        <li>Guided Sightseeing Tours of UNESCO World Heritage Sites</li>
        <li>Visit to Kathmandu Durbar Square, Bhaktapur Durbar Square, and Patan Durbar Square</li>
        <li>Excursion to Swayambhunath (Monkey Temple) and Boudhanath Stupa</li>
        <li>Visit to Pashupatinath Temple and Lumbini (Birthplace of Lord Buddha)</li>
        <li>Transportation Services with Pick-up and Drop-off</li>
        <li>Local Cultural Performances and Traditional Experiences</li>
        <li>Professional Guides for In-depth Historical and Cultural Insights</li>
      </ul>
    </div>
  );
};

// Main Heritage Tour Component
const HeritageSitePackage = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Heritage Sites Tour Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Explore The Heritage Sites Of Nepal</h2>
        <p>
          The Heritage Sites Tour Package offers an immersive experience into Nepal’s rich 
          cultural and historical legacy, taking visitors to some of the most iconic UNESCO 
          World Heritage Sites in the country. The package typically includes guided tours of
          renowned landmarks such as Kathmandu Durbar Square, Swayambhunath Stupa, Bhaktapur 
          Durbar Square, and Pashupatinath Temple, allowing travelers to explore ancient palaces, 
          temples, and monasteries.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Places */}
      <div className="about-places">
        <h2>About the Places</h2>
        <p>
          <strong>Kathmandu Durbar Square:</strong> Located in the heart of Kathmandu, this historic square is surrounded by palaces,
          temples, and courtyards. It was once the royal palace complex and is an architectural marvel, with stunning 
          examples of traditional Newar art and craftsmanship.
        </p>
        <p>
          <strong>Swayambhunath (Monkey Temple):</strong> This ancient stupa, perched on a hilltop overlooking Kathmandu Valley, is one 
          of the most iconic landmarks in Nepal. It’s a significant Buddhist site, offering panoramic views of the valley 
          and is surrounded by numerous shrines, temples, and statues.
        </p>
        <p>
          <strong>Patan Durbar Square:</strong> A UNESCO World Heritage Site, Patan Durbar Square is a well-preserved medieval palace complex.
          Known for its intricate woodwork, beautiful temples, and the Patan Museum, it reflects the splendor of Newar
          architecture and culture.
        </p>
        <p>
          <strong>Pashupatinath Temple:</strong> Located in Kathmandu, Pashupatinath is one of the holiest Hindu temples in Nepal, dedicated to Lord Shiva.
          The temple complex, which includes numerous shrines, ghats along the Bagmati River, and a cremation area, is a major 
          pilgrimage site for Hindus.
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default HeritageSitePackage;
