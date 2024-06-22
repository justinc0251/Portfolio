import React, { useState } from "react";
import "./experience.css";
import Fade from "react-reveal/Fade";
import Accordion from "./Accordion";
import { accordionData } from "./Data";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Fade bottom duration={750} delay={100} distance="30px">
      <section className="experience section" id="experience">
        <Fade bottom duration={750} delay={200} distance="30px">
          <h2 className="section__title" id="experience-title">
            Experience
          </h2>
        </Fade>
        <Fade bottom duration={750} delay={300} distance="30px">
          <div className="container accordion">
            {accordionData.map(({ title, content, image, date, location }, index) => (
              <Accordion
                key={index}
                title={title}
                date={date}
                location={location}
                content={content}
                image={image}
                isActive={activeIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </Fade>
      </section>
    </Fade>
  );
}

export default Experience;
