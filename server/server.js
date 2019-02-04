const express = require("express");
const cors = require("cors");
const getFavoriteCars = require("./favoriteCars");
const getSearchResults = require("./searchResults");

const app = express();

app.use(cors());

app.get("/favoriteCars", (_, res) => {
  getFavoriteCars().then(data => res.json(data));
});

app.get("/searchResults", (_, res) => {
  getSearchResults().then(data => res.json(data));
});

app.listen(process.env.PORT || 8081);
