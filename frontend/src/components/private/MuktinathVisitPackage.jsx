
import React from "react";
import { useNavigate } from "react-router-dom";
import muktinath1 from "../../assets/images/muktinath1.jpeg";
import muktinath2 from "../../assets/images/muktinath2.webp";
import muktinath3 from "../../assets/images/muktinath3.webp";
import muktinath4 from "../../assets/images/muktinath4.jpg";
import muktinath5 from "../../assets/images/muktinath5.jpg";
import muktinath6 from "../../assets/images/muktinath6.jpg";
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
  const images = [muktinath1, muktinath2, muktinath3, muktinath4, muktinath5, muktinath6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Muktinath Site ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Muktinath Visit Package Inclusions:</h3>
      <ul>
        <li>4 Nights, 5 Days Stay in Comfortable Hotels or Lodges</li>
        <li>Daily Breakfast & Dinner with Traditional Cuisine</li>
        <li>Guided Tour to Muktinath Temple & Jwala Mai Temple</li>
        <li>Visit to Kagbeni, a Beautiful Himalayan Village</li>
        <li>Scenic Drive or Flight to Jomsom</li>
        <li>Hiking Experience to Explore the Annapurna Region</li>
        <li>Transportation Services with Pick-up and Drop-off</li>
        <li>Experienced Guides for Historical and Cultural Insights</li>
      </ul>
    </div>
  );
};

// About the Places Section
const AboutThePlaces = () => {
  return (
    <div className="about-places">
      <h2>About Muktinath</h2>
      <p>
        Muktinath is a sacred site for both Hindus and Buddhists, located in the Mustang district of Nepal. The Muktinath Temple is revered by Hindus as the place where Lord Vishnu is worshipped, and Buddhists see it as a place of liberation and peace. The site offers spiritual solace and is believed to grant salvation (moksha) to all who visit.
      </p>
      <p>
        The Jwala Mai Temple is within the Muktinath complex, housing a remarkable natural flame that burns over water. This eternal flame is a rare natural phenomenon that represents the unity of fire and water, a powerful symbol of spiritual energy.
      </p>
      <p>
        Kagbeni is a picturesque village that sits at the gateway to Upper Mustang, offering a beautiful blend of Tibetan culture, monasteries, and traditional lifestyles. The village also offers stunning views of the Kali Gandaki River and the surrounding Himalayan peaks.
      </p>
      <p>
        Jomsom is a scenic town famous for its dry, desert-like landscape and strong winds, creating a unique and surreal atmosphere. It’s a great starting point for treks in the Annapurna region and offers spectacular views of the Annapurna and Dhaulagiri mountain ranges.
      </p>
    </div>
  );
};

// Main Muktinath Visit Package Component
const MuktinathVisitPackage = () => {
  return (
    <div>
    <Navbar />
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Muktinath Visit Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Embark on a Sacred Journey to Muktinath</h2>
        <p>
          The Muktinath Visit Package offers a spiritually fulfilling journey to one of the holiest pilgrimage sites for Hindus and Buddhists. Nestled in the Mustang district, Muktinath Temple is believed to provide salvation (moksha) to devotees. This package includes a guided tour to Muktinath Temple, the Jwala Mai Temple, and the stunning landscapes of Kagbeni and Jomsom. Experience the divine energy of this sacred site while enjoying breathtaking views of the Himalayas.
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

export default MuktinathVisitPackage;
