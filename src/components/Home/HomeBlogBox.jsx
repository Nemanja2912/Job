import React from "react";
import "./HomeBlogBox.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import image from "../../image/illustration-blog.png";

const HomeBlogBox = () => {
  return (
    <div className="blog-box">
      <h2>
        Helpful tips <br />
        from our blog
      </h2>
      <p className="blog-flex">
        <div className="blog-icon">
          <MdKeyboardArrowRight color="f99560" size={30} />
        </div>
        <img src={image} alt="" />
      </p>
    </div>
  );
};

export default HomeBlogBox;
