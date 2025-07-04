import React from "react";
import heroImg from "../assets/heroimg.jpg";
import Slider2img from "../assets/Slider2img.jpg";
import Slider1img from "../assets/Slider1img.jpg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaBehance,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/Hero.css";

import avatar1 from '../assets/1.jpg';
import avatar2 from '../assets/2.jpg';
import avatar3 from '../assets/3.jpg';
import avatar4 from '../assets/4.jpg';
import avatar5 from '../assets/5.jpg';

const Hero = () => {
  const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5];


  return (
    <section className="hero-contact-section" id="home">
      <div className="container">
        <div className="content">
          <div className="image-area">
            <img src={heroImg} alt="Hero" />
          </div>

          <div className="text-area">
            <h1>Hello,</h1>
            <h3>Are you looking for a web developer?</h3>
            <p>
              A passionate and detail-oriented web developer with experience in
              designing, building, and maintaining dynamic websites and web
              applications. Proficient in front-end technologies like HTML, CSS,
              JavaScript, and frameworks such as React, as well as back-end
              development using Node.js, Python, and database management with
              MySQL and MongoDB.
            </p>
            <div className="buttons">
              <a
                href="/resume.pdf"
                className="btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire now
              </a>
              <a href="#contact" className="btn primary">
                {" "}
                About me
              </a>
            </div>

            <div className="avatar-info">
              <span>
                <span className="count">100+</span> <br></br>Happy clients
              </span>
              <div className="avatars">
                {avatarImages.map((src, i) => (
                  <img key={i} src={src} alt={`Client ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="sliderImage ">
            <img src={Slider2img} alt="Slider2" />
            <img src={Slider1img} alt="Slider1" />
          </div>
        </div>
      </div>

      <div id="contct" className="contact-section">
        <div className="container contact-grid">
          {/* -------- Left column -------- */}
          <div className="contact-left">
            <h2>Contact us:</h2>
            <div className="left-box">
              <p className="headline">
                Let us <span className="accent">CONNECT</span> &{" "}
                <span className="accent">COLLABORATE</span>
              </p>

              <p className="subtext">
                To give you the best possible help, it would be great to learn a
                little more about you. Tell us what you're hoping to achieve.
              </p>
            </div>
          </div>

          {/* -------- Right column -------- */}
          <ul className="contact-list">
            <li>
              <div className="icon-box">
                <FaEnvelope className="icon" />
              </div>
              <div>
                <p>Anthonydavies@gmail.com</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <FaEnvelope className="icon" />
              </div>
              <div>
                <p>+234 916 737 7598</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <FaBehance className="icon" />
              </div>
              <div>
                <p>www.behance.net/Dipo1509</p>
              </div>
            </li>
            <li>
              <div className="icon-box">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div>
                <p>195, Adeniyi Jones Street, Ikeja, Lagos State</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
