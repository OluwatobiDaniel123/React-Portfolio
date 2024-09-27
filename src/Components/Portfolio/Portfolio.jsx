import React from "react";
import Me from "../../Assets/me2.jpg";
import port1 from "../../Assets/port3.png";
import port4 from "../../Assets/port4.png";

import "./Portfolio.css";

const data = [
  {
    image: <img src={port1} alt="img" />,
    title:
      "Developed a fully functional e-commerce platform to enhance online sales and customer experience.",
    tech_use: "React, Node.js, Express, MongoDB, Stripe API",
    Github: "https://github.com/OluwatobiDaniel123/E-commerce-Market/tree/main",
    Demo: "https://e-commerce-market-plum.vercel.app/",
  },
  {
    image: <img src={Me} alt="img" />,
    title:
      "Created a social media application to connect users and enable content sharing.",
    tech_use: "React, Redux-Toolkit, Node.js, Express, MongoDB,",
    Github: "https://github.com",
    Demo: "https://github.com",
  },
  {
    image: <img src={Me} alt="img" />,
    title:
      "Developed a feature-rich to-do list application to help users manage tasks and boost productivity.",
    tech_use: "React, Redux, Node.js, Express, MongoDB",
    Github: "https://github.com",
    Demo: "https://github.com",
  },
  {
    image: <img src={port4} alt="img" />,
    title:
      "Developed an online banking with expense tracker application to help users manage and track their daily expenses.",
    tech_use: "React, Redux, Node.js, Express, MongoDB",
    Github: "https://github.com/OluwatobiDaniel123/easybanking",
    Demo: "https://easybanking-six.vercel.app/",
  },
  {
    image: <img src={Me} alt="img" />,
    title:
      "Created a note-taking application to enable users to create, organize, and manage their notes efficiently.",
    tech_use: "React, Redux, Node.js, Express, MongoDB",
    Github: "https://github.com",
    Demo: "https://github.com",
  },
  {
    image: <img src={Me} alt="img" />,
    title:
      "Created a note-taking application to enable users to create, organize, and manage their notes efficiently.",
    tech_use: "React, Redux, Node.js, Express, MongoDB",
    Github: "https://github.com",
    Demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="#portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((items, i) => {
          return (
            <article key={i} className="portfolio_item">
              <div className="portfolio_item-image">{items.image}</div>
              <h5>{items.title}</h5>
              <small>{items.tech_use}</small>

              <div className="portfolio_item-cta">
                <a href={items.Github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={items.Demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
