import React, { useState } from "react";
import "./certifications.css";

const certifications = [
  {
    id: 1,
    name: "NPTEL- Cloud IOT Edge ML ",
    image: require("../../assets/nptel1.png"), 
  },
  {
    id: 2,
    name: "NPTEL -Data Science for Engineers",
    image: require("../../assets/ds.png"),
  },
  {
    id: 3,
    name: "AIMLDS Internship Certificate",
    image: require("../../assets/aimlds.png"),
  },
  {
    id: 3,
    name: "Smart India Hackathon",
    image: require("../../assets/c2.jpg"),
  },
  {
    id: 4,
    name: "Google Cloud Skills Boost",
    image: require("../../assets/gc.png"),
  },
  {
    id: 5,
    name: "EDX Academy-Java Programming",
    image: require("../../assets/edx.png"),
  },
  {
    id: 6,
    name: "TCS iON Career Edge - Young Professional ",
    image: require("../../assets/image.png"),
  },
  {
    id: 7,
    name: "IBM SQL Certification",
    image: require("../../assets/ibm.png"),
  },
  {
    id: 8,
    name: "CISCO- Programming Essentials in CPP",
    image: require("../../assets/cpp.png"),
  },
  {
    id: 9,
    name: "CISCO- Prgramming Essentials in PYTHON",
    image: require("../../assets/py.png"),
  },
];

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="certifications">
      <h5>My Credentials</h5>
      <h2>Certifications</h2>
      <div className="underline"></div>

      <div className="certifications__container">
        {certifications.map(({ id, name, image }) => (
          <div key={id} className="cert-card">
            <h3>{name}</h3>
            <img
              src={image}
              alt={name}
              onClick={() => setModalImage(image)}
              className="cert-img"
            />
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close-btn" onClick={() => setModalImage(null)}>❌</span>
          <img src={modalImage} alt="Full View" className="modal-img" />
        </div>
      )}
    </section>
  );
};

export default Certifications;
