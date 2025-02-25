

import React from "react";
import { useNavigate } from "react-router-dom";
import illam1 from '../../assets/images/illam1.jpeg';
import illam2 from '../../assets/images/Illam2.jpg';
import illam3 from '../../assets/images/illam3.jpg';
import illam4 from '../../assets/images/illam4.jpg';
import illam5 from '../../assets/images/illam5.jpeg';
import illam6 from '../../assets/images/illam6.webp';
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
  const images = [illam1, illam2, illam3, illam4, illam5, illam6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Illam Site ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    <div className="package-inclusions">
      <h3>Illam Visit Package Inclusions:</h3>
      <ul>
        <li>4 Nights, 5 Days Stay in Comfortable Hotels or Homestays</li>
        <li>Daily Breakfast & Dinner with Local Delicacies</li>
        <li>Guided Tour to Key Locations (Kanyam Tea Garden, Mai Pokhari, Antu Danda)</li>
        <li>Visit to Traditional Villages to Experience Local Culture</li>
        <li>Tea Tasting Experience with Local Tea Producers</li>
        <li>Transportation Services with Pick-up and Drop-off</li>
        <li>Nature Walks and Scenic Viewpoints</li>
        <li>Professional Guides for Historical and Cultural Insights</li>
      </ul>
    </div>
  );
};

// Main Illam Visit Package Component
const IllamVisitPackage = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">
      
      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Illam Visit Package</h1>
        <BookButton />
      </div>

      {/* Tour Description */}
      <div className="description">
        <h2>Experience the Serene Beauty of Illam</h2>
        <p>
          The Illam Visit Package takes you on a journey to the beautiful hill station of Illam, 
          known for its scenic tea gardens, tranquil landscapes, and vibrant local culture. The
          package offers a guided tour to some of Illam's most famous spots such as Kanyam Tea Garden, 
          Antu Danda, and Mai Pokhari. Visitors can enjoy breathtaking views, explore traditional villages, 
          and immerse themselves in the serene beauty of this peaceful region.
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
          <strong>Kanyam Tea Garden:</strong> One of Illam’s most popular destinations, offering lush green landscapes 
          and panoramic views of rolling hills. The tea garden is known for producing high-quality tea, and
          visitors can learn about the tea production process while enjoying the refreshing aroma of fresh leaves. 
          The serene atmosphere makes it an ideal spot for a peaceful stroll or a relaxing break amidst nature.
        </p>
        <p>
          <strong>Antu Danda:</strong> A hilltop in Illam that provides spectacular views of the surrounding landscape, including 
          the eastern Himalayan range. Visitors can enjoy breathtaking sunrise and sunset views, making it a must-visit
          destination for nature lovers and photographers. The serene environment and cool climate make Antu Danda a perfect
          place to relax and enjoy the natural beauty of Illam.
        </p>
        <p>
          <strong>Mai Pokhari:</strong> A sacred lake in Illam surrounded by lush forests and beautiful hills. It is a tranquil spot where 
          visitors can enjoy a peaceful boat ride or walk around the lake while soaking in the serene surroundings. The lake 
          holds spiritual significance and attracts many local pilgrims, adding to the peaceful ambiance of the area.
        </p>
      </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default IllamVisitPackage;
