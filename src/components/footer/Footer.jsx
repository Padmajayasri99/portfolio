import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BsLinkedin } from "react-icons/bs";
// ..
AOS.init({
  duration: 2000,
});

const Footer = () => {
  return (
    <footer id="footer" data-aos="zoom-in-down">
      <a href="#" className="footer__logo">
        Padma Jayasri Undapalli
      </a>

      <div className="footer__socials">
        <a href="https://github.com/Padmajayasri99">
          <FaGithub />
        </a>
        <a href="https://x.com/jay_s">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/jayasri999">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/jayasri_undapalli/">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Copyright <b className="name">Padma Jayasri Undapalli</b>. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
