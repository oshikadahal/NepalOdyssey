

import React from "react";

// Importing Images
import Ghalegaun1 from '../../assets/images/Ghalegaun1.jpg';
import Ghalegaun2 from '../../assets/images/Ghalegaun2.jpeg';
import Ghalegaun3 from '../../assets/images/Ghalegaun3.jpg';
import Ghalegaun4 from '../../assets/images/ghalegaun4.jpg';
import Ghalegaun5 from '../../assets/images/ghalegaun5.jpg';
import Ghalegaun6 from '../../assets/images/ghalegaun6.jpg';
import Navbar from "../../components/private/Navbar";
import Footer from "..//..//components/private/Footer";
import '../../styles/Allpackages.css';
// Back Button Component
const BackButton = () => {
    return <button className="back-button" onClick={() => window.history.back()}>⬅ Back</button>;
};

// Book Button Component
const BookButton = () => {
    return <button className="book-button" onClick={() => window.location.href = '/booking'}>Book Now</button>;
};

const GhalegaunTour = () => {
    return (
        <div>
            <Navbar/>
        
        <div className="container">

            {/* Button Section */}
            <div className="button-container">
                <BackButton />
                <h1  className="head">Ultimate Ghalegaun Tour Package</h1>
                <BookButton />
            </div>

            {/* Description Section */}
            <div className="description">
                <h2>Explore the Beauty and Culture of Ghale Gaun</h2>
                <p>
                    Ghale Gaun is a picturesque Gurung village nestled in the Annapurna region of Nepal,
                    offering visitors a unique blend of natural beauty and cultural richness. Located at
                    an altitude of around 2,000 meters, it provides stunning panoramic views of some of the
                    highest peaks in the Himalayas, including Annapurna, Machapuchare, and Lamjung Himal. 
                    The village is known for its traditional houses, built using local materials.
                </p>
            </div>

            {/* Image Gallery */}
            <div className="image-gallery">
                <img src={Ghalegaun1} alt="Ghalegaun Village" />
                <img src={Ghalegaun2} alt="Ghalegaun Landscape" />
                <img src={Ghalegaun3} alt="Cultural Houses" />
                <img src={Ghalegaun4} alt="Scenic View" />
                <img src={Ghalegaun5} alt="Sunset in Ghalegaun" />
                <img src={Ghalegaun6} alt="Mountain View" />
            </div>

            {/* Package Inclusions */}
            <div className="package-inclusions">
                <h3>Package Inclusions:</h3>
                <ul>
                    <li>3 Nights, 4 Days Stay in a Home Stay</li>
                    <li>Daily Breakfast & Dinner</li>
                    <li>Guided Sightseeing Tour</li>
                    <li>Sunrise View through one hour walk</li>
                    <li>Visit to different houses to learn about their culture</li>
                    <li>Sunset View</li>
                    <li>Cultural Dances and Songs</li>
                    <li>Transportation & Pick-up Services</li>
                </ul>
            </div> 

            {/* About the Place Section */}
            <div className="about-places">
                <h2>About the Place</h2>

                <div className="place">
                    <p>
                        A highlight of the Ghale Gaun experience is the opportunity to immerse oneself in the local culture. The village
                        is predominantly inhabited by the Gurung ethnic group, who are known for their warm hospitality and rich traditions.
                        Visitors can participate in cultural activities such as traditional dance performances, local handicraft making, and 
                        even spend a night in homestays to experience authentic village life. The Gurung people are also famous for their martial
                        traditions and their significant contributions to the Gurkha regiments, and a visit to Ghale Gaun offers a chance to learn 
                        about their history and way of life firsthand.
                    </p>
                </div>

                <div className="place">
                    <p>
                        For adventure enthusiasts, the surrounding area of Ghale Gaun offers a variety of trekking opportunities. The trails around the village
                        pass through lush forests, terraced fields, and cascading waterfalls, providing ample opportunities for scenic hikes. One popular route 
                        is the trek to Besisahar, the gateway to the Annapurna Circuit. The peaceful and undisturbed environment, combined with the stunning natural 
                        landscapes, makes Ghale Gaun a haven for trekkers and photographers alike.
                    </p>
                </div>

                <div className="place">
                    <p>
                        The village is known for its traditional houses, built using local materials, which reflect the architectural style of the Gurung community. Visitors 
                        to Ghale Gaun are captivated by the serene atmosphere, the lush greenery, and the breathtaking mountain vistas, making it a perfect escape for nature 
                        lovers and those seeking tranquility.
                    </p>
                </div>
            </div>
        </div>
        
        <Footer />
        </div>
    );
};

export default GhalegaunTour;
