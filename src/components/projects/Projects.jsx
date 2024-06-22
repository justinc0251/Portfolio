import React from "react";
import "./projects.css";
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <Fade bottom duration={750} delay={200} distance="30px">
        <h2 className="section__title">Projects</h2>
      </Fade>
      <div className="work__container container">
        {projectsData.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
