import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <div>
              <h3 className="skills__name">HTML/CSS</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-typescript-plain colored"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-javascript-plain colored"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-react-original colored"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-react-original colored"></i>
            <div>
              <h3 className="skills__name">React Native</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-swift-plain"></i>
            <div>
              <h3 className="skills__name">Swift</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
