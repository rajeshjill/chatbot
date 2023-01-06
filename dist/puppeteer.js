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
    }
    catch (error) {
        console.log("error----------------->", error);
        res.send(error).status(500);
    }
});
app.listen(8000, function () {
    console.log("Listening to Port 8000");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcGV0ZWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vcHVwcGV0ZWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFFckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTVDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLDBDQUEwQztBQUMxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXBELHlCQUF5QjtBQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLFdBQVcsR0FBRyxFQUFFLEdBQUc7SUFDeEQsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQWlCLENBQUM7WUFDaEMsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixRQUFRLEVBQUUsYUFBYTtZQUN2QixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGNBQWMsRUFBRSx3QkFBd0I7U0FDekMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMsQ0FBQyJ9