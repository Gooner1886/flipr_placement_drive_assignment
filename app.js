const express = require("express");
const app = express();
require('dotenv').config()
const tests = require('./routes/tests');
const geocodings = require('./routes/geocodings')

//middleware 
app.use(express.json());

/* app.use("/api/v1", tests); */

app.use("/api/geocoding", geocodings);

const port = 3000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start()