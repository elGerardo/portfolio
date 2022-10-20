import global from "../styles/global.module.css";
import style from "../styles/banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

var Banner = () => {
  let textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Developer,", "Creative,", "Innovator."],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  let content = (
    <div className={`${global.container} ${style.banner}`}>
      <div className={`${style.content} ${global.flex_space_between}`}>
        <div className={`${style.banner_text}`}>
          <p></p>
          <p>Hi, my name is Gerardo ;)</p>
          <p>
            I'm <span ref={textRef}></span>
          </p>
          <div>
            <a
              href="https://github.com/elGerardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={require("../assets/images/github.png")} alt="github" />
            </a>
            <a
              href="https://www.instagram.com/ggerardius/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/instagram.png")}
                alt="github"
              />
            </a>
          </div>
        </div>
        <img
          className={`${style.images}`}
          src={require("../assets/images/pic.jpg")}
          alt="gerardo's pic"
        />
      </div>
      <div className={`${global.btn_container} ${style.goDown}`}>
        <a href="#about_me">
          <p>Let's take the trip</p>
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </a>
      </div>
    </div>
  );
  return content;
  //creative
  //developer
  //innovated
};

export default Banner;
