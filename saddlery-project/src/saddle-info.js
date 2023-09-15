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
            <p className="price-tag">{getDetails.price}</p>
                <div className="detail-img-container">
                <img src={comingsoon} alt="coming soon" height="200"/>
                <div className="detail-content">
                    <div className="detail-item go-right">Type </div>
                    <div className="detail-item go-right">Size</div>
                    <div className="detail-item go-right">Color</div>
                    <div className="detail-item go-right">Weight</div>
                </div>
                <div className="detail-content">
                    <div className="detail-item">{getDetails.type}</div>
                    <div className="detail-item">{getDetails.size}"</div>
                    <div className="detail-item">{getDetails.color}</div>
                    <div className="detail-item">{getDetails.weight} lbs.</div>
                </div>
                </div>
                <button>Edit</button>  <button>Delete</button>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SaddleDetails;