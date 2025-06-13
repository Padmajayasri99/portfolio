import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import myPic from '../../assets/mainpic.gif';


const Header = () => {
  return (
    <header>
      <div id="#home" className="header__container">
        <div className="firstContainer">
          <h3>Hello👋 I'm</h3>
          <h1>Padma Jayasri Undapalli</h1>
          <h5 className="text-light type">
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                "Software Developer",
                "Full Stack Developer",
                "Machine Learning Engineer",
                
              ]}
            />
          </h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="secondContainer">
          <div className="imgCon">
  <div className="glowWrapper">
    <img src={myPic} alt="me" className="profile" />
  </div>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
