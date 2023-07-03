import React from "react";

const ProjectItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work_content">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__stack">
          {item.stack.map((stackItem, index) => (
            <React.Fragment key={index}>
              <span className="work__stack-item">{stackItem}</span>
            </React.Fragment>
          ))}
        </div>
        <p className="work__description">{item.description}</p>
        <div className="work__links">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
          <a
            href={item.github}
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <img src={item.image} alt="" className="work__img" />
    </div>
  );
};

export default ProjectItems;
