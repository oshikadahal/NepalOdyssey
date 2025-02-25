
import React from "react";
import { useNavigate } from "react-router-dom";
import swayambhu1 from "../../assets/images/swayambhu1.jpg";
import swayambhu2 from "../../assets/images/sawayambhu2.jpg";
import swayambhu3 from "../../assets/images/sawayambu3.jpg";
import swayambhu4 from "../../assets/images/sawayambhu5.png";
import swayambhu5 from "../../assets/images/Swayambhu-6.jpg";
import swayambhu6 from "../../assets/images/sawayambhu4.jpg";
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
  const images = [swayambhu1, swayambhu2, swayambhu3, swayambhu4, swayambhu5, swayambhu6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Swayambhunath Site ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Swayambhunath Visit Package Inclusions:</h3>
      <ul>
        <li>1 Night, 2 Days Stay in a Comfortable Hotel</li>
        <li>Daily Breakfast & Dinner with Traditional Cuisine</li>
        <li>Guided Tour of Swayambhunath Stupa & Nearby Temples</li>
        <li>Visit to Harati Devi Temple and Buddhist Monasteries</li>
        <li>Panoramic View of Kathmandu Valley from the Stupa</li>
        <li>Transportation Services with Pick-up and Drop-off</li>
        <li>Interactive Session with Buddhist Monks (Optional)</li>
        <li>Photography & Meditation Sessions</li>
      </ul>
    </div>
  );
};

// About the Places Component
const AboutThePlaces = () => {
  return (
    <div className="about-places">
      <h2>About Swayambhunath</h2>
      <p>
        Swayambhunath Stupa, also known as the Monkey Temple, is one of the oldest and most significant
        stupas in Nepal. The massive white dome with a golden spire is adorned with the iconic Buddha's
        all-seeing eyes, symbolizing wisdom and compassion. The stupa is surrounded by prayer wheels, smaller
        shrines, and temples that add to its spiritual ambiance.
      </p>
      <p>
        Harati Devi Temple, located within the Swayambhunath complex, is dedicated to the goddess of smallpox and
        children’s well-being. The temple is a unique blend of Hindu and Buddhist traditions, showcasing Nepal's rich
        cultural harmony.
      </p>
      <p>
        The Viewpoint at Swayambhunath offers a stunning panoramic view of Kathmandu Valley, making it an excellent spot
        for photography and meditation. Early morning and sunset visits provide the most mesmerizing experiences.
      </p>
      <p>
        The Buddhist Monasteries surrounding Swayambhunath offer insight into Tibetan Buddhist culture. Visitors can engage in
        meditation sessions, listen to monks chanting, and experience the peaceful atmosphere of these monasteries.
      </p>
    </div>
  );
};

// Main Swayambhu Temple Visit Package Component
const SwayambhuTempleVisit = () => {
  return (
    <div>
    <Navbar />
    <div className="container">

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Swayambhunath Visit Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Explore the Spiritual Essence of Swayambhunath</h2>
        <p>
          The Swayambhunath Visit Package takes you on a serene journey to one of Nepal’s most revered and
          ancient religious sites. Also known as the <strong>Monkey Temple</strong>, Swayambhunath is a UNESCO World
          Heritage site and offers breathtaking views of Kathmandu Valley. This package includes a guided
          tour to explore the sacred stupa, prayer wheels, and surrounding shrines while immersing yourself
          in the peaceful Buddhist atmosphere.
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

export default SwayambhuTempleVisit;
