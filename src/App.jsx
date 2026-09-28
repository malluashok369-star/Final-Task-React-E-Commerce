import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import './App.css'; // Make sure to import your CSS

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;