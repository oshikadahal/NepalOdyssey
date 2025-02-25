import React, { useState, useContext, useEffect } from "react";
import signinImage from '../../assets/images/signin.jpg';
import Navbar from "../private/Navbar";
import Footer from "../private/Footer";
import '../../styles/Signin.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Signin() {
    const navigate = useNavigate();
    const { login, key } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        // Remove token when the sign-in page is opened
        localStorage.removeItem('token');
        // Check if the page needs to be refreshed
        if (localStorage.getItem('refreshOnce') === 'true') {
            console.log('refreshOnce flag found');
            localStorage.removeItem('refreshOnce');
            window.location.reload();
        }
    }, []);

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
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();

            if (response.ok) {
                login(result.token, result.isAdmin);
                alert(result.message);
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error('Error signing in:', error);
            alert('Failed to sign in');
        }
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div>
            <Navbar key={key} />
            <div className="signin-body">
                <div className="signin-container">
                    <div className="left">
                        <h2>Sign In</h2>
                        <div className="input-box">
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button className="btn" onClick={handleSubmit}>SIGN IN</button>
                        <p style={{ color: "white", marginTop: "10px" }}>
                            Don't have an account? 
                            <a onClick={handleSignup} style={{ color: "white", textDecoration: "underline" }}> Sign Up</a>
                        </p>
                    </div>
                    <div className="right">
                        <p>Sign In and Discover the Unexplored!</p>
                        <img src={signinImage} alt="signin" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;