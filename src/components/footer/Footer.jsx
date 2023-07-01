import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="go-top">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            className="go-top"
          >
            <i class="bx bx-up-arrow-alt"></i>
          </Link>
        </div>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/justin-chung-a7b966226/"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/justinc0251"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="mailto:jdchung@scu.edu"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
