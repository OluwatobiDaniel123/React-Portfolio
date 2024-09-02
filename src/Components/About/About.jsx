import React from "react";
import Me from "../../Assets/port2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>200+ Worldwide </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Project</h5>
              <small>80+ Completed </small>
            </article>
          </div>

          <p>
            Dedicated and innovative Web Developer with 3 years of experience in
            designing, developing, and managing complex web applications and
            sites. Proficient in front-end and back-end development, including
            HTML, CSS, JavaScript, and modern frameworks such as React and Node.
            Adept at creating responsive, user-friendly interfaces and
            optimizing web performance. Skilled in collaborating with
            cross-functional teams to deliver high-quality digital solutions
            that enhance user experience and drive business growth.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
