import React from 'react';
import AdminPanel from './AdminPanel';
import admindashboard from '../../assets/images/admindashboard.png';
import '../../styles/Dashboard.css'; // Assuming you move the styles to a separate CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <AdminPanel />
      <div className="dashboard-main-content">
        <div className="dashboard-body">
          <h1>Welcome to Admin Dashboard</h1>
          <p>Here you can manage packages, users, bookings, and contact messages.</p>
          <img src={admindashboard} alt="admindashboard" className="dashboard-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;