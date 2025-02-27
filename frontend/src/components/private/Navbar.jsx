// frontend/src/components/private/Navbar.jsx
import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../../styles/Navbar.css';
import Logo from '../../assets/images/logo.png';
import Test from './Test';
import { AuthContext } from '../../context/AuthContext.jsx';

function Navbar() {
  const { isAuthenticated, logout, key } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/Home');
  };
  const handlePackages = () => {
    navigate('/Package');
  };
  const handleBooking = () => {
    navigate('/Booking');
  };
  const handleSignin = () => {
    navigate('/signin');
  };
  const handleContact = () => {
    navigate('/home', { state: { scrollToContact: true } });
};

  return (
    <div key={key}>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-img" />
          Nepal Odyssey
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <ul className="nav-links">
          <li><a onClick={handleHome}>Home</a></li>
          <li><a onClick={handlePackages}>Packages</a></li>
          <li><a onClick={handleBooking}>Book</a></li>
          <li><a onClick={handleContact}>Contact</a></li>
          <li>
            {isAuthenticated ? (
              <Test /> 
            ) : (
              <button className="user-icon" onClick={handleSignin}><FontAwesomeIcon icon={faUser} /> Sign In</button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;