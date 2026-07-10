import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

 const getGeminiResponse = async (message) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
    });

    return response.text;

  } catch (error) {
    console.error(error);
    return "Error generating response";
  }
};

export default getGeminiResponse;