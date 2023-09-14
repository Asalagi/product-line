import './saddlery.css';
import Header from './header';
import Footer from './footer';
import comingsoon from './comingsoon.jpeg'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Saddles() {
    const [getSaddles, setGetSaddles] = useState([]);

    useEffect(() => {
        fetchSaddles();
    }, []);

    const fetchSaddles = () => {
        axios.get('http://localhost:3001/saddles')
        .then(res => {
            console.log(setGetSaddles, res.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

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
                    </div>))}
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Saddles;