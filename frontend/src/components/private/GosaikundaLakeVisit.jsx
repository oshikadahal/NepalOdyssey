
import React from "react";
import { useNavigate } from "react-router-dom";
import gosaikunda1 from "../../assets/images/gosaikunda1.jpg";
import gosaikunda2 from "../../assets/images/gosaikunda2.jpg";
import gosaikunda3 from "../../assets/images/gosaikunda3.jpg";
import gosaikunda4 from "../../assets/images/gosaikunda4.jpg";
import gosaikunda5 from "../../assets/images/gosaikunda5.jpg";
import gosaikunda6 from "../../assets/images/gosaikunda6.webp";
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
  const images = [gosaikunda1, gosaikunda2, gosaikunda3, gosaikunda4, gosaikunda5, gosaikunda6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gosaikunda Lake ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Gosaikunda Lake Trek Package Inclusions:</h3>
      <ul>
        <li>6 Days, 5 Nights Trek with Scenic Views</li>
        <li>Accommodation in Tea Houses & Lodges</li>
        <li>All Meals (Breakfast, Lunch, Dinner)</li>
        <li>Experienced Guide & Porters</li>
        <li>Transportation from Kathmandu to Trek Starting Point & Return</li>
        <li>Hiking through Lush Forests & Traditional Villages</li>
        <li>Panoramic Himalayan Views (Langtang, Ganesh Himal, Manaslu)</li>
        <li>Visit to the Holy Gosaikunda Lake</li>
        <li>Opportunity to Witness Local Culture & Festivals</li>
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
        <strong>Gosaikunda Lake:</strong> A sacred glacial lake surrounded by snowy peaks, Gosaikunda is a major pilgrimage site, especially 
        during the Janai Purnima festival. The lake is said to have been created by Lord Shiva when he struck his trident into the mountain 
        to obtain water.
      </p>
      <p>
        <strong>Langtang National Park:</strong> This trekking route takes you through the lush greenery of Langtang National Park, home 
        to diverse wildlife such as red pandas, Himalayan black bears, and langurs.
      </p>
      <p>
        <strong>Scenic Mountain Views:</strong> The trek offers stunning panoramic views of peaks such as Langtang Lirung, Ganesh Himal, and 
        Manaslu, making it a paradise for photography and nature lovers.
      </p>
      <p>
        The journey to Gosaikunda involves steep ascents and rugged terrain, but the breathtaking landscapes and spiritual energy of the lake 
        make it worth every step.
      </p>
    </div>
  );
};

// Main Gosaikunda Lake Visit Component
const GosaikundaLakeVisit = () => {
  return (
    <div>
    <Navbar />
    <div className="container">

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Gosaikunda Lake Trekking Package</h1>
        <BookButton />
      </div>

      {/* Explore Gosaikunda Lake */}
      <div className="description">
        <h2>Discover the Spiritual Beauty of Gosaikunda Lake</h2>
        <p>
          The Gosaikunda Lake Trek is a breathtaking journey to one of Nepal's most sacred alpine lakes, nestled in the Langtang 
          National Park. At an altitude of 4,380 meters (14,370 feet), this pristine glacial lake is surrounded by the majestic Himalayan 
          peaks. Revered by Hindus and Buddhists alike, it is believed to be the abode of Lord Shiva. The trek to Gosaikunda is perfect 
          for spiritual seekers, nature lovers, and adventure enthusiasts alike.
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

export default GosaikundaLakeVisit;
