
import React from "react";
import { useNavigate } from "react-router-dom";
import everest1 from "../../assets/images/everest1.jpg";
import everest2 from "../../assets/images/everest2.avif";
import everest3 from "../../assets/images/everest3.jpg";
import everest4 from "../../assets/images/everest4.avif";
import everest5 from "../../assets/images/everest5.jpg";
import everest6 from "../../assets/images/everest6.jpg";
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
  const images = [everest1, everest2, everest3, everest4, everest5, everest6];

  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Everest Base Camp Trek ${index + 1}`} />
      ))}
    </div>
  );
};

// Package Inclusions Component
const PackageInclusions = () => {
  return (
    
    
    <div className="package-inclusions">
      <h3>Everest Base Camp Trek Package Inclusions:</h3>
      <ul>
        <li>14 Days, 13 Nights Trekking Adventure</li>
        <li>Accommodation in Teahouses & Lodges</li>
        <li>Daily Breakfast, Lunch & Dinner with Local Cuisine</li>
        <li>Guided Trekking with Licensed and Experienced Sherpa Guide</li>
        <li>Domestic Flights (Kathmandu-Lukla-Kathmandu)</li>
        <li>Permits for Sagarmatha National Park and TIMS Card</li>
        <li>Visit to Famous Landmarks (Tengboche Monastery, Namche Bazaar, Kala Patthar)</li>
        <li>Medical Kit & Emergency Support</li>
        <li>Porter Services (Optional)</li>
        <li>Certificate of Achievement for Completing EBC Trek</li>
      </ul>
    </div>
    
  );
};

// About the Trek Component
const AboutTheTrek = () => {
  return (
    <div className="about-places">
      <h2>About the Trek</h2>
      <p>
        <strong>Lukla (Gateway to Everest)</strong> is where the journey begins with a thrilling flight to Lukla, the starting
        point of the trek. The small mountain town is bustling with trekkers preparing for their ascent.
      </p>
      <p>
        <strong>Namche Bazaar (3,440m)</strong> The famous Sherpa capital, Namche Bazaar, is a vibrant town where trekkers acclimatize.
        It offers incredible views of Everest, traditional monasteries, and cozy teahouses.
      </p>
      <p>
        <strong>Tengboche Monastery (3,867m)</strong> This ancient Buddhist monastery is a spiritual highlight of the trek, offering panoramic
        views of Everest, Ama Dablam, and other peaks.
      </p>
      <p>
        <strong>Everest Base Camp (5,364m)</strong> The ultimate destination! Stand at the base of the world's highest mountain and witness
        the breathtaking beauty of Everest up close.
      </p>
      <p>
        <strong>Kala Patthar (5,545m)</strong> The highest point of the trek, Kala Patthar provides the best sunrise views of Everest, making it a
        must-visit viewpoint.
      </p>
    </div>
  );
};

// Main Everest Base Camp Trek Component
const EverestBaseCampTrek = () => {
  return (
    <div>
      <Navbar/>
    <div className="container">

      {/* Back & Book Buttons */}
      <div className="button-container">
        <BackButton />
        <h1 className="head">Everest Base Camp Trek Package</h1>
        <BookButton />
      </div>

      {/* Trek Description */}
      <div className="description">
        <h2>Conquer the Trail to the Roof of the World</h2>
        <p>
          The Everest Base Camp (EBC) Trek is one of the most legendary trekking experiences in the world. This package offers a thrilling 14-day adventure through the breathtaking landscapes of the Khumbu region, taking you through picturesque Sherpa villages, ancient monasteries, and stunning glaciers. Stand in awe at the foot of the world's highest peak, Mount Everest (8,848m), and experience the thrill of reaching Everest Base Camp (5,364m). This trek is perfect for adventure seekers looking to test their endurance while exploring the culture and natural beauty of Nepal.
        </p>
      </div>

      {/* Image Gallery */}
      <ImageGallery />

      {/* Package Inclusions */}
      <PackageInclusions />

      {/* About the Trek */}
      <AboutTheTrek />
    </div>
    <Footer/>
    </div>
  );
};

export default EverestBaseCampTrek;
