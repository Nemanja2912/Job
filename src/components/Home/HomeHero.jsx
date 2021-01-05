import React from "react";
import "./HomeHero.css";
import image from "../../image/hero.png";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="heroSection">
      <div>
        <h1 className="title">Get Matched</h1>
        <h2>with jobs best suited to your skills</h2>
        <div className="buttonArea">
          <NavLink to="/Job">
            <p className="primaryButton">Find Job</p>
          </NavLink>
          <NavLink to="/Freelancer">
            <p className="secondaryButton">Find Freelancers</p>
          </NavLink>
        </div>
      </div>
      <div className="hero-img-div">
        <img src={image} className="imageStyle" alt="" />
      </div>
    </div>
  );
};

export default HomeHero;
