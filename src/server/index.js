var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
const AYLIENTextAPI = require("aylien_textapi");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("dist"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const LISTEN_PORT = 8080;

app.listen(LISTEN_PORT, function () {
    console.log("Example app listening on port 8080!");
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.get("/test", function (req, res) {
    res.send(mockAPIResponse);
});

app.post("/api/analyse", function (req, res) {
    // take form data, call api, return output json
    res.send(req.body);
    console.log(req.body)
});
