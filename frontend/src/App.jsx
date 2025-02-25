import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Signin from "./components/public/Signin";
import Signup from "./components/public/Signup";
import Home from "./components/private/Home";
import Booking from "./components/private/Booking";
import Packages from "./components/private/Packages";
import BandipurPackage from './components/private/BandipurPackage';
import ChitwanNationalParkVisit from './components/private/ChitwanNationalParkVisit';
import EverestBaseCampTrek from './components/private/EverestBaseCampTrek';
import GandrukHomestayPackage from './components/private/GandrukHomestayPackage';
import GhaleGaunTourPackage from './components/private/GhaleGaunTourPackage';
import GorkhaTourPackage from './components/private/GorkhaTourPackage';
import GosaikundaLakeVisit from './components/private/GosaikundaLakeVisit';
import HeritageSitePackage from './components/private/HeritageSitePackage';
import IllamVisitPackage from './components/private/IllamVisitPackage';
import LumbiniVisitPackage from './components/private/LumbiniVisitPackage';
import MuktinathVisitPackage from './components/private/MuktinathVisitPackage';
import PathivaraTemplePackage from './components/private/PathivaraTemplePackage';
import RaraLakeTrek from './components/private/RaraLakeTrek';
import SwayambhuTempleVisit from './components/private/SwayambhuTempleVisit';
import Pokharatourpackage from './components/private/Pokharatourpackage';
import ScrollToTop from './components/private/ScrollToTop';
import Navbar from './components/private/Navbar';
import Test from './components/private/Test';
import Package from './components/private/Package';
import PackageDetails from './components/private/PackageDetails';
import Profile from './components/private/Profile';
import Dashboard from './components/admin/Dashboard';
import ManageUsers from './components/admin/ManageUsers';
import ManagePackages from './components/admin/ManagePackages';
import ViewBookings from './components/admin/ViewBooking';
import ContactMessages from './components/admin/ContactMessages';
import PrivateRoute from './components/private/PrivateRoutes.jsx';
// import ReviewList from './components/private/reviews.jsx';
// import ReviewForm from './components/private/ReviewForm.jsx';
function App() {
  return (
    
      <Router>
        <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/BandipurPackage" element={<BandipurPackage />} />
          <Route path="/ChitwanNationalParkVisit" element={<ChitwanNationalParkVisit />} />
          <Route path="/EverestBaseCampTrek" element={<EverestBaseCampTrek />} />
          <Route path="/GandrukHomestayPackage" element={<GandrukHomestayPackage />} />
          <Route path="/GhaleGaunTourPackage" element={<GhaleGaunTourPackage />} />
          <Route path="/GorkhaTourPackage" element={<GorkhaTourPackage />} />
          <Route path="/GosaikundaLakeVisit" element={<GosaikundaLakeVisit />} />
          <Route path="/HeritageSitePackage" element={<HeritageSitePackage />} />
          <Route path="/IllamVisitPackage" element={<IllamVisitPackage />} />
          <Route path="/LumbiniVisitPackage" element={<LumbiniVisitPackage />} />
          <Route path="/MuktinathVisitPackage" element={<MuktinathVisitPackage />} />
          <Route path="/PathivaraTemplePackage" element={<PathivaraTemplePackage />} />
          <Route path="/RaraLakeTrek" element={<RaraLakeTrek />} />
          <Route path="/SwayambhuTempleVisit" element={<SwayambhuTempleVisit />} />
          <Route path="/Pokharatourpackage" element={<Pokharatourpackage />} />
          <Route path="/package/:packageId" element={<PackageDetails />} />
          <Route path="/package" element={<Package />} />
          <Route path="/Navbar" element={<Navbar />} />
          {/* <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviewform" element={<ReviewForm />} /> */}


          <Route path="/Test" element={<Test />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/admin/manage-users" element={<PrivateRoute><ManageUsers /></PrivateRoute>} />
          <Route path="/admin/manage-packages" element={<PrivateRoute><ManagePackages /></PrivateRoute>} />
          <Route path="/admin/view-bookings" element={<PrivateRoute><ViewBookings /></PrivateRoute>} />
          <Route path="/admin/contact-messages" element={<PrivateRoute><ContactMessages /></PrivateRoute>} />
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;