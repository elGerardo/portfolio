import style from "../styles/footer.module.css";

var Footer = () => {
  let content = (
    <footer className={`${style.footer}`}>
      <div id="footer_content">
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
      </div>
    </footer>
  );
  return content;
};

export default Footer;
