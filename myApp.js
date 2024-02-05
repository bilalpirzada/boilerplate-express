require("dotenv").config();
let express = require("express");
let app = express();

var absolutePath = __dirname + "/public";
var indexPath = __dirname + "/views/index.html";

//middleware
app.use("/public", express.static(absolutePath));
// app.use(function (req, res, next) {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/", function (req, res) {
  res.sendFile(indexPath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "hello json" });
  }
});

app.get("/:word/echo", function (req, res) {
  var word = req.params.word;
  res.json({ echo: word });
});

app.get("/name", function (req, res) {
  var firstname = req.query.first;
  var lastname = req.query.last;
  res.json({ name: firstname + " " + lastname });
});

module.exports = app;
