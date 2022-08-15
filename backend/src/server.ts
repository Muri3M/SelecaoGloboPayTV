import express from "express";
import routes from "./routes";

import myDataSource from "./database";

myDataSource
  .initialize()
  .then(() => {
    console.log("Database connected 📚");
  })
  .catch((err) => {
    console.error("Error during Database connection:", err);
  });

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server started 👍");
});
