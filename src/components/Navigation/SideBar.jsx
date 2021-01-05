import React, { useState, useEffect } from "react";
import logo from "../../image/logo.png";
import premium from "../../image/illustration-premium.png";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <nav style={{ height: height }} className="sideBar">
      <img src={logo} className="image" alt="" />
      <p className="list">
        <NavLink className="link" exact to="/">
          Home
        </NavLink>
        <NavLink className="link marginTop" to="/job">
          Search Job
        </NavLink>
        <NavLink className="link marginTop" to="/freelancer">
          Find Freelancer
        </NavLink>
        <NavLink className="link marginTop" to="/community">
          Community
        </NavLink>
      </p>
      <div className="prem">
        <img src={premium} className="premiumImage" alt="" />
        <p>
          Find more by <br /> <b>Premium</b>
        </p>
        <p className="button">Upgrade</p>
      </div>
    </nav>
  );
};

export default SideBar;
