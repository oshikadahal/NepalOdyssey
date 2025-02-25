import React, { useState } from "react";
import SignupPage from '../../assets/images/signup.png';
import Navbar from "../../components/private/Navbar";
import Footer from "../../components/private/Footer";
import '../../styles/Signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate('/signin');
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up');
    }
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <div>
      <Navbar />
      <div className="signup-body">
        <div className="signup-container">
          <div className="left">
            <h2>Sign Up</h2>
            <div className="input-box">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-box">
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>
            <button className="btn" onClick={handleSubmit}>SIGN UP</button>
            <p style={{ color: 'white', marginTop: '10px' }}>
              Already have an account? <a onClick={handleSignin} style={{ color: 'white', textDecoration: 'underline' }}>Sign In</a>
            </p>
          </div>
          <div className="right">
            <h2>Sign Up</h2>
            <p>Create an account to explore more!</p>
            <img src={SignupPage} alt="signup" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;