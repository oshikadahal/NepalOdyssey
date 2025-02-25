
import React from "react";
import PhewaLake from '../../assets/images/phewa lake.jpg';
import Sarangkot from '../../assets/images/sarangkot.webp';
import DevisFall from '../../assets/images/Devisfall.webp';
import GupteshworCave from '../../assets/images/Gupteshwor Cave.jpg';
import ShantiStupa from '../../assets/images/Shanti-Stupa.jpg';
import AnnapurnaView from '../../assets/images/aarnapurna.jpg';
import Navbar from "../../components/private/Navbar";
import Footer from "..//..//components/private/Footer";
import '../../styles/Allpackages.css';

const BackButton = () => {
    return <button className="back-button" onClick={() => window.history.back()}>⬅ Back</button>;
};

// Book Button Component
const BookButton = () => {
    return <button className="book-button" onClick={() => window.location.href = '/booking'}>Book Now</button>;
};



function PokharaTourPackage() {
    return (
        <div>
            <Navbar />

        <div className="container">

        {/* Button Section */}
        <div className="button-container">
            <BackButton />
            <h1 className="head">Pokhara Tour Package</h1>
            <BookButton />
        </div>

        {/* Description Section */}
        <div className="description">
            <h2>Explore the Beauty of Pokhara</h2>
            <p>
                Pokhara, the city of lakes, offers breathtaking natural beauty, adventure activities, and a peaceful atmosphere. 
                This package includes guided tours to some of the most stunning locations in Pokhara, along with cultural experiences.
                Visitors can enjoy sightseeing tours to iconic landmarks like Phewa Lake, Devi’s Fall, and the World Peace Pagoda,
                along with thrilling activities such as paragliding, trekking, and rafting. Cultural experiences include visits to local villages, 
                temples, and monasteries, providing a deeper connection to the region’s heritage.
            </p>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
            <img src={PhewaLake} alt="Phewa Lake" />
            <img src={Sarangkot} alt="Sarangkot Sunrise" />
            <img src={DevisFall} alt="Davis Fall" />
            <img src={GupteshworCave} alt="Gupteshwor Cave" />
            <img src={ShantiStupa} alt="World Peace Pagoda" />
            <img src={AnnapurnaView} alt="Annapurna View" />
        </div>

        {/* Package Inclusions */}
        <div className="package-inclusions">
            <h3>Package Inclusions:</h3>
            <ul>
                <li>3 Nights, 4 Days Stay in a 3-Star Hotel</li>
                <li>Daily Breakfast & Dinner</li>
                <li>Guided Sightseeing Tour</li>
                <li>Boating at Phewa Lake</li>
                <li>Visit to Davis Fall & Gupteshwor Cave</li>
                <li>Sunrise View from Sarangkot</li>
                <li>World Peace Pagoda Visit</li>
                <li>Optional Adventure Activities (Paragliding, Zipline, Ultra-Light Flight)</li>
                <li>Transportation & Pick-up Services</li>
            </ul>
        </div>

        {/* About the Places Section */}
        <div className="about-places">
            <h2>About the Places</h2>

            <div className="place">
                <h3>Sarangkot Sunrise</h3>
                <p>
                    Sarangkot, located on a hilltop just outside Pokhara, is famous for offering one
                    of the most mesmerizing sunrise views in Nepal. The sun casts a golden hue over the Annapurna and Machapuchare mountains,
                    creating a breathtaking sight.
                </p>
            </div>

            <div className="place">
                <h3>Devi’s Fall</h3>
                <p>
                    Also known as Patale Chhango, Devi’s Fall is a stunning waterfall named after a tragic incident in which a foreign woman drowned. 
                    It cascades into a deep, narrow gorge, making it a popular tourist attraction.
                </p>
            </div>

            <div className="place">
                <h3>Shanti Stupa</h3>
                <p>
                    The Shanti Stupa, or Peace Pagoda, is a Buddhist monument built by Japanese monks. It offers breathtaking panoramic views of 
                    the Annapurna Range, Phewa Lake, and the Pokhara Valley.
                </p>
            </div>

            <div className="place">
                <h3>Gupteshwor Mahadev Cave</h3>
                <p>
                    A sacred cave temple dedicated to Lord Shiva, located near Devi's Fall. It is one of Nepal’s most revered pilgrimage sites, 
                    featuring natural rock formations and a deep spiritual ambiance.
                </p>
            </div>

            <div className="place">
                <h3>Annapurna View</h3>
                <p>
                    The Annapurna range offers one of the most spectacular mountain views in Nepal, featuring Annapurna I, Annapurna South, 
                    Dhaulagiri, and the famous Fishtail Mountain.
                </p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
);
};

export default PokharaTourPackage;



  
