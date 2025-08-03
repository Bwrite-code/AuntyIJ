// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Loyalty from './pages/Loyalty';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import CartProfile from './pages/CartProfile';
import Auth from './pages/Auth';

const App = () => (
  <ThemeProvider>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/cart" element={<CartProfile />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  </ThemeProvider>
);

export default App;
