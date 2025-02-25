
import React from "react";
import { useNavigate } from "react-router-dom";
import pathivara1 from "../../assets/images/pathivara1.webp";
import pathivara2 from "../../assets/images/pathivara2.jpeg";
import pathivara3 from "../../assets/images/pathivara3.jpg";
import pathivara4 from "../../assets/images/pathivara4.jpg";
import pathivara5 from "../../assets/images/pathivara5.jpg";
import pathivara6 from "../../assets/images/pathivara6.jpg";
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
  const images = [pathivara1, pathivara2, pathivara3, pathivara4, pathivara5, pathivara6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Pathivara ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Pathivara Temple Tour Package Inclusions:</h3>
      <ul>
        <li>3 Nights, 4 Days Stay in Local Lodges</li>
        <li>Daily Breakfast, Lunch & Dinner</li>
        <li>Transportation from Kathmandu or Birtamod to Taplejung</li>
        <li>Guided Trek to Pathivara Temple</li>
        <li>Scenic Views of Kanchenjunga and Eastern Himalayas</li>
        <li>Exploration of Rhododendron Forests and Wildlife</li>
        <li>Visit to Suketar and Local Cultural Villages</li>
        <li>Temple Offerings and Religious Rituals</li>
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
        Pathivara Temple is one of Nepal's most sacred Hindu shrines, dedicated to Goddess Pathivara. It attracts thousands of devotees who seek blessings for prosperity and well-being.
      </p>
      <p>
        The trek to Pathivara offers breathtaking views of the Kanchenjunga mountain range, lush forests, and serene landscapes. The route also passes through traditional Limbu villages, offering a glimpse into the local culture.
      </p>
      <p>
        Perfect for pilgrims and nature enthusiasts alike, this journey combines religious significance, scenic beauty, and cultural exploration.
      </p>
    </div>
  );
};

// Main Pathivara Temple Tour Package Component
const PathivaraTemplePackage = () => {
  return (
    <div>
    <Navbar />
    <div className="container">

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Pathivara Temple Tour Package</h1>
        <BookButton />
      </div>

      {/* Explore Pathivara */}
      <div className="description">
        <h2>Experience the Spiritual Journey to Pathivara Temple</h2>
        <p>
          The Pathivara Temple Tour Package takes you to one of Nepal's most revered pilgrimage sites, the Pathivara Devi Temple. Located at an altitude of 3,794 meters in the Taplejung district, this sacred temple is believed to fulfill the wishes of its devotees.
        </p>
        <p>
          Along with its religious importance, the trek offers spectacular views of the Kanchenjunga range, and beautiful landscapes filled with rhododendron forests.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Place */}
      <AboutThePlaces />
    </div>
    <Footer />
    </div>
  );
};

export default PathivaraTemplePackage;
