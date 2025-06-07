import "aos/dist/aos.css";
import "./about.css";
import AOS from "aos";
import ME from "../../assets/crop.png";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { VscFolderLibrary } from "react-icons/vsc";

AOS.init({
  duration: 2000,
});

const About = () => {
  return (
    <section id="about" data-aos="zoom-in-up">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="underline"></div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://media.tenor.com/kyeNs4DnuW0AAAAM/dev_animado.gif"
              alt="Animated developer"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Academic Excellence</h5>
              <small>Consistently ranked in top 1% of the class (CGPA: 9.5)</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Internship</h5>
              <small>
                ⭐AIMLDS Intern <br />
                ⭐Java Full Stack Intern at IIDT BlackBucks
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Collaborat<br></br>ions</h5>
              <small>Worked with peers on diverse technical projects</small>
            </article>
          </div>

          <p style={{ textAlign: "justify" }}>
            A technically sound and intellectually curious Computer Science
            student with a strong foundation in programming and full-stack
            development, I am deeply passionate about exploring the frontiers of
            Artificial Intelligence and Machine Learning. I channel my creativity
            into engineering innovative, real-world solutions that blend
            algorithmic depth with user-centric design. With a consistent drive
            for excellence, I seek opportunities where I can architect intelligent
            systems, tackle complex challenges, and contribute meaningfully to
            forward-thinking tech ecosystems.
          </p>

          <div className="about__socials">
            <a
              href="https://github.com/Padmajayasri99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jayasri999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://x.com/raj14_s"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://www.instagram.com/jayasri_undapalli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
