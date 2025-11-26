
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:import.meta.VITE_API_URL});

export async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);

  return response.text;
}

