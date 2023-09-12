
const saddle = require('./models/saddle-model');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("Hello")
});

app.post('/add-saddle', (req, res) => {
    saddle.addSaddle(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.listen(port, () => {
    console.log(`server is up and running on ${port}`)
});