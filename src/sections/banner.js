import global from "../styles/global.module.css";
import style from "../styles/banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

var Banner = () => {
  let textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Developer", "Creative", "Innovator"],
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
          <span ref={textRef}></span>
        </div>
        <img src={require("../assets/images/pic.jpg")} alt="gerardo's pic" />
      </div>
      <div className={`${global.btn_container} ${style.goDown}`}>
        <a href="#about_me" className={`${global.btn}`}>
          <span>
            <FontAwesomeIcon icon={faArrowDown} />
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
