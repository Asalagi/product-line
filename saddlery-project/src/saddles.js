import './saddlery.css';
import Header from './header';
import Footer from './footer';
import comingsoon from './comingsoon.jpeg'

function Saddles() {
    return (
        <div className="hb-main-container">     
            <Header></Header>
            <div className="hb-inner-content">
            <div className="inner-content-title">
                <div className="card-container">
                    <div className="saddle-card">
                        <img src={comingsoon} alt="coming soon" height="100"/>
                        <h3>saddle name</h3>
                        <p>price</p>
                    </div>
                    <div className="saddle-card">
                        <img src={comingsoon} alt="coming soon" height="100"/>
                        <h3>saddle name</h3>
                        <p>price</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Saddles;