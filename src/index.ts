import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/about", (req, res) => {
  res.send("Hello World about to Express!");
});

app.listen(8000, () => {
  console.log("New server started on port 8000");
});
