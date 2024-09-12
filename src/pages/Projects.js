import React from "react";
import project01 from "../img/projects/01.jpg";
import project02 from "../img/projects/02.jpg";
import project03 from "../img/projects/03.jpg";
import project04 from "../img/projects/04.jpg";
import project05 from "../img/projects/05.jpg";
import project06 from "../img/projects/06.jpg";

export default function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
