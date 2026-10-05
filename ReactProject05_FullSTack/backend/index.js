import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Ha bhai milaya backend" });
});

app.listen(5000, () => {
  console.log("Server started");
});
