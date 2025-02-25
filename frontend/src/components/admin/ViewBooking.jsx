import React, { useEffect, useState } from 'react';
import AdminPanel from './AdminPanel';
import '../../styles/ViewBooking.css'; // Assuming you move the styles to a separate CSS file

const ViewBooking = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="view-booking-container">
      <AdminPanel />
      <div className="view-booking-main-content">
        <header>
          <h1>Booking Details</h1>
        </header>

        <section id="view-booking">
          {bookingData.length > 0 ? (
            <table className="booking-details">
              <thead>
                <tr>
                  <th>Package Name</th>
                  <th>Travel Date</th>
                  <th>Number of Travelers</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Document Type</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => {
                  // const imageUrl = `http://localhost:5000/uploads/${booking.packageName.replace(/\s+/g, '-')}/1.jpg`;
                  const imageUrl = `http://localhost:5000/${booking.documentFile.replace(/\\/g, '/')}`;
                  console.log('Generated image URL:', imageUrl); // Log the generated image URL
                  return (
                    <tr key={index}>
                      <td>{booking.packageName}</td>
                      <td>{booking.bookingDate}</td>
                      <td>{booking.numberOfTravelers}</td>
                      <td>{booking.userName}</td>
                      <td>{booking.userEmail}</td>
                      <td>{booking.documentType}</td>
                      <td>
                        <a
                          id="document-link"
                          href={imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Document
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No booking details available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ViewBooking;