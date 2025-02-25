
import React from "react";
import { useNavigate } from "react-router-dom";
import rara1 from "../../assets/images/rara1.jpg";
import rara2 from "../../assets/images/rara2.jpg";
import rara3 from "../../assets/images/rara3.jpg";
import rara4 from "../../assets/images/rara4.jpg";
import rara5 from "../../assets/images/rara5.jpg";
import rara6 from "../../assets/images/rara6.jpg";
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
  const images = [rara1, rara2, rara3, rara4, rara5, rara6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Rara Lake ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Rara Lake Tour Package Inclusions:</h3>
      <ul>
        <li>4 Nights, 5 Days Stay in Comfortable Lodges or Camping</li>
        <li>Daily Breakfast, Lunch & Dinner with Local Cuisine</li>
        <li>Scenic Flight from Kathmandu/Nepalgunj to Talcha (Optional Jeep Drive Available)</li>
        <li>Guided Trek to Rara Lake with Stunning Mountain Views</li>
        <li>Boating Experience on the Crystal-Clear Rara Lake</li>
        <li>Wildlife Spotting (Red Panda, Musk Deer, Himalayan Black Bear)</li>
        <li>Sunrise & Sunset Viewpoints for Spectacular Scenery</li>
        <li>Photography & Nature Walks in Rara National Park</li>
        <li>Transportation Services with Pick-up & Drop-off</li>
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
        The main highlight of the trip, Rara Lake is Nepal's largest freshwater lake, surrounded by Himalayan peaks and lush forests. 
        It's perfect for boating, photography, and peaceful reflection in nature.
      </p>
      <p>
        <strong>Rara National Park:</strong> Home to diverse flora and fauna, this park offers a chance to spot rare wildlife like red 
        pandas, Himalayan black bears, and musk deer. The park's forested landscape provides excellent trekking and nature walk opportunities.
      </p>
      <p>
        <strong>Boating Experience:</strong> Enjoy a serene boating trip on the crystal-clear waters of Rara Lake, where you can admire the 
        reflections of the mountains and the changing colors of the sky.
      </p>
      <p>
        <strong>Sunrise & Sunset Viewpoints:</strong> The trek to the surrounding hills offers breathtaking views of sunrise and sunset over the 
        lake, with the golden hues reflecting on the water, creating an unforgettable moment.
      </p>
      <p>
        <strong>Trekking & Nature Walks:</strong> The trek to Rara Lake is scenic and peaceful, with pine forests, traditional villages, 
        and mountain landscapes along the way, making it an adventure worth experiencing.
      </p>
    </div>
  );
};

// Main Rara Lake Trek Component
const RaraLakeTrek = () => {
  return (
    <div>
    <Navbar />
    <div className="container">

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Rara Lake Tour Package</h1>
        <BookButton />
      </div>

      {/* Explore Rara Lake */}
      <div className="description">
        <h2>Discover the Tranquility of Rara Lake</h2>
        <p>
          The Rara Lake Tour Package offers an unforgettable journey to Nepal's largest and most breathtaking lake, surrounded by the pristine 
          Rara National Park. Located in the remote Mugu district, this package provides a chance to explore crystal-clear waters, lush forests, 
          snow-capped mountains, and diverse wildlife. Whether you're a nature lover, trekker, or photographer, Rara Lake promises a peaceful retreat 
          far from the bustling cities.
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

export default RaraLakeTrek;
