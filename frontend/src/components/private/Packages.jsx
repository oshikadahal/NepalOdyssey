
import React from "react";
import Pokhara from '../../assets/images/pokhara.jpg';
import GhaleGaun from '../../assets/images/ghale gaun.jpg';
import Gorkha from '../../assets/images/Gorkha.jpg';
import Heritage from '../../assets/images/heritage.jpg';
import Illam from '../../assets/images/Illam.jpg';
import Lumbini from '../../assets/images/Lumbini.jpg';
import Muktinath from '../../assets/images/Muktinath.jpg';
import Swayambhu from '../../assets/images/swayambhu.jpg';
import EverestTrek from '../../assets/images/Trekking.jpg';
import Chitwan from '../../assets/images/chitwannationalpark.jpg';
import RaraLake from '../../assets/images/raralake.jpg';
import Gosaikunda from '../../assets/images/gosaikunda1.jpg';
import Gandruk from '../../assets/images/gandruk.jpg';
import Bandipur from '../../assets/images/bandipur.jpg';
import Pathivara from '../../assets/images/Pathibhara-Devi-Temple.jpeg';
import { useNavigate } from "react-router-dom";
import '../../styles/Packages.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Packages() {
    const navigate = useNavigate();

    const handlePokhara = () => {
        navigate('/Pokharatourpackage');
    }
    const handleGhaleGaun = () => {
        navigate('/GhaleGaunTourPackage');
    }
    
    const handleGorkha = () => {
        navigate('/GorkhaTourPackage');
    }
    const handleHeritage = () => {
        navigate('/HeritageSitePackage');
    }
    const handleIllam = () => {
        navigate('/IllamVisitPackage');
    }
    const handleLumbini = () => {
        navigate('/LumbiniVisitPackage');
    }
    const handleMuktinath = () => {
        navigate('/MuktinathVisitPackage');
    }
    const handleSwayambhu = () => {
        navigate('/SwayambhuTempleVisit');
    }
    const handleEverestTrek = () => {
        navigate('/EverestBaseCampTrek');
    }
    const handleChitwan = () => {
        navigate('/ChitwanNationalParkVisit');
    }
    const handleRaraLake = () => {
        navigate('/RaraLakeTrek');
    }
    const handleGosaikunda = () => {
        navigate('/GosaikundaLakeVisit');
    }
    const handleGandruk = () => {
        navigate('/GandrukHomestayPackage');
    }
    const handleBandipur = () => {
        navigate('/BandipurPackage');
    }
    const handlePathivara = () => {
        navigate('/PathivaraTemplePackage');
    }





    return (
        <div>
            <Navbar/>
       
            <header>
                <h1>Nepal Odyssey Packages</h1>
            </header>

            <section className="packages">
                <div className="package">
                    <img src={Pokhara} alt="Pokhara Tour Package" />
                    <div className="package-info">
                        <h2>Pokhara Tour Package</h2>
                        <p>Experience a perfect family outing with a blend of heritage, adventure, and nature.</p>
                        <p><strong>Duration:</strong> 8 Days</p>
                        <p><strong>Price:</strong> INR 42,000</p>
                        <a onClick={handlePokhara} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={GhaleGaun} alt="Ghale Gaun Tour Package" />
                    <div className="package-info">
                        <h2>Ultimate GhaleGaun Tour Package</h2>
                        <p>Discover Nepal's stunning scenery, ancient temples, and thrilling adventures.</p>
                        <p><strong>Duration:</strong> 10 Days</p>
                        <p><strong>Price:</strong> INR 51,000</p>
                        <a onClick={handleGhaleGaun} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Gorkha} alt="Gorkha Tour Package" />
                    <div className="package-info">
                        <h2>Gorkha Tour Package</h2>
                        <p>Explore Kathmandu's cultural gems and Pokhara's beauty in a short but memorable trip.</p>
                        <p><strong>Duration:</strong> 6 Days</p>
                        <p><strong>Price:</strong> INR 26,000</p>
                        <a onClick={handleGorkha} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Heritage} alt="Heritage Sites" />
                    <div className="package-info">
                        <h2>Heritage Site Package</h2>
                        <p>A once-in-a-lifetime trek to the foot of the world's highest mountain.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleHeritage} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Illam} alt="Illam Visit" />
                    <div className="package-info">
                        <h2>Illam Visit Package</h2>
                        <p>Explore the scenic beauty of Illam with a memorable trek.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleIllam} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Lumbini} alt="Lumbini Visit" />
                    <div className="package-info">
                        <h2>Lumbini Visit Package</h2>
                        <p>Visit the birthplace of Lord Buddha and experience peace and spirituality.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleLumbini} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Muktinath} alt="Muktinath Visit" />
                    <div className="package-info">
                        <h2>Muktinath Visit Package</h2>
                        <p>A spiritual journey to the sacred Muktinath Temple.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleMuktinath} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Swayambhu} alt="Swayambhu Temple Visit" />
                    <div className="package-info">
                        <h2>Swayambhu Temple Visit</h2>
                        <p>Visit the Monkey Temple and explore Kathmandu’s rich history.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleSwayambhu} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={EverestTrek} alt="Everest Base Camp Trek" />
                    <div className="package-info">
                        <h2>Everest Base Camp Trek</h2>
                        <p>A thrilling trek to the foot of the world's highest mountain.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleEverestTrek} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Chitwan} alt="Chitwan National Park Visit" />
                    <div className="package-info">
                        <h2>Chitwan National Park Visit</h2>
                        <p>Explore wildlife and nature in one of the most famous national parks in Nepal.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleChitwan} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={RaraLake} alt="Rara Lake Trek" />
                    <div className="package-info">
                        <h2>Rara Lake Trek</h2>
                        <p>A trek to the pristine Rara Lake, surrounded by snow-capped mountains.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleRaraLake} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Gosaikunda} alt="Gosaikunda Lake Visit" />
                    <div className="package-info">
                        <h2>Gosaikunda Lake Visit</h2>
                        <p>Visit the sacred Gosaikunda Lake, a spiritual destination for pilgrims.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleGosaikunda} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Gandruk} alt="Gandruk Homestay" />
                    <div className="package-info">
                        <h2>Gandruk Homestay Package</h2>
                        <p>Experience the hospitality of the Gandruk village with this homestay package.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleGandruk} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Bandipur} alt="Bandipur Visit" />
                    <div className="package-info">
                        <h2>Bandipur Package</h2>
                        <p>Explore the scenic hilltop town of Bandipur, famous for its natural beauty.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handleBandipur} className="btn">View Package</a>
                    </div>
                </div>

                <div className="package">
                    <img src={Pathivara} alt="Pathivara Temple Visit" />
                    <div className="package-info">
                        <h2>Pathivara Temple Package</h2>
                        <p>Visit the sacred Pathivara Temple and experience the beauty of the region.</p>
                        <p><strong>Duration:</strong> 14 Days</p>
                        <p><strong>Price:</strong> INR 85,000</p>
                        <a onClick={handlePathivara} class="btn">View Package</a>
                    </div>
                    </div>
                </section>

                
        <Footer/>
            </div>
    );
}

export default Packages;
