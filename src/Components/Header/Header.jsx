import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Me from "../../Assets/me.png";
import HeaderSocials from "./HeaderSocials";

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Header = () => {
  const words = [
    "Fullstack -Developer",
    "BackEnd -Developer",
    "FrontEnd- Developer",
  ];

  const [currentWord, setcurrentWord] = useState(0);

  useEffect(() => {
    const changeText = () => {
      setcurrentWord((prevWord) => (prevWord + 1) % words.length);
    };

    const interval = setInterval(changeText, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <header>
      <div className="container header_container">
        <div className="text">
          <h3 className="text-light">Hello I am</h3>
          <h1>Oluwatobi Daniel</h1>
          <h5>And I am A</h5>
        </div>
        <div className="text-light">
          {words.map((word, i) => {
            return (
              <div
                key={i}
                className={`word ${i === currentWord ? "visible" : ""}`}
              >
                {word.split("").map((letter, i) => (
                  <span key={i} className="letter">
                    {letter}
                  </span>
                ))}
              </div>
            );
          })}
        </div>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="img" />
        </div>

        <a href="#contact" className="scroll_down">
          <MdKeyboardDoubleArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
