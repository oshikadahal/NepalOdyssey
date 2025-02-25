
import React from "react";
import { useNavigate } from "react-router-dom";
import chitwan1 from "../../assets/images/chitwan1.jpg";
import chitwan2 from "../../assets/images/chitwan2.jpg";
import chitwan3 from "../../assets/images/chitwan3.jpg";
import chitwan4 from "../../assets/images/chitwan4.jpg";
import chitwan5 from "../../assets/images/chitwan5.jpg";
import chitwan6 from "../../assets/images/chitwan6.webp";
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
  const images = [chitwan1, chitwan2, chitwan3, chitwan4, chitwan5, chitwan6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Chitwan National Park Visit ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    
    
    <div className="package-inclusions">

      <h3>Chitwan National Park Visit Inclusions:</h3>
      <ul>
        <li>2 Nights, 3 Days Stay in a Luxury Resort or Eco Lodge</li>
        <li>Daily Breakfast, Lunch & Dinner with Traditional Cuisine</li>
        <li>Guided Jungle Safari (Jeep or Elephant Ride)</li>
        <li>Wildlife Spotting (One-Horned Rhino, Bengal Tiger, Gharials, Deer, Birds)</li>
        <li>Canoe Ride Along the Rapti River</li>
        <li>Visit to Elephant Breeding Center</li>
        <li>Tharu Cultural Dance Performance</li>
        <li>Guided Nature Walk & Bird Watching</li>
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
        <strong>Jungle Safari</strong> is one of the main highlights of the trip. The safari offers a chance to explore the 
        vast wilderness of Chitwan National Park. Spot rare wildlife, including tigers, rhinos, elephants, and sloth bears, 
        while riding through the jungle on a 4x4 jeep or elephant.
      </p>
      <p>
        <strong>Rapti River Canoe Ride</strong> is a peaceful canoe ride down the Rapti River, home to crocodiles, gharials, 
        and a wide variety of birds. It's a perfect opportunity to witness the wildlife up close in their natural habitat.
      </p>
      <p>
        <strong>Elephant Breeding Center</strong> A visit to Nepal's only elephant breeding center gives you a chance to learn about 
        the conservation of these gentle giants and see baby elephants interacting with their mothers.
      </p>
      <p>
        <strong>Tharu Cultural Program</strong> Experience the vibrant culture of the indigenous Tharu community through traditional 
        dance and music performances. This cultural show gives insights into their unique customs and lifestyle.
      </p>
      <p>
        <strong>Bird Watching</strong> Chitwan National Park is a paradise for bird watchers, with over 500 species of birds. A guided 
        nature walk allows visitors to explore the diverse flora and fauna of the park.
      </p>
    </div>
  );
};

// Main Chitwan National Park Visit Component
const ChitwanNationalParkVisit = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">
      

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1  className="head">Chitwan National Park Visit</h1>        
        <BookButton />
      </div>

      {/* Explore Chitwan National Park */}
      <div className="description">
        <h2>Experience the Wildlife of Chitwan National Park</h2>
        <p>
          The Chitwan National Park Tour Package offers an exciting journey into Nepal’s first national park, a UNESCO World Heritage site.
          Known for its rich biodiversity, this package provides a thrilling jungle safari experience, encounters with endangered wildlife, 
          and immersive Tharu cultural programs. Explore the deep forests, rivers, and lush landscapes while spotting Bengal tigers, 
          one-horned rhinos, elephants, crocodiles, and a variety of bird species. Ideal for nature lovers and adventure seekers, 
          this trip promises an unforgettable experience in the heart of the wild.
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

export default ChitwanNationalParkVisit;
