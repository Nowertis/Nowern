// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('First middleware');
//     res.send("Hello from express!");
// });

app.get('/', (req, res) => {
    res.send('Hi23');
  });

app.get('/test', (req, res) => {
    res.send('test');
  });

module.exports = app;