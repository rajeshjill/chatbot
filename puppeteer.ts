import express from "express";
import bodyParser from "body-parser";

import { ChatGPTAPIBrowser } from "chatgpt";

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to chatGPT");
});

app.post("/conversation/chatGPT", async function (req, res) {
  try {
    const api = new ChatGPTAPIBrowser({
      email: "rajesh.axim@gmail.om",
      password: "Summar@2015",
      debug: true,
      isGoogleLogin: true,
      executablePath: "/usr/bin/google-chrome",
    });

    await api.initSession();

    const result = await api.sendMessage("Hello World!");
    console.log(result.response);
  } catch (error) {
    console.log("error----------------->", error);
    res.send(error).status(500);
  }
});

app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
