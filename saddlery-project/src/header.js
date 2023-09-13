import './saddlery.css';
import hblogo from './hblogo.png';

function Header() {
    return (
        <div>
            <header className="hb-header">
                <img src={hblogo} alt="logo" height="190" />
            </header>     
        </div>
    );
}

export default Header;