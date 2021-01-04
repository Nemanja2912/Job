import React, { useState } from "react";

const job = {
  marginTop: 30,
  background: "#ffffff",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: 30,
  display: "grid",
  gridTemplateColumns: "max-content 1.25fr 1fr max-content",
  gridAutoRows: "100%",
  padding: "40px 50px",
  alignItems: "center",
  cursor: "pointer",
  gridColumnGap: 25,
};

const image = {
  width: 75,
  height: "100%",
};

const img = {
  objectFit: "contain",
  width: "100%",
  height: "100%",
};

const opacity = {
  opacity: "0.7",
};

const title = {
  marginBottom: "10px",
};

const selector = {
  height: 20,
  width: 20,
  backgroundColor: "#dadcdd",
  borderRadius: "50%",
  position: "absolute",
  left: "-75px",
  top: "50%",
  transform: "translate(0,-50%)",
  cursor: "pointer",
};

const radio = {
  display: "none",
};

const Job = ({ jobId, logo, company, location, jobName, date }) => {
  const handleCheck = () => {};

  const today = new Date();
  const created = new Date(date);

  const addedDate = (
    (today.getTime() - created.getTime()) /
    (1000 * 3600 * 24)
  ).toFixed();

  return (
    <div style={{ position: "relative" }}>
      <input style={radio} type="radio" id={jobId} name="job" value="job" />
      <label onClick={handleCheck} htmlFor={jobId}>
        <div className="selector" style={selector}></div>
        <div className="job" style={job}>
          <div style={image}>
            <img src={logo} style={img} alt="" />
          </div>
          <div>
            <div>
              <h4 style={title}>{jobName}</h4>
              <p style={opacity}>{company}</p>
            </div>
          </div>
          <div style={{ marginLeft: "25px" }}>
            <h4 style={title}>{location}</h4>
            <p style={opacity}>Location</p>
          </div>
          <div>
            <h4 style={{ ...title, textAlign: "center" }}>{addedDate}d ago</h4>
            <p style={opacity}>Added Before</p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Job;
