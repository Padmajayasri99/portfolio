import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/Padmajayasri99"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaGithub />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/jayasri999"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://x.com/raj14_s" target="_blank" rel="noopener noreferrer">
        {" "}
        <IoLogoTwitter />{" "}
      </a>
      <a
        href="https://www.instagram.com/jayasri_undapalli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FiInstagram />{" "}
      </a>
    </div>
  );
};

export default HeaderSocials;
