import global from "../styles/global.module.css";

var AboutMe = () => {
  let content = (
    <div className={`${global.container}`} id="about_me">
      <h1>About me</h1>
      <p>
        <i>I'll promise you'll find something interesting</i>
      </p>
    </div>
  );

  return content;
};

export default AboutMe;
