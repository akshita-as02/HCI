# Gemini API Prompt Generator

This project is a **Node.js** application that leverages the **Google Gemini API** to generate creative text responses based on user input. The application accepts prompts via the terminal, generates content using the Gemini API, and saves both the **user prompt** and **AI-generated response** to a file called `output.txt`.

---

## 🚀 Features
✅ Accepts **user input** through the terminal  
✅ Uses the **Gemini API** for content generation  
✅ Saves the **prompt** and **AI response** to `output.txt`  
✅ Provides clear feedback when content is successfully saved  
✅ Includes error handling for improved reliability  

---

## 🛠️ Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. **Install Dependencies**
Run the following command to install the required libraries:
bash
Copy code
npm install @google/generative-ai dotenv readline fs

## ⚙️ Setup Instructions
1. Create a .env File

2. In the root of your project folder, create a .env file.
Add the following line inside .env:
GEMINI_API_KEY=your_gemini_api_key_here

3. Ensure "type": "module" is set in package.json
Open package.json and confirm this line is present:
{
  "type": "module"
}

## 🚀 Usage
Run the following command to start the application:
- node index.js

When prompted, enter a message for the AI to respond to:
- Enter a prompt for the AI: Write a motivational 'Hello World' message for new programmers.

The application will:
✅ Display the AI-generated response in the terminal
✅ Save both the user prompt and generated response to output.txt

## 📄 Example Output
Terminal Output:
- Enter a prompt for the AI: Write a poetic 'Hello World' message for developers.

Generated Response:

"Hello World, a whisper in code,
Where logic sparks and ideas unfold.
From keystrokes to dreams, your journey's begun,
Embrace each bug — you've already won!"

## output.txt File Content:

User Prompt: Write a poetic 'Hello World' message for developers.
Generated Response: "Hello World, a whisper in code,
Where logic sparks and ideas unfold.
From keystrokes to dreams, your journey's begun,
Embrace each bug — you've already won!"

## ❗ Error Handling
If you encounter issues while running the application, consider the following steps:

Invalid API Key Error:

Verify that your .env file contains the correct key.
Confirm that your Google Cloud project has Gemini API enabled.
1. **Empty Prompt Error:**
If you submit an empty prompt, the application will ask you to try again.

2. **Module Import Error:**
Ensure "type": "module" is correctly added to your package.json.

3. **Dependency Issues:**
Run the following command to confirm all required libraries are installed:
npm list

## 🔧 Future Improvements
Planned features to enhance the application:
✅ Add timestamping for saved entries.
✅ Include a clear command to reset the output.txt file.
✅ Develop a web interface for improved user experience.

##  📚 Resources
Google Gemini API Documentation
Node.js Official Documentation
Google Cloud Console

## 👩‍💻 Author
Akshita Singh