import React from "react";

const Accordion = ({
  title,
  content,
  date,
  location,
  isActive,
  onToggle,
  image,
}) => {
  return (
    <div className={`accordion-item ${isActive ? "active" : ""}`}>
      <div className="accordion-title" onClick={onToggle}>
        <div className="exp__info">
          <img src={image} alt="work" className="exp__img" />
          <div className="exp__details">
            <div className="exp__title">{title}</div>
            <div className="exp__date">{date}</div>
            <div className="exp__location">{location}</div>
          </div>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <ul className="accordion-list">
            {content.map((point, index) => (
              <li className="bullet-points exp__description" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
