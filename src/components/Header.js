import logo from '../assets/tofurino.png';
import './Header.css';

function Header() {
    return(
        <div className="Header">
            <img className="logo" src={logo} alt="TOFURINO"/>
        </div>
    )
}

export default Header;