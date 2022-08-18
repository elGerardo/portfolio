import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import global from "../styles/global.module.css";
import style from "../styles/my_travel.module.css";

var Travels = (props) => {

    console.log(props.image)

  let content = (
    <div className={`${global.flex_center} ${style.content}`}>
      <p className={`${style.year}`}>{props.year}</p>
      <div className={`${style.year_line}`}></div>
      <div className={`${style.circle}`}>
        <FontAwesomeIcon icon={faCircle} />
        {props.last === "true" ? "" : <div className={`${style.circle_line}`}></div>}
      </div>
      <p className={`${style.brand}`}>{props.brand}</p>
      
      <img
        className={`${style.image}`}
        
        src={require(`../assets/images/${props.image}`)}
        alt="brand"
      />
    </div>
  );

  return content;
};

export default Travels;
