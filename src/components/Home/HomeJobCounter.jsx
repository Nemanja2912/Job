import React, { useState, useEffect } from "react";
import "./HomeJobCounter.css";

const HomeJobCounter = ({ count }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < count)
      setTimeout(() => {
        setCounter((prevCount) => prevCount + 1);
      }, 0);
  }, [counter]);

  return (
    <div className="job-counter">
      <h2>Jobs Available:</h2>
      <p className="counter">{counter}</p>
      <p className="primaryButton">Find Job</p>
    </div>
  );
};

export default HomeJobCounter;
