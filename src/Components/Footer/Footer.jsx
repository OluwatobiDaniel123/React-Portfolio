import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer_logo">
          DANETECH
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#experience">Experience</a>
          </li>
          <li>
            {" "}
            <a href="#services">Services</a>
          </li>
          <li>
            {" "}
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            {" "}
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>

        <div className="footer_copyright">
          <small>&copy; DANETECH All right reserve</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
