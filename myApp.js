let express = require("express");
let app = express();

var absolutePath = __dirname + "/public";
var indexPath = __dirname + "/views/index.html";

app.use("/public", express.static(absolutePath));

app.get("/", function (req, res) {
  res.sendFile(indexPath);
});

module.exports = app;
