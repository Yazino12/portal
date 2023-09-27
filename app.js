const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const adan = {
  "number": "100200104",
  "password": "12342289"
};

const ridwan = {
  "number": "100200105",
  "password": "12342290"
};

const abdalla = {
  "number": "100200106",
  "password": "12342291"
};

const yasin = {
  "number": "100200107",
  "password": "12342292"
};

app.get("/", function(req, res) {
  res.render("login",{
    message: ""
  });
});

app.post("/", function(req, res) {
  const number = req.body.number;
  const password = req.body.password;
  if ((adan.number === number) && (adan.password === password)) {
    res.render("transcript");
  }else if((ridwan.number === number) && (ridwan.password == password)){
    res.render("transcript1");
  } else if((abdalla.number === number) && (abdalla.password == password)){
    res.render("transcript2");
  }else if((yasin.number === number) && (yasin.password == password)){
    res.render("transcript3");
  } else {
    res.render("login",{
      message: "Student number or password is incorrect"
    });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("listening on port 5000");
});
