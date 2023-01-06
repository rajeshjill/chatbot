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
    }
    catch (error) {
        LogService.error("error", error);
        res.send(error);
    }
});
app.listen(8000, function () {
    console.log("Listening to Port 8000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFDckMscUNBQXFDO0FBRXJDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFFOUMsbUVBQW1FO0FBQ25FLHVDQUF1QztBQUV2QyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVuQyxvQ0FBb0M7QUFDcEMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBRXBDLDBDQUEwQztBQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXBELHlCQUF5QjtBQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUMs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