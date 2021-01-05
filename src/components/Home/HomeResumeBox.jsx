import React from "react";
import "./HomeResumeBox.css";

const HomeResumeBox = () => {
  return (
    <div className="resume-box">
      <div>
        <h2>No bots!</h2>
        <p className="resume-text">
          Your resume will be personally reviewed by our staff and matched with
          an available job that best meets your qualifications.
        </p>
      </div>
      <p className="primaryButton">Post Resume</p>
    </div>
  );
};

export default HomeResumeBox;
