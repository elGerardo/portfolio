import style from "../styles/technologies.module.css";

var Technologies = (props) => {
  let content = (
    <div className={`${style.content}`}>
      <img
        src={require(`../assets/images/tec_logos/${props.image}`)}
        alt="brand"
      />
      <p>{props.title}</p>
    </div>
  );

  return content;
};

export default Technologies;
