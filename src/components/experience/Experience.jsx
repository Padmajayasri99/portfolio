import "aos/dist/aos.css";
import "./experience.css";
import AOS from "aos";
import React, { useEffect } from "react";
import srkr from '../../assets/srkr.jpeg';
import sasi from '../../assets/sasi.jpeg';
import aditya from '../../assets/aditya.png';




// ✅ Only import available icons
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiPhp,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiJson,
  SiTableau,
  SiAmazonaws,
  SiLinux,
  SiSpring, // ✅ Use Spring for Java
  SiTensorflow, // ✅ Use TensorFlow for Machine Learning
  SiJenkins // ✅ Use Jenkins or any other DevOps tool icon
} from "react-icons/si";

import { FaNetworkWired, FaDatabase } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

// Initialize AOS animation
AOS.init({
  duration: 2000,
});

const skillData = [
  { skill: "C", Icon: SiC },
  { skill: "C++", Icon: SiCplusplus },
  { skill: "Python", Icon: SiPython },
  { skill: "Java", Icon: SiSpring }, // ✅ Replaced SiJava
  { skill: "DSA", Icon: AiOutlineCode },
  { skill: "HTML5", Icon: SiJavascript },
  { skill: "CSS3", Icon: SiJavascript },
  { skill: "JavaScript", Icon: SiJavascript },
  { skill: "PHP", Icon: SiPhp },
  { skill: "React.js", Icon: SiReact },
  { skill: "Node.js", Icon: SiNodedotjs },
  { skill: "MySQL", Icon: SiMysql },
  { skill: "MongoDB", Icon: SiMongodb },
  { skill: "Operating Systems", Icon: SiLinux },
  { skill: "Computer Networks", Icon: FaNetworkWired },
  { skill: "DBMS", Icon: FaDatabase },
  { skill: "JSON", Icon: SiJson },
  { skill: "Machine Learning", Icon: SiTensorflow }, // ✅ Replaced SiMachinelearning
  { skill: "Tableau", Icon: SiTableau },
  { skill: "AWS", Icon: SiAmazonaws },
  { skill: "DevOps", Icon: SiJenkins }, // ✅ Replaced SiDevops
];

const educationData = [
  {
    id: 1,
    cert: "B.Tech in CSE",
    sch: "SRKR Engineering College, Bhimavaram",
    year: "2022 - 2026",
    cgpa: "CGPA: 9.5 / 10",
    position: "left",
    logo: srkr
  },
  {
    id: 2,
    cert: "Intermediate - MPC",
    sch: "SASI Jr. College, Velivennu",
    year: "2020 - 2022",
    cgpa: "CGPA: 9.76 / 10",
    position: "right",
    logo: sasi
  },
  {
    id: 3,
    cert: "10th Standard",
    sch: "Aditya Public School, Palakol",
    year: "2019 - 2020",
    cgpa: "GPA: 10 / 10",
    position: "left",
    logo: aditya
   },
];

const Experience = () => {
   useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Skills & Education</h2>
      <div className="underline"></div>

      <div
        className="container experience__container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h4 className="intro">
          I am a highly skilled and motivated individual with a strong
          background in the following technologies
        </h4>

        <div className="experience__skills">
          {skillData.map(({ skill, Icon }) => (
            <article className="experience__details" key={skill}>
              <div className="techContainer">
                <Icon className="tech__icon" />
                <p className="text">{skill}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="experience__education"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <p className="eduTitle">🎓Education & Academic Journey📚</p>
          <div className="underline"></div>
          <div className="experience__content2">
          <div className="experience__content2">
{educationData.map(({ id, cert, sch, year, cgpa, position, logo }) => (
  <article
    className={`education-block ${position}`}
    key={id}
    data-aos={position === "left" ? "slide-right" : "slide-left"}  // ⬅ dynamic direction
    data-aos-duration="1200"
  >
    <div className="edu-logo">
      <img src={logo} alt={`${cert} logo`} />
    </div>
    <div className="edu-text">
      <h5 className="cert">{cert}</h5>
      <p className="sch">{sch}</p>
      <p className="year">{year}</p>
      <p className="cgpa">{cgpa}</p>
    </div>
  </article>
))}


</div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
