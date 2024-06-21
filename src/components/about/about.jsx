import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade bottom duration={750} delay={100} distance="30px">
      <section className="about section" id="about">
        <Fade bottom duration={750} delay={200} distance="30px">
          <h2 className="section__title about__title">About</h2>
        </Fade>
        <div className="about__data">
          <Fade left duration={750} delay={300} distance="30px">
            <div className="about__img" />
          </Fade>
          <Fade right duration={750} delay={300} distance="30px">
            <p className="about__description">
              • Senior at Santa Clara University pursuing a B.S./M.S. in Computer
              Science and Engineering.
              <br></br>• Organized, hard-working, and open to learning new
              skills and starting new projects.
              <br></br>• Experienced in full-stack development with a focus on
              web and mobile development.
              <br></br>• Currently looking for a Software Engineering Internship
              for Summer 2025.
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default About;
