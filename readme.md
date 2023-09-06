# AI-Powered Full-stack MERN Project ![Summify Chatbot](./client/public/images/chatbot_64.png)

## Overview

This documentation provides a comprehensive guide to the AI-Powered Full-stack MERN project. The project aims to create a web application that utilizes various technologies to implement an AI chat-bot and a text summarization feature.

### Features

1. **AI Chat-bot:** Users can engage in interactive conversations with an AI-powered chat-bot.
2. **Summarizer:** Users can input large blocks of text and receive concise summaries using AI-based text summarization.

### Technologies Used

#### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- jsonwebtoken for authentication

#### Frontend

- React (or Vite)
- Framer Motion for animations
- Helmet for security headers
- React Hot Toast for notifications
- React Loader Spinner for loading indicators
- Tailwind CSS for styling

#### AI APIs

- RapidAPI's [ChatGPT Ai Chat bot](https://rapidapi.com/yourdevmail/api/chatgpt-ai-chat-bot)
- RapidAPI's [Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)

## Setup

### Prerequisites

- Node.js (version X.X.X)
- MongoDB (installed and running)
- RapidAPI Account (for AI APIs)

### Backend Setup

1. Clone the repository: `git clone https://github.com/sanixstudio/summify.git`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `root` with the following content:
   ```
   DB_URI= <your mongoDB connection URI>
   JWT_SECRET= <your JWT secret>
   PORT=3001
   ```

## Front-end Setup

1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Enter the following content in `.env.local`:
   ```
   VITE_RAPID_API_KEY= <you rapid api key>
   ```