import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./certifications.css";

const certifications = [
  {
    id: 1,
    name: "NPTEL - Cloud IoT Edge ML",
    image: require("../../assets/nptel1.png"),
  },
  {
    id: 2,
    name: "NPTEL - Data Science for Engineers",
    image: require("../../assets/ds.png"),
  },
  {
    id: 3,
    name: "AIMLDS Internship Certificate",
    image: require("../../assets/aimlds.png"),
  },
  {
    id: 4,
    name: "Smart India Hackathon",
    image: require("../../assets/c2.jpg"),
  },
  {
    id: 5,
    name: "Google Cloud Skills Boost",
    image: require("../../assets/gc.png"),
  },
  {
    id: 6,
    name: "EDX - Java Programming",
    image: require("../../assets/edx.png"),
  },
  {
    id: 7,
    name: "TCS iON - Career Edge",
    image: require("../../assets/image.png"),
  },
  {
    id: 8,
    name: "IBM SQL Certification",
    image: require("../../assets/ibm.png"),
  },
  {
    id: 9,
    name: "CISCO - C++ Programming",
    image: require("../../assets/cpp.png"),
  },
  {
    id: 10,
    name: "CISCO - Python Programming",
    image: require("../../assets/py.png"),
  },
];

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="certifications">
      <h2 className="cert-title">📜 My Certifications</h2>

      <div className="cert-grid">
        {certifications.map(({ id, name, image }) => (
          <div
            key={id}
            className="cert-card"
            onClick={() => setModalImage(image)}
            data-aos="zoom-in"
          >
            <img src={image} alt={name} className="cert-img" />
            <h3>{name}</h3>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="cert-modal" onClick={() => setModalImage(null)}>
          <span className="close-btn">×</span>
          <img src={modalImage} alt="Full Certificate" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Certifications;
