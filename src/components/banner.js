import global from "../styles/global.module.css";
import style from "../styles/banner.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

var Banner = () => {

    let content = 
    <div className={`${global.container} ${style.banner}`}>
        <div className={`${style.content}`}>
            <img src={require('../assets/images/pic.jpg')} alt="gerardo's pic"/>
            <p>Hi, I'm Gerardo
            a mexican <b>web developer</b>, 
            <b> programmer</b>, with creative and innovated <b>solutions</b> for you.</p>
        </div>
        <div className={`${global.btn_container} ${style.goDown}`}>
            <a href="#about_me" className={`${global.btn}`}><span><FontAwesomeIcon icon={faArrowDown}/></span></a>
        </div>
    </div>
    return ( content )

};

export default Banner;