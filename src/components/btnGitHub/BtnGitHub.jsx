import React from "react";
import "./style.css";
import gitHubIcon from "./../../img/icons/gitHub-black.svg";


export default function BtnGitHub({link}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="git-icon" />
      GitHub repo
    </a>
  );
}
