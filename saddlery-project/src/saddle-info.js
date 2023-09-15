import './saddlery.css';
import Header from './header';
import Footer from './footer';
import comingsoon from './comingsoon.jpeg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SaddleDetails() {
    const [getDetails, setGetDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/saddles/${id}`)
        .then((response) => setGetDetails(response.data))
        .catch (error => {
            console.log('here is an error message.', error.message);
        });
    }, [id]);

    return (
        <div className="hb-main-container">     
            <Header></Header>
            <div className="hb-inner-content">
            <div className="inner-content-title">
            <h2>{getDetails.saddle_name}</h2>
            <p>Finding your perfect saddle starts here.</p>
                <div className="card-container">
                <img src={comingsoon} alt="coming soon" height="100"/>
                </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SaddleDetails;