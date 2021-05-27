// terminale:
// npm i express cors mysql2
// npm dotenv
//
// npm i nodemon --save-dev
// npm run dev

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const contentRoutes = require("./routes/content");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Server is running successfully" });
});

app.use("/auth", authRoutes);
app.use("/content", contentRoutes);

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));
