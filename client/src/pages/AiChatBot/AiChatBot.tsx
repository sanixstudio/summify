import { useState } from "react";
import { Comment } from "react-loader-spinner";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Root from "../../Layout/Layout";
import useFetchAiData from "../../hooks/useFetchAiData";
import { formatText } from "../../utils/formattedText";

const apiKey = import.meta.env.VITE_RAPID_API_KEY;
const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";
const host = "chatgpt-ai-chat-bot.p.rapidapi.com";

const AiChatBot: React.FC = () => {
  const [query, setQuery] = useState("");
  // const user = "Adi";

  const { response, error, loading, handleSubmit } = useFetchAiData(
    query,
    host,
    url,
    apiKey
  );

  return (
    <>
      <Helmet>
        <title>AI Chat-Bot</title>
      </Helmet>
      <Root>
        <div className="bg-gradient-to-r p-2 text-white from-indigo-500 to-purple-500 min-h-[calc(100vh-60px)] w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mt-20 gap-5"
          >
            <img src="/images/chatbot.png" alt="chatbot" width={80} />
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-5">
              ai chat-bot
            </h1>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="mb-20 w-full max-w-[300px] md:max-w-[500px] flex flex-col gap-5"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question..."
              className="p-4 w-full max-w-[300px]  md:max-w-[500px] text-black disabled:bg-slate-400 disabled:text-gray-600"
            />
            <button
              disabled={loading}
              type="submit"
              className="p-5 border-2 rounded-md bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-2xl hover:opacity-90"
            >
              Submit
            </button>
          </motion.form>

          {loading && (
            <div>
              <Comment
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperClass="comment-wrapper"
                color="purple"
                backgroundColor="#fff"
              />
            </div>
          )}
          {(error as string) && (
            <div className="bg-white/50 p-2 px-4 rounded-md text-red-700 text-2xl">
              {error as string}
            </div>
          )}
          {response && (
            <div className="border w-full md:max-w-[500px] p-4 rounded-2xl bg-purple-800 text-lg leading-8">
              {formatText(response)}
            </div>
          )}
          {response && (
            <button className="mt-5 bg-white/70 p-2 px-4 rounded-md text-gray-500">
              Save Chat
            </button>
          )}
        </div>
      </Root>
    </>
  );
}

export default AiChatBot;
