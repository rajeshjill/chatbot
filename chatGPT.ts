import express from "express";
import request from "request";

const app = express();

// Replace YOUR_API_KEY with your actual API key
const API_KEY = "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";

app.get("/api/chatgpt", (req, res) => {
  // Extract the prompt from the query string
  const prompt =
    "tell me about aximsoft";

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
    } else {
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
