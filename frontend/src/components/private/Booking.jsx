import React, { useState, useEffect } from "react";
import NavBar from '../../assets/images/navbar.jpeg';
import Navbar from "../../components/private/Navbar";
import Footer from "../../components/private/Footer";
import '../../styles/Booking.css';
// import '../../styles/Toast.css'; // Import toast styles
import { useNavigate } from "react-router-dom";

// Toast Component
function Toast({ message, onClose }) {
    return (
        <div className="toast-container toast-show">
            <span className="toast-icon">✅</span>
            {message}
            <button className="toast-close" onClick={onClose}>✖</button>
        </div>
    );
}

function Booking() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        packageName: '',
        userName: '',
        userEmail: '',
        bookingDate: '',
        numberOfTravelers: 1,
        documentType: '',
        documentFile: null
    });

    const [packageOptions, setPackageOptions] = useState([]);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://localhost:5000/packages', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                if (response.ok) {
                    setPackageOptions(result.data);
                } else {
                    console.error('Failed to fetch packages:', result.error);
                }
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        };

        fetchPackages();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            documentFile: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
            return;
        }

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend
            });
            const result = await response.json();

            if (response.ok) {
                setShowToast(true); // Show toast on success
                setTimeout(() => setShowToast(false), 5000); // Hide after 5 sec
                setFormData({
                    packageName: '',
                    userName: '',
                    userEmail: '',
                    bookingDate: '',
                    numberOfTravelers: 1,
                    documentType: '',
                    documentFile: null
                });
            } else {
                alert(result.error || 'Failed to create booking');
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking');
        }
    };

    return (
        <div>
            <Navbar />
            {showToast && (
                <Toast message="Booking has been done. Booking code has been sent to your email. Visit the office with the provided code." onClose={() => setShowToast(false)} />
            )}
            <div className="booking-page">
                <img src={NavBar} alt="navbar" className="booking-image" />
                <div className="bookcontainer">
                    <section id="book" className="booking">
                        <h2>Book Your Adventure to Nepal</h2>
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="package">Select Package</label>
                                <select id="package" name="packageName" value={formData.packageName} onChange={handleChange} required>
                                    <option value="">Choose a package</option>
                                    {packageOptions.map((pkg) => (
                                        <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Travel Date</label>
                                <input type="date" id="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="travelers">Number of Travelers</label>
                                <input type="number" id="travelers" name="numberOfTravelers" value={formData.numberOfTravelers} onChange={handleChange} min="1" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="userName" value={formData.userName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="documentType">Upload your Citizenship / Pan Card / National Identification Card</label>
                                <select id="documentType" name="documentType" value={formData.documentType} onChange={handleChange} required>
                                    <option value="">Choose a document</option>
                                    <option value="citizenship">Citizenship</option>
                                    <option value="pan-card">Pan Card</option>
                                    <option value="national-identification-card">National Identification Card</option>
                                </select>
                                <input type="file" name="documentFile" onChange={handleFileChange} accept=".jpg, .png, .webp, .jpeg" required />
                            </div>
                            <button type="submit" className="book-now">Book Now</button>
                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Booking;
