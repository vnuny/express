const express = require("express");
let port = 3001;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World🫦"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
