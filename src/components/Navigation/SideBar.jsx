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
      console.log("ok");
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <nav style={{ height: height }} className="sideBar">
      <img src={logo} className="image" alt="" />
      <ul className="list">
        <li>
          <NavLink className="link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="paddingTop">
          <NavLink className="link" to="/job">
            Search Job
          </NavLink>
        </li>
        <li className="paddingTop">
          <NavLink className="link" to="/freelancer">
            Find Freelancer
          </NavLink>
        </li>
        <li className="paddingTop">
          <NavLink className="link" to="/community">
            Community
          </NavLink>
        </li>
      </ul>
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
