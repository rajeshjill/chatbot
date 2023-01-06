import express from "express";
import request from "request";
const app = express();
// Replace YOUR_API_KEY with your actual API key
const API_KEY = "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";
app.get("/api/chatgpt", (req, res) => {
    // Extract the prompt from the query string
    const prompt = "tell me about aximsoft";
    // Set up the request options
    const options = {
        url: "https://api.openai.com/v1/completions",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
        json: {
            prompt: prompt,
            model: "text-davinci-002",
            max_tokens: 2048,
        },
    };
    // Make the request to the OpenAI API
    request(options, (error, response, body) => {
        if (error) {
            // Handle any errors that occur
            console.error(error);
            res.status(500).send(error);
        }
        else {
            // Send the response back to the client
            res.send(body);
        }
    });
});
// Start the server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdEdQVC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NoYXRHUFQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUU5QixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixnREFBZ0Q7QUFDaEQsTUFBTSxPQUFPLEdBQUcscURBQXFELENBQUM7QUFFdEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDbkMsMkNBQTJDO0lBQzNDLE1BQU0sTUFBTSxHQUNWLHdCQUF3QixDQUFDO0lBRTNCLDZCQUE2QjtJQUM3QixNQUFNLE9BQU8sR0FBRztRQUNkLEdBQUcsRUFBRSx1Q0FBdUM7UUFDNUMsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLGFBQWEsRUFBRSxVQUFVLE9BQU8sRUFBRTtTQUNuQztRQUNELElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixVQUFVLEVBQUUsSUFBSTtTQUNqQjtLQUNGLENBQUM7SUFFRixxQ0FBcUM7SUFDckMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDekMsSUFBSSxLQUFLLEVBQUU7WUFDVCwrQkFBK0I7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0wsdUNBQXVDO1lBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsbUJBQW1CO0FBQ25CLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUMsQ0FBQyJ9