import logo from '../assets/tofurino.png';
import './Header.css';

function Header() {
    return(
        <div className="Header">
            <a href="/">
                <img className="logo" src={logo} alt="TOFURINO"/>
            </a>
        </div>
    )
}

export default Header;