import "aos/dist/aos.css";
import "./portfolio.css";
import AOS from "aos";
import Img1 from "../../assets/nn.png";
import Img2 from "../../assets/portfolio.png";
import Img3 from "../../assets/bdgt.png";

import React from "react";


// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    img: Img1,
    title: "NoteNest",
    github: "https://github.com/Padmajayasri99/notes-app-v2",
    desc: " React Notes App  A sleek and intuitive note-taking web app built with React. Allows users to create, edit, and delete notes with real-time UI updates and localStorage support.",
     demo: "https://notesto.netlify.app/",
  },
  {
    id: 2,
    img: Img2,
    title: "My Personal Portfolio",
    github: "https://github.com/Padmajayasri99/portfolio",
    desc: "A responsive MERN stack portfolio built with React, showcasing my projects and development skills. It features dynamic content, clean UI, and seamless user interaction..",
    demo: "https://portfolio-six-kohl-74.vercel.app/",
  },
  {
    id: 3,
    img: Img3,
    title: "Budget Analyzer and tracker",
    github: "",
    desc: "It helps users track income, expenses, and savings with real-time visual insights. Built with a clean UI and intuitive controls to simplify personal finance management",
    demo: "",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Works </h5>
      <h2> Experience </h2>
      <div className="underline"></div>

      <div className="container portfolio__container">
        {data.map(({ id, img, title, github, demo, desc }) => {
          return (
            <article className="portfolio__item" key={id} data-aos="flip-left">
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3> {title} </h3>
              <p className="porfolio__desc"> {desc}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
