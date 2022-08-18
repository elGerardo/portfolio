import global from "../styles/global.module.css";
import style from "../styles/header.module.css";
import * as React from "react";
//import { Link } from "react-router-dom";

var Header = () => {
  let content = (
    <header className={`${style.header}`}>
      <div className={`${global.flex_space_between} ${global.container}`}>
        <h2>Gerardo</h2>
        <nav className={`${style.nav}`}>
          <a href="#about_me">about me</a>
          <a href="#my_travel">my travel</a>
          <a href="#portfolio">portfolio</a>
        </nav>
      </div>
    </header>
  );

  return content;
};

export default Header;
