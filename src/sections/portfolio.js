import global from "../styles/global.module.css";
import Project from "../components/project";

var Portfolio = () => {
  let content = (
    <div className={`${global.total_vh}`}>
      <div className={`${global.container}`}>
        <br id="my_portfolio" />
        <br />
        <br />
        <h1>My Portfolio</h1>
        <p>
          <i>Here is my job</i>
        </p>
      </div>
      <Project
        brand="Weather APP"
        last="true"
        text="A simple app designed to have a fast view about the weather based on the user location, one of my first app's done on my student time."
        url="https://mycoolwheaterapp.netlify.app/"
        urlGithub="https://github.com/elGerardo/weather-app"
        image="weather_app.png"
        techs='["vue.png"]'
      />
      <Project
        brand="SCP API"
        last="true"
        text="An SCP API done with Laravel for Backend and Nuxt with Bootstrap Vue for FrontEnd. 
        This API provide information from the SCP Wiki, currently,
        on the web page there is a documentation of all the endpoints availables.
        There is two backend versions, one done with Laravel and MySQL which is in production and
        one done with .NET Core API and SQLServer."
        url="https://scpapidoc.netlify.app/"
        urlGithub="https://github.com/elGerardo/SCP-API"
        extraUrlGithub="https://github.com/elGerardo/SCP-API-net-core"
        image="scp_api.png"
        techs='["nuxt.png","bootstrap_vue.png","laravel.png","mysql.png"]'
      />
      <br />
      <br />
      <br />
    </div>
  );

  return content;
};

export default Portfolio;
