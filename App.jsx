import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ArtistProfile from './pages/ArtistProfile';
import ArtworkDetail from './pages/ArtworkDetail';
import Auctions from './pages/Auctions';
import Exhibitions from './pages/Exhibitions';
import UploadArtwork from './pages/UploadArtwork';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Notifications from './pages/Notifications';
import Login from './components/Login';
import Register from './components/Register';
import Artists from './pages/Artists';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artist/:id" element={<ArtistProfile />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/upload" element={<UploadArtwork />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
