import style from "../styles/footer.module.css";

var Footer = () => {
    let content = 
    <footer id={`${style.footer}`}>
        <div>
            <img src={require(`../assets/images/github.png`)} alt="github"/>
            <a href="https://github.com/elGerardo">https://github.com/elGerardo</a>
        </div>
    </footer>

    return content;
}

export default Footer;