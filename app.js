const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const path = require('path')
const jsonParser = bodyParser.json()
const fs = require("fs");

app.use('/', express.static(path.join(__dirname, 'public')))

app.post("/update", jsonParser, (req, res) => {
  console.log("Updating the online inventory system");
  const body = JSON.stringify(req.body);

  fs.writeFile("./public/productDB.json", body, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  
    console.log("data.json written correctly");
  });

  res.send("Updating the online inventory system");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})