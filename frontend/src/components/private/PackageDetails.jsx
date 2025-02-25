// filepath: /c:/Users/anils/OneDrive/Desktop/4feb/frontend/src/components/private/PackageDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../../styles/AllPackages.css';
import axios from 'axios';

const BackButton = () => {
    return <button className="back-button" onClick={() => window.history.back()}>⬅ Back</button>;
};

const BookButton = () => {
    return <button className="book-button" onClick={() => window.location.href = '/booking'}>Book Now</button>;
};

function PackageDetails() {
    const { packageId } = useParams();
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
                const response = await axios.get(`http://localhost:5000/packages/${packageId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });                
                console.log("Response data:", response.data); // Log the response data
                setPackageData(response.data.data); // Extract the data property
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPackageData();
    }, [packageId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container">

                {/* Button Section */}
                <div className="button-container">
                    <BackButton />
                    <h1 className="head">{packageData.name}</h1>
                    <BookButton />
                </div>

                {/* Description Section */}
                <div className="description">
                    <h2>{packageData.headdescription}</h2>
                    <p>{packageData.description}</p>
                </div>


<div className="image-gallery">
    {packageData.imageUrl.map((image, index) => {
        const imageUrl = `http://localhost:5000/${image}`;
        console.log("Image URL from database:", imageUrl); // Log the image URL from the database
        return <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />;
    })}
</div>

                {/* Package Inclusions */}
                <div className="package-inclusions">
                    <h3>Package Inclusions:</h3>
                    <ul>
                        {packageData.inclusions.map((inclusion, index) => (
                            <li key={index}>{inclusion}</li>
                        ))}
                    </ul>
                </div>

                {/* About the Places Section */}
                <div className="about-places">
                    <h2>About the Places</h2>
                    {packageData.places.map((place, index) => (
                        <div className="place" key={index}>
                            <h3>{place.name}</h3>
                            <p>{place.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PackageDetails;