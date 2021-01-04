import React from "react";
import "./HomeTopCompanies.css";
import google from "../../image/google.png";
import microsoft from "../../image/microsoft.jpg";
import apple from "../../image/apple.jpg";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

const HomeTopCompanies = () => {
  return (
    <div className="companies-box">
      <div className="companies-box-header">
        <h2>Featured Companies</h2>
        <div>
          <HiOutlineArrowNarrowLeft
            size={30}
            color="#f99560"
            style={{ marginRight: 25, cursor: "pointer" }}
          />
          <HiOutlineArrowNarrowRight
            color="#f99560"
            size={30}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="image-grid">
        <div className="img">
          <img src={google} alt="" />
        </div>
        <div className="img">
          <img src={microsoft} alt="" />
        </div>
        <div className="img">
          <img src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTopCompanies;
