import React, { useState, useEffect } from "react";
import "./HomeTopCompanies.css";
import google from "../../image/google.png";
import microsoft from "../../image/microsoft.jpg";
import apple from "../../image/apple.jpg";
import facebook from "../../image/facebook.jpg";
import yandex from "../../image/yandex.jpg";
import samsung from "../../image/samsung.jpg";
import amazon from "../../image/amazon.jpg";
import cnn from "../../image/cnn.jpg";
import huawei from "../../image/huawei.jpg";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

const companiesList = [
  {
    name: "Google",
    image: google,
  },
  {
    name: "Facebook",
    image: facebook,
  },
  {
    name: "Microsoft",
    image: microsoft,
  },
  {
    name: "Apple",
    image: apple,
  },
  {
    name: "Yandex",
    image: yandex,
  },
  {
    name: "Samsung",
    image: samsung,
  },
  {
    name: "Amazon",
    image: amazon,
  },
  {
    name: "CNN",
    image: cnn,
  },
  {
    name: "Huawei",
    image: huawei,
  },
];

const HomeTopCompanies = () => {
  const [numStart, setNumStart] = useState(0);
  const [numEnd, setNumEnd] = useState(3);

  useEffect(() => {
    function checkNumInRow() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 130) {
        setNumStart(0);
        setNumEnd(3);
      }

      if (screenWidth <= 130) {
        setNumStart(0);
        setNumEnd(2);
      }
    }

    checkNumInRow();

    window.addEventListener("resize", checkNumInRow);

    // return window.removeEventListener("resize", checkNumInRow);
  }, []);

  const handleNext = () => {
    if (numEnd >= companiesList.length) return;

    setNumStart((prevNum) => prevNum + 1);
    setNumEnd((prevNum) => prevNum + 1);
  };

  const handlePrev = () => {
    if (numStart <= 0) return;

    setNumStart((prevNum) => prevNum - 1);
    setNumEnd((prevNum) => prevNum - 1);
  };

  return (
    <div className="companies-box">
      <div className="companies-box-header">
        <h2>Featured Companies</h2>
        <div>
          <HiOutlineArrowNarrowLeft
            size={30}
            color="#f99560"
            style={{
              marginRight: 25,
              cursor: numStart <= 0 ? "" : "pointer",
              opacity: numStart <= 0 ? "0.5" : "",
            }}
            onClick={handlePrev}
          />
          <HiOutlineArrowNarrowRight
            color="#f99560"
            size={30}
            style={{
              cursor: numEnd >= companiesList.length ? "" : "pointer",
              opacity: numEnd >= companiesList.length ? "0.5" : "",
            }}
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="image-grid">
        {companiesList.slice(numStart, numEnd).map((companies) => (
          <div className="img">
            <img src={companies.image} alt="" />
            <p className="companies-name">{companies.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTopCompanies;
