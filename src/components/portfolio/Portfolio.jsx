import "aos/dist/aos.css";
import "./portfolio.css";
import AOS from "aos";
import Img1 from "../../assets/nn.png";
import Img2 from "../../assets/Home.PNG";
import Img3 from "../../assets/wages.png";
import Img6 from "../../assets/IgClone.png";
import React from "react";
import blog from "../../assets/blog.JPG";
import wordle from "../../assets/wordle.JPG";

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
    github: "https://github.com/Sandeepk14/portfolio",
    desc: "The MERN portfolio app serves as an exhibit for my full stack development projects and abilities. Constructed using Express.js, React, Node.js, and MongoDB, it demonstrates his expertise in developing dynamic online apps. The app offers insights into his work and skills with JavaScript frameworks and has a simple, responsive design.",
    demo: "https://teal-daffodil-f80e69.netlify.app/",
  },
  {
    id: 3,
    img: Img3,
    title: "Mern Image Uploader App using Multer",
    github: "https://github.com/Sandeepk14/Mern-Image-Frontend-app",
    desc: "Setting up a Node.js/Express backend to manage file uploads and a React frontend for user input are necessary when building a MERN multiple image uploader application using Multer. For file management and local or cloud storage of photos, use Multer middleware. Fotometadata is stored in MongoDB. Ensure that security and error handling procedures are followed.",
    demo: "https://main--mernimage.netlify.app/",
  },
  {
    id: 6,
    img: Img6,
    title:
      "Online Wriiten Examination System Using BlockChain & Machine Learning",
    github:
      "https://github.com/Kushalobroy/Written-Examination-System-Using-Blockchain-IPFS-and-Machine-Learning/",
    desc: "Online Wriiten Examination System Using BlockChain & Machine Learning by implementing React.Js, Node.js, Express.js and the MongoDB for storage.",
    demo: "#",
  },
  {
    id: 7,
    img: blog,
    title: "Upcoming Project....... Amazon Clone app",
    github: "https://github.com/Sandeepk14/",
    desc: "",
    demo: "#",
  },
  {
    id: 9,
    img: wordle,
    title: "Upcoming Project....... YouTube Clone app",
    github: "https://github.com/Sandeepk14/",
    desc: "",
    demo: "#",
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
