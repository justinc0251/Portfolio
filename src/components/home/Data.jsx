import React from "react";
import Fade from "react-reveal/Fade";

const Data = () => {
  return (
    <div className="home__data">
      <Fade bottom duration={750} delay={100} distance="30px">
        <h1 className="home__title">Justin Chung</h1>
      </Fade>
      <Fade bottom duration={750} delay={200} distance="30px">
        <h3 className="home__subtitle"> Software Engineer</h3>
      </Fade>
    </div>
  );
};

export default Data;
