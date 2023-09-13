import './saddlery.css';
import axios from 'axios';
import { useState } from 'react';
import Header from './header';
import Footer from './footer';

function AddSaddle() {
    const [saddle, setSaddle] = useState({
        saddle_name: '',
        type: '',
        size: '',
        color: '',
        weight: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setSaddle({
            ...saddle,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSaddle = {
            saddle_name: saddle.saddle_name,
            type: saddle.type,
            size: saddle.size,
            color: saddle.color,
            weight: saddle.weight,
            price: saddle.price,
            description: saddle.description,
        };
        axios.post('http://localhost:3001/saddles', newSaddle)
        .then((response) => {
            console.log('a new saddle has been added', response, newSaddle);
        });
    };


    return (
        <div className="hb-main-container">     
        <Header></Header>    
         <div className="hb-inner-content">
          <div className="inner-content-title">
            <h1>Add a saddle</h1>
            <form onSubmit={handleSubmit}>
            <label>Saddle Name</label> <input type="text" name="saddle_name" value={saddle.saddle_name} onChange={handleChange}/><br/> 
            <label>Type</label>
                <select name="type" value={saddle.type} onChange={handleChange}>
                    <option value="barrel racing">Barrel Racing</option>
                    <option value="cutting">Cutting</option>
                    <option value="roping">Roping</option>
                    <option value="reining">Reining</option>
                    <option value="show">Show</option>
                    <option value="trail">Trail</option>
                    <option value="ranch">Ranch</option>
                    <option value="ranch roping">Ranch Roping</option>
                    <option value="ranch cutter">Ranch Cutter</option>
                    <option value="working">Working</option>
                    <option value="all around">All Around</option>
                </select><br/> 
            <label>Size</label> 
                <select name="size" value={saddle.size} onChange={handleChange}>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                </select><br/> 
            <label>Color</label> 
                <select name="color" value={saddle.color} onChange={handleChange}>
                    <option value="natural">Natural</option>
                    <option value="light oil">Light Oil</option>
                    <option value="medium oil">Medium Oil</option>
                    <option value="dark oil">Dark Oil</option>
                    <option value="chestnut">Chestnut</option>
                    <option value="antiqued">Antiqued</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="black">Black</option>
                </select><br/> 
            <label>Weight</label> <input type="text" name="weight" value={saddle.weight} onChange={handleChange}/><br/> 
            <label>Price</label> <input type="text" name="price" value={saddle.price} onChange={handleChange}/><br/> 
            <label>Description</label> <textarea name="description" value={saddle.description} onChange={handleChange}/><br/> 
            <button type="submit">Add Saddle</button>
            </form>
        </div>
       </div>
       <Footer></Footer>
      </div>
    );
}

export default AddSaddle;