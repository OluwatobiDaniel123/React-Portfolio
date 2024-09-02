import React from "react";
import "./Exprience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Exprience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Experiences</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>Reactjs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          {" "}
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>Expressjs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                {" "}
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />

              <div>
                {" "}
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprience;
