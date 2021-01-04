import React from "react";
import HomeHero from "./HomeHero";
import HomeIndustryTag from "./HomeIndustryTag";
import "./HomePage.css";
import HomeTopCompanies from "./HomeTopCompanies";
import HomeJobCounter from "./HomeJobCounter";
import HomeResumeBox from "./HomeResumeBox";
import HomeBlogBox from "./HomeBlogBox";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <div className="grid2">
        <HomeIndustryTag />
        <HomeTopCompanies />
      </div>
      <div className="grid3">
        <HomeJobCounter count={5650} />
        <HomeResumeBox />
        <HomeBlogBox />
      </div>
    </>
  );
};

export default HomePage;
