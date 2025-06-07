import "aos/dist/aos.css";
import "./services.css";
import AOS from "aos";
import { CiMobile1 } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { MdGraphicEq } from "react-icons/md";
import { FaAward, FaMedal,FaGoogle, FaUsers, FaTrophy } from "react-icons/fa";
// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    Icon: FaAward,  // award icon for CGPA achievement
    title: "Academic Excellence",
    desc: "Achieved a CGPA of 9.49 – Ranked in the top 3 of Campus",
    color: "#1E90FF", // DodgerBlue
    aos: "fade-right",
  },
  {
    id: 2,
    Icon: FaCode, // code icon for coding challenges
    title: "Coding Challenges",
    desc: "Solved over 100+ coding challenges on Leetcode – Focused on Java",
    color: "#28a745", // Green
    aos: "fade-left",
  },
   {
  id: 6,
  Icon: FaMedal, // you can import FaMedal from react-icons/fa
  title: "SIH Top 50 Teams",
  desc: "Shortlisted among the top 50 teams in the college-level Smart India Hackathon (SIH) for the project 'MatchMart'",
  color: "#ff4500",
  aos: "fade-left",
},

  {
    id: 3,
    Icon: FaGoogle, // Google icon for Google program
    title: "Google Computing Skills",
    desc: "Completed the Google Cloud  Computing Skills Program",
    color: "#DB4437", // Google Red
    aos: "fade-right",
  },
  {
    id: 4,
    Icon: FaUsers, // users/group icon for organizing events
    title: "Event Organizer",
    desc: "Organized many events at college – Fostered student engagement",
    color: "#FFA500", // Orange
    aos: "fade-left",
  },
  {
    id: 5,
    Icon: FaTrophy, // trophy icon for competition achievements
    title: "Coding Competitions",
    desc: "Participated in many Leetcode,Hackerrank coding competitions – Stood among the top 100",
    color: "#800080", // Purple
    aos: "fade-right",
  },
 
];
const Services = () => {
  return (
    <section id="services">
      <h5> Hurrah! </h5>
      <h2> My Achievements </h2>
      <div className="underline"></div>

      <div className="container portfolio_container">
        {data.map(({ id, Icon, title, desc, color, aos }) => {
          return (
            <article className="portfolio_item" key={id} data-aos={aos}>
              <Icon className="icon" />
              <h3 className="service__title"> {title} </h3>
              <span>{desc}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
