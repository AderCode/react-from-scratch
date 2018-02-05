const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const path = require("path");
const clients = path.join(__dirname, "../client");

let app = express();

app.use(express.urlencoded({ extended: false })) // read on this
app.use(express.static(clients));
app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);


let port = 3000;
app.listen(
  port,
  console.log(`SERVER RUNNING. LISTENING ON PORT: ${port}`)
);
