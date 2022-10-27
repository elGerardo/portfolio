import global from "../styles/global.module.css";
import style from "../styles/about_me.module.css";
import Technologies from "../components/technologies";

var AboutMe = () => {
  let content = (
    <div className={`${global.container} `}>
      <br id="about_me" />
      <br />
      <br />
      <br />
      <h1>About me</h1>
      <p>
        <i>I'll promise you'll find something interesting</i>
      </p>
      <p>
        I'm a young student of 22 years, I am currently studying of Technologies
        of Information at the area of Multiplatform Develop Software at
        Universidad Tecnológica de Tijuana. I consider myself a self-taught
        person who enjoys what he does, because I really enjoy the world of
        software development. My work and school experience have shown me that I
        am actually doing things that I like, and although I still have a lot to
        learn, I am still enthusiastic about continuing to grow in the world of
        software development.
      </p>
      <div className={`${global.container} ${style.content}`}>
        <h3>Technologies I've managed</h3>
        <div className={`${global.container} ${global.flex_space_around}`}>
          <Technologies image="laravel.png" title="Laravel" />
          <Technologies image="net.png" title=".Net" />
        </div>
        <div className={`${global.container} ${global.flex_space_around}`}>
          <Technologies image="vue.png" title="Vue" />
          <Technologies image="bootstrap.png" title="Bootstrap Vue" />
          <Technologies image="react.png" title="React" />
        </div>
        <div className={`${global.container} ${global.flex_space_around}`}>
          <Technologies image="sqlserver.png" title="SQL Server" />
          <Technologies image="mysql.png" title="MySQL" />
        </div>
        <div className={`${global.container} ${global.flex_space_around}`}>
          <Technologies image="figma.png" title="Figma" />
          <Technologies image="adobexd.png" title="Adobe XD" />
          <Technologies image="photoshop.png" title="Photoshop" />
        </div>
      </div>
    </div>
  );

  return content;
};

export default AboutMe;
