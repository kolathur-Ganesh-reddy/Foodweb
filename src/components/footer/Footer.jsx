import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-section brand">
          <h2 className="logo-3d"> <IoFastFood />TastyBites 🍽️</h2>
          <p>Your go-to place for delicious food. Eat Fresh, Stay Healthy!</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Order Now</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><FaMapMarkerAlt /> 123 Food Street, NY</li>
            <li><FaPhoneAlt /> +1 234 567 890</li>
            <li><FaEnvelope /> support@tastybites.com</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TastyBites. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
