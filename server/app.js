const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.text());
app.use(cors());

app.post("/api/generate", async (req, res) => {
  const prompt = JSON.parse(req.body).prompt;

  const openAiRequest = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an AI writing assistant that continues existing text based on context from prior text. " +
          "Give more weight/priority to the later characters than the beginning ones. " +
          "Limit your response to no more than 50 characters, but make sure to construct complete sentences.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
  };

  const openAiResponse = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    openAiRequest,
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`,
      },
    }
  );
  const content = openAiResponse.data.choices[0].message.content;
  res.json(content);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
