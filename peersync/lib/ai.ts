import { generateText } from "ai";

const { text } = await generateText({
  model: "openai/o4-mini",
  prompt: "What is love?",
});