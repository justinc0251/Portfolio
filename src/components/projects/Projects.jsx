import React from 'react'
import "./projects.css"
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>

      <div className="work__container container grid">
      {projectsData.map((item) => {
        return <ProjectItems item={item} key={item.id} />;
      })}
    </div>
    </section>
  )
}

export default Projects