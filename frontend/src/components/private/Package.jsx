import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Packages.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext.jsx';
import ReactStars from "react-rating-stars-component";

function Package() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [packagesData, setPackagesData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem('userId'); // Get user ID from local storage

    useEffect(() => {
        const fetchPackagesData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/packages');
                setPackagesData(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPackagesData();
    }, []);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/reviews');
                setReviews(response.data);
            } catch (err) {
                console.error('Error fetching reviews:', err);
            }
        };

        fetchReviews();
    }, []);

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/signin');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/reviews', {
                packageId: selectedPackage,
                userId: userId,
                comment: reviewText,
                rating: rating
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setReviews([...reviews, response.data]);
            setReviewText('');
            setRating(0);
            setSelectedPackage(''); // Reset the selected package
        } catch (err) {
            console.error('Error submitting review:', err);
        }
    };

    const handleReviewDelete = async (reviewId) => {
        try {
            await axios.delete(`http://localhost:5000/reviews/${reviewId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setReviews(reviews.filter(review => review.id !== reviewId));
        } catch (err) {
            console.error('Error deleting review:', err);
        }
    };

    const handleReviewEdit = async (reviewId, newComment, newRating) => {
        try {
            const response = await axios.put(`http://localhost:5000/reviews/${reviewId}`, {
                comment: newComment,
                rating: newRating
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setReviews(reviews.map(review => review.id === reviewId ? response.data : review));
        } catch (err) {
            console.error('Error editing review:', err);
        }
    };

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!Array.isArray(packagesData)) {
        return <div>Error: Unexpected response format</div>;
    }

    return (
        <div>
            <Navbar />
            <header>
                <h1>Nepal Odyssey Packages</h1>
            </header>
            <section className="packages">
                {packagesData.map((pkg, index) => {
                    const imageUrl = `http://localhost:5000/${pkg.imageUrl[0]}`;
                    const summary = pkg.description.length > 100 ? pkg.description.substring(0, 100) + '...' : pkg.description;
                    return (
                        <div key={pkg.id} className="package">
                            <img src={imageUrl} alt={pkg.name} />
                            <div className="package-info">
                                <h2>{pkg.name}</h2>
                                <p>{summary}</p>
                                <p><strong>Duration:</strong> {pkg.duration}</p>
                                <p><strong>Price:</strong> {pkg.price}</p>
                                <a onClick={() => navigate(`/package/${pkg.id}`)} className="btn">View Package</a>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className="reviews">
                <h2>Reviews</h2>
                <p>Leave a review for this package:</p>
                <form onSubmit={handleReviewSubmit}>
                    <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} required>
                        <option value="">Select a package</option>
                        {packagesData.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                        ))}
                    </select>
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review here"
                        required
                    />
                    <div className="rating">
                        <ReactStars
                            key={rating} // Add key prop to force re-render
                            count={5}
                            value={rating} // Controlled by the rating state
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
                <div className="review-list">
                    {reviews.length === 0 ? (
                        <p>No reviews yet. Be the first to leave a review!</p>
                    ) : (
                        reviews.map(review => {
                            console.log('Review userId:', review.userId); // Log the userId from the review
                            return (
                                <div key={review.id} className="review">
                                    <p>{review.comment}</p>
                                    <div className="rating">
                                        <ReactStars
                                            count={5}
                                            value={review.rating}
                                            size={24}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    {review.userId === parseInt(userId) && (
                                        <div className="review-actions">
                                            <button className="btn-edit" onClick={() => handleReviewEdit(review.id, prompt('Edit your review:', review.comment), prompt('Edit your rating:', review.rating))}>Edit</button>
                                            <button className="btn-delete" onClick={() => handleReviewDelete(review.id)}>Delete</button>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Package;