const express = require("express");
const app = express();
require('dotenv').config()
const apiRoutes = require('./routes/apiRoutes')

//middleware 
app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!")
})

const port = process.env.port || 3000

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