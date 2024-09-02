import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

const data = [
  {
    title:
      "Designed and implemented the front-end interface with React for a seamless user experience.",
  },
  {
    title:
      "Utilized Material Design principles to create a clean, modern, and intuitive UI.",
  },
  {
    title: "Revamped the website layout and design for a modern look and feel.",
  },
  {
    title:
      "Enhanced website performance and loading speed by optimizing images and code.",
  },
  {
    title:
      "Implemented features such as note categorization, tagging, search functionality, and cloud synchronization.",
  },
];

const datas = [
  {
    title:
      "Use of modern technologies (HTML5, CSS3, JavaScript, React, Express, etc.).",
  },
  {
    title: "Intuitive and engaging user interface design.",
  },
  {
    title: "Responsive and mobile-friendly design.",
  },
  {
    title: "Tailored websites designed to meet specific business needs.",
  },
  {
    title: "Integration with third-party services and APIs.",
  },
  {
    title: "Scalable and secure web applications.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            {data.map((items, i) => {
              return (
                <li key={i}>
                  <BiCheck className="service_list-icon" />
                  <p>{items.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* End Of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            {datas.map((items, i) => {
              return (
                <li key={i}>
                  <BiCheck className="service_list-icon" />
                  <p>{items.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            {data.map((items, i) => {
              return (
                <li key={i}>
                  <BiCheck className="service_list-icon" />
                  <p>{items.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
