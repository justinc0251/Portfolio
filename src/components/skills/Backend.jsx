import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-cplusplus-plain colored"></i>
            <div>
              <h3 className="skills__name">C++</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-java-plain colored"></i>
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-nodejs-plain colored"></i>
            <div>
              <h3 className="skills__name">Node</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-php-plain colored"></i>
            <div>
              <h3 className="skills__name">PHP</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-express-original colored"></i>
            <div>
              <h3 className="skills__name">Express</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-python-plain colored"></i>
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
