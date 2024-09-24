import React from "react";
import "./style.css";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const activeLink = 'nav_list__link nav_list__link--active';
  const nonActiveLink = 'nav_list__link';
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>
          <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Home
              </NavLink>
              
            </li>
            <li className="nav-list__item">
            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : nonActiveLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
