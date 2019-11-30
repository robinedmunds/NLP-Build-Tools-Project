var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
dotenv.config();
const AYLIENTextAPI = require("aylien_textapi");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.static("dist"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

const LISTEN_PORT = 8080;

app.listen(LISTEN_PORT, function () {
    console.log("Express back-end app listening on port 8080!");
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

const callAylien = async (parent_response, url) => {
    try {
        const textapi = new AYLIENTextAPI({
            application_id: process.env.API_ID,
            application_key: process.env.API_KEY
        });

        textapi.classify({
            "url": url
        }, function (error, response) {
            if (error === null) {
                console.log(response);
                parent_response.send(response);
            };
        });
    } catch (err) {
        console.log("  callAylien error: " + err);
    };
};

app.post("/api/classify", (req, res) => {
    const REGEX_URL = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    if (REGEX_URL.test(req.body.url)) {
        const formURL = req.body.url;
        callAylien(res, formURL);
    } else {
        res.send("Error: Submitted URL invalid.");
    };
});
