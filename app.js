const express = require("express");
const app = express();
require('dotenv').config()
const apiRoutes = require('./routes/apiRoutes')

//middleware 
app.use(express.json());

app.use("/api", apiRoutes);

const port = process.env.PORT || 3000

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