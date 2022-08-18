import global from "../styles/global.module.css";
import Travel from "./travels";

var MyTravel = () => {
  let content = (
    <div className={`${global.container} ${global.total_vh}`}>
      <br id="my_travel"/>
      <br />
      <br /> 
      <h1>My Travel</h1>
      <p>
        <i>My travel hasn't finished</i>
      </p>
      <Travel
        year="09/2021 - 06/2022"
        brand="BajaDevelopers"
        last="false"
        image="pic.jpg"
      />
      <Travel year="09/2021" brand="Multitaskr" last="true" image="pic.jpg" />
    </div>
  );

  return content;
};

export default MyTravel;
