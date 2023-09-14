import './saddlery.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav-bar">   
          <div className="nav-container">
            <Link to="/about" className="main-links">About</Link>
            <Link to="/saddles" className="main-links">Saddles</Link>
            <Link to="/add-saddle" className="main-links">Add Saddle</Link>
            <Link to="/contact" className="main-links">Contact Us</Link>
          </div>
        </div>
    );
}

export default Navigation;