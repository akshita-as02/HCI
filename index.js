import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import readline from "readline";
import fs from 'fs';

// Load environment variables
dotenv.config();

// Initialize Google Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function generateContent(prompt) {
    try {
        const model = genAI.getGenerativeModel({ model:  "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("\nGenerated Response:");
        console.log(text.trim());

        // Save input and output to file
        const logData = `User Prompt: ${prompt}\nGenerated Response: ${text}\n\n`;
        fs.appendFileSync('output.txt', logData);
 
    } catch (error) {
        console.error("Error generating content:", error.message);
    } finally {
        rl.close();
    }
}

// Ask user for input
rl.question("Enter a prompt for the AI: ", (userInput) => {
    if (userInput.trim()) {
        generateContent(userInput.trim());
    } else {
        console.log("Prompt cannot be empty. Please try again.");
        rl.close();
    }
});