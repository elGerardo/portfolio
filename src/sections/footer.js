import style from "../styles/footer.module.css";
import Pdf from "../files/CV.pdf";

var Footer = () => {
  let content = (
    <footer className={`${style.footer}`}>
      <div id="footer_content">
        <p>Do you like my job? Contact me using my social media </p>
        <a
          href="https://github.com/elGerardo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require(`../assets/images/github.png`)} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/ggerardius/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../assets/images/instagram.png")} alt="github" />
        </a>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <img src={require("../assets/images/cv.png")} alt="curriculum" />
        </a>
      </div>
    </footer>
  );
  return content;
};

export default Footer;
