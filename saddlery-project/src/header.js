import './saddlery.css';
import hblogo from './hblogo.png';
import Navigation from './navigation';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="hb-header">
                <Link to="/"><img src={hblogo} alt="logo" height="190" /></Link>
            </header>     
            <Navigation/>
        </div>
    );
}

export default Header;