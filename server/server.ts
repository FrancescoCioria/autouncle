import * as express from "express";
import * as cors from "cors";
import getFavoriteCars from "./favoriteCars";
import getSearchResults from "./searchResults";

const app = express();

app.use(cors());

app.get("/favoriteCars", (_, res) => {
  getFavoriteCars().then(data => res.json(data));
});

app.get("/searchResults", (_, res) => {
  getSearchResults().then(data => res.json(data));
});

app.listen(process.env.PORT || 8081);
