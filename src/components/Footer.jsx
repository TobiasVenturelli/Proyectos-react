import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import appStore from "./images/app_store_3x_d293084ca1.png";
import playStore from "./images/disponible_google_play_3x_c977cae3bc.png";
import logo from "./images/logo 2.jpg";

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"https://www.facebook.com"} className="me-3"><img src={facebook} alt={"Facebook"} width={"24"} /></a>
                    <a href={"https://twitter.com"} className="me-3"><img src={twitter} alt={"Twitter"} width={"24"} /></a>
                    <a href={"https://www.instagram.com"} className="me-3"><img src={instagram} alt={"Instagram"} width={"24"} /></a>
                    <a href={"https://www.youtube.com"}><img src={youtube} alt={"YouTube"} width={"24"} /></a>
                </div>
                <div className="col text-end">
                    <a href={"https://apps.apple.com"} target={"_blank"} rel="noreferrer" className="me-3"><img src={appStore} alt={"AppStore"} width={"115"} /></a>
                    <a href={"https://play.google.com"} target={"_blank"} rel="noreferrer"><img src={playStore} alt={"PlayStore"} width={"129"} /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end text-secondary">
                    <p><img src={logo} alt={"McDonalds Logo"} width={"40"} /> © Kendrak Shoes 2023</p>
                </div>
            </div>
        </div>

    )
}

export default Footer;