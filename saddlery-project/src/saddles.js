import './saddlery.css';
import Header from './header';
import Footer from './footer';
import comingsoon from './comingsoon.jpeg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Saddles() {
    const [getSaddles, setGetSaddles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/saddles')
        .then((response) => setGetSaddles(response.data))
        .catch (error => {
            console.log(error.message);
        });
    }, []);

    return (
        <div className="hb-main-container">     
            <Header></Header>
            <div className="hb-inner-content">
            <div className="inner-content-title">
                <div className="card-container">
                    {getSaddles.map(getSaddles => (
                        <div className="saddle-card" key={getSaddles.id}>
                        <img src={comingsoon} alt="coming soon" height="100"/>
                        <h3>{getSaddles.saddle_name}</h3>
                        <p>{getSaddles.price}</p>
                       <Link to={`/saddles/${getSaddles.id}`}><button className="view-button">More Details</button></Link>
                    </div>))}
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Saddles;