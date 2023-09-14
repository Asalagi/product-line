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
        fetchSaddles();
    }, []);

    const fetchSaddles = () => {
        axios.get('http://localhost:3001/saddles')
        .then(response => {
            if(Array.isArray(response.data)) {
                setGetSaddles(response.data);
            } else {
                console.error('This is not an array');
            }
        })
        .catch(error => console.error('Something is wrong', error));
    };

    return (
        <div className="hb-main-container">     
            <Header></Header>
            <div className="hb-inner-content">
            <div className="inner-content-title">
                <div className="card-container">
                    {getSaddles.map(getSaddles => (
                        <div className="saddle-card">
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