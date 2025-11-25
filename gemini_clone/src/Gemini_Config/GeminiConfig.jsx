// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({apiKey:"AIzaSyAZIHiuU5vHOd79Z9or1IA9veL4uYn6SCk"});

// export async function main(prompt) {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//   });
//   console.log(response.text);
// }

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AIzaSyAZIHiuU5vHOd79Z9or1IA9veL4uYn6SCk"});

export async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);

  return response.text;
}

