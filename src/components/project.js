import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import global from "../styles/global.module.css";
import style from "../styles/project.module.css";

var Project = (props) => {
  let techs = JSON.parse(props.techs);

  let content = (
    <div
      className={`${global.flex_space_between} ${style.content} ${style.container}`}
    >
      <div className={`${global.flex_center} ${style.years_lines}`}>
        <p className={`${style.year}`}>{props.year}</p>
        <div className={`${style.year_line}`}></div>
        <div className={`${style.circle}`}>
          <FontAwesomeIcon icon={faCircle} />
          {props.last === "true" ? (
            ""
          ) : (
            <div className={`${style.circle_line}`}></div>
          )}
        </div>
      </div>
      <div className={`${style.project}`}>
        <div className={`${style.brand}`}>
          <h4>{props.brand}</h4>
          <p>{props.text}</p>
          <div className={`${style.techs}`}>
            {techs.map((tech) => (
              <img
                className={`${style.image}`}
                src={require(`../assets/images/tec_logos/${tech}`)}
                alt="brand"
                key={tech}
              />
            ))}
          </div>
          <a href={props.url}>{props.url}</a>
        </div>
        <img
          className={`${style.image} ${style.project_image}`}
          src={require(`../assets/images/${props.image}`)}
          alt="brand"
        />
      </div>
    </div>
  );

  return content;
};

export default Project;
//
