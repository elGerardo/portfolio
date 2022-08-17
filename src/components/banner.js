import global from "../styles/global.module.css";
import style from "../styles/banner.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

var Banner = () => {

    let content = 
    <div className={`${global.container} ${global.total_vh} ${style.banner}`}>
        <div className={`${style.content}`}>
            <img src={require('../assets/images/pic.jpg')}/>
            <p>Hi, I'm Gerardo
            a mexican <b>web developer</b>, 
            <b> programmer</b>, with creative and innovated <b>solutions</b> for you.</p>
        </div>
        <div className={`${global.btn_container} `}>
            <div className={`${global.btn}`}><FontAwesomeIcon icon={faArrowDown}/></div>
        </div>
    </div>
    return ( content )

};

export default Banner;