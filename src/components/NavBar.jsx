import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="/logo.png" alt="QuickBite Logo" className="logo-img" /> 
      </div>
      <ul className="nav-links">
        <li><Link to="/"> <FaHome /> Home</Link></li>
        <li><Link to="/menu"> <FaInfoCircle /> Menu</Link></li>
        <li><Link to="/cart"><FaShoppingCart /> Cart</Link></li>
        <li><Link to="/about">   <FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"> <FaPhoneAlt /> Contact</Link></li>
      </ul>
    </nav>
  );
}
