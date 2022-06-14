const express = require("express");
const app = express();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./public/animecards.json"));
const animes = data.Animecards;

app.set("view engine", "hbs");
app.get("/winter", (req, res) => {
  res.render("index", { animecards: animes });
});

app.use(express.static("./public"));

app.listen(3000, () => console.log("Server started on port 3000"));
