import { LogService, LogLevel, RichConsoleLogger } from "matrix-bot-sdk";
import { openAiEmail, openAiPassword, isGoogleLogin } from "./config.js";
import { ChatGPTAPIBrowser } from "chatgpt";
import express from "express";
import bodyParser from "body-parser";
// import puppeteer from "puppeteer";

var app = express();

LogService.setLogger(new RichConsoleLogger());

// Shows the Matrix sync loop details - not needed most of the time
// LogService.setLevel(LogLevel.DEBUG);

LogService.setLevel(LogLevel.INFO);

// LogService.muteModule("Metrics");
LogService.trace = LogService.debug;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  LogService.info("req", req);
  res.send("Welcome to chatGPT");
});

app.post("/conversation/chatGPT", async function (req, res) {
  try {
    // use puppeteer to bypass cloudflare (headful because of captchas)
    LogService.info("index", "Starting bot...");
    console.log("openAiEmail", openAiEmail);
    console.log("openAiPassword", openAiPassword);
    console.log("isGoogleLogin", isGoogleLogin);

    // const browser = await puppeteer.launch({
    //   headless: false,
    //   executablePath: "/usr/bin/chromium",
    // });
    // const page = await browser.newPage();
    // await page.setUserAgent(
    //   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    // );
    // const navigationPromise = page.waitForNavigation({
    //   waitUntil: "domcontentloaded",
    // });
    // await navigationPromise;
    // await page.waitForSelector('[aria-label="Listen only"]', {
    //   timeout: 60000, // or 0 for unlimited
    // });

    const api = new ChatGPTAPIBrowser({
      email: req.body.email ? req.body.email : openAiEmail,
      password: req.body.password ? req.body.password : openAiPassword,
      debug: true,
      isGoogleLogin: true,
      isMicrosoftLogin: false,
      executablePath: "/usr/bin/chromium",
      markdown: true,
    });

    LogService.info("index", "Bot started!");
    const session = await api.initSession();
    LogService.info("index", "Bot started!");
    LogService.info("session", session);
    const prompt = req.body.message;
    console.log("prompt---", prompt);
    const result = await api.sendMessage(prompt, {
      timeoutMs: 2 * 60 * 1000,
    });

    LogService.info("result", result.response);
    res.send(result.response);
    // api.refreshSession();
    // api.closeSession();
  } catch (error) {
    LogService.error("error", error);
    res.send(error);
  }
});

app.listen(8000, function () {
  console.log("Listening to Port 8000");
});
