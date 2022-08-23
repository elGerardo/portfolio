import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import global from "../styles/global.module.css";
import style from "../styles/my_travel.module.css";

var Travels = (props) => {

    console.log(props.image)

  let content = (
    <div className={`${global.flex_space_between} ${style.content} ${style.container}`}>
      <div className={`${global.flex_center} ${style.years_lines}`}>
        <p className={`${style.year}`}>{props.year}</p>
        <div className={`${style.year_line}`}></div>
        <div className={`${style.circle}`}>
          <FontAwesomeIcon icon={faCircle} />
          {props.last === "true" ? "" : <div className={`${style.circle_line}`}></div>}
        </div>
      </div>
      <div className={`${style.project}`}>
        <div className={`${style.brand}`}>
          <h4>{props.brand}</h4>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
        </div>
        <img
          className={`${style.image}`}
          src={require(`../assets/images/${props.image}`)}
          alt="brand"
        />
      </div>
    </div>
  );

  return content;
};

export default Travels;
