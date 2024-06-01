const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('morgan')
require('dotenv').config()
const express = require('express');
const app = express();

const { PORT = 3000, DB_HOST } = process.env;


// const formatsLogger = app.get("env") === "development" ? "dev" : "short";
// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
     res.send('Hello World!');
    });

mongoose.connect(DB_HOST)
.then( 
    () => {
    app.listen(PORT, () => console.log('Example app listening on port 3000! TEST TEST'));
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });


