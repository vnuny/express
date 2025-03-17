const express = require("express");
const axios = require("axios");
let port = 3001;

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://cdn32.weecimaa.cfd/");
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
