
import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Footer.css';

function Footer(){
    const navigate = useNavigate();

    const handleHome =() => {
        navigate('/Home');
    }
    const handlePackages =() => {
        navigate('/Packages');
    }
    const handleBooking =() => {
        navigate('/Booking');
    }
    const handlesignin =() => {
        navigate('/signin');
    }
    const handleContact =() => {
        navigate('/Home', {state: {scrollToContact: true}});
    }
    return(

        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Nepal Odyssey</h3>
                <p>Your trusted partner for Nepal adventures since 2025.</p>
            </div>
            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a onClick={handleHome}>Home</a></li>
                    <li><a onClick={handlePackages}>Packages</a></li>
                    <li><a onClick={handleBooking}>Book</a></li>
                    <li><a onClick={handleContact}>Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p> Kathmandu, Nepal</p>
                <p>Phone: +977 9851326755</p>
                <p>Email: info@nepalodyssey.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Nepal Odyssey. All rights reserved.</p>
        </div>
    </footer>



    )
}
export default Footer;