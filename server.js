const express = require('express');
const app = express();
const { port } = require('./config/env');
const bodyParser = require('body-parser');
const route = require('./api/index');
const helmet = require('helmet');

require('./dB/connection');                                                      // Db Connection

app.use(helmet())                                               //  Set various http headers for security purposes


app.use(bodyParser.urlencoded({ extended: false }));          // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                  // parse application/json

app.use('/', route);                                        // Route Initialized

app.listen(port, () => {
    console.log(`Server started at PORT: ${port}`);
});

