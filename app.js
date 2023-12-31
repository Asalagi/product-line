require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const saddle = require('./models/saddle-model');
const { response } = require('express');
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get('/saddles', async (req, res) => {
    try {
        const response = await saddle.getSaddles();
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/saddles/:id', async (req, res) => {
    try {
        const saddleId = req.params.id;
        const response = await saddle.getSaddleById(saddleId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/saddles', (req, res) => {
    saddle.addSaddle(req.body)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

app.delete('/saddle/:id', (req, res) => {
    saddle.deleteSaddle(req.params.id)
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