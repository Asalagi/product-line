import './saddlery.css';

function AddSaddle() {
    return (
        <div>     
            <h1>Add a saddle</h1>
            <label>Saddle Name</label> <input type="text" name="saddle_name" /><br/> 
            <label>Type</label>
                <select>
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
                <select>
                    <option value="13">13"</option>
                    <option value="14">14"</option>
                    <option value="15">15"</option>
                    <option value="16">16"</option>
                    <option value="17">17"</option>
                </select><br/> 
            <label>Color</label> 
                <select>
                    <option value="natural">Natural</option>
                    <option value="light oil">Light Oil</option>
                    <option value="medium oil">Medium Oil</option>
                    <option value="dark oil">Dark Oil</option>
                    <option value="chestnut">Chestnut</option>
                    <option value="antiqued">Antiqued</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="black">Black</option>
                </select><br/> 
            <label>Weight</label> <input type="text" name="weight" /><br/> 
            <label>Price</label> <input type="text" name="price" /><br/> 
            <label>Description</label> <textarea name="description" /><br/> 
        </div>
    );
}

export default AddSaddle;