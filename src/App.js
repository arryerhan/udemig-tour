import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
