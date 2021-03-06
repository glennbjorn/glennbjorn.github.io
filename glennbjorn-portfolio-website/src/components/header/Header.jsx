import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA";
import DP from "../../assets/dp.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    alert(
      "Greetings! This website is still a work in progress, but you may proceed to look at what I currently have. Have a great day!"
    ),
    (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Glenn Bjorn</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />

          <HeaderSocials />

          <div className="dp">
            <img src={DP} alt="dp" />
          </div>

          <a href="#contacts" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    )
  );
};

export default Header;
