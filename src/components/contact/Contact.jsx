import "aos/dist/aos.css";
import "./contact.css";
import AOS from "aos";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

// Initialize AOS animation
AOS.init({
  duration: 2000,
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_27i5rry",        // Your EmailJS service ID
      "template_vwddfjm",       // Your EmailJS template ID
      form.current,
      "wHiSBuJZX1O8hvw8N"        // Your EmailJS public key
    );

    e.target.reset();
  };

  return (
    <section id="contact" data-aos="zoom-in-down">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="underline"></div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>upjayasree3699@gmail.com</h5>
            <a href="mailto:upjayasree3699@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>



<article className="contact__option">
  <FaLinkedinIn className="contact__option-icon" />
  <h4>LinkedIn</h4>
  <h5>Your Name</h5>
  <a href="https://www.linkedin.com/in/jayasri999" target="_blank" rel="noreferrer">
    Send a message
  </a>
</article>


          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+919391653945</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919391653945"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

       <form ref={form} onSubmit={sendEmail}>
  <input type="text" name="name" placeholder="Your Full Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
  <button type="submit" className="btn btn-primary">Send Message</button>
</form>

      </div>
    </section>
  );
};

export default Contact;
