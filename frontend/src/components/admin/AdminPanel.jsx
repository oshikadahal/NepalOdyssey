import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AdminPanel.css'; // Assuming you move the styles to a separate CSS file
import sidebarlogo from '../../assets/images/logo2.png'; 

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === '/signin') {
      navigate(path);
      window.location.reload();
    } else {
      navigate(path);
    }
  };

  return (
    <div className="admin-panel">
      <h2>NEPAL ODYSSEY</h2>
      <img src={sidebarlogo} alt="Sidebar Logo" />
      <h2>ADMIN PANEL</h2>
      <ul>
        <li onClick={() => handleNavigation('/admin')}>Dashboard</li>
        <li onClick={() => handleNavigation('/admin/manage-packages')}>Manage Packages</li>
        <li onClick={() => handleNavigation('/admin/view-bookings')}>View Bookings</li>
        <li onClick={() => handleNavigation('/admin/contact-messages')}>Contact Messages</li>
        <li onClick={() => handleNavigation('/admin/manage-users')}>Manage Users</li>
        <li onClick={() => handleNavigation('/signin') }>Logout</li>
      </ul>
    </div>
  );
};

export default AdminPanel;