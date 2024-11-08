import React from 'react';
import "./style.css";
import vk from "../../img/icons/vk.svg";
import insta from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://www.instagram.com/ando_tarverdyan/" target='_blank'>
                  <img src={insta} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://github.com/AndoAAA" target='_blank'>
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/andranik-tarverdyan-04a356319/" target='_blank'>
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2024 tarverdyan070@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
  )
}
