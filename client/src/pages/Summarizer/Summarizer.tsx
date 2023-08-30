import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Root from "../../Layout/Layout";
import { Helmet } from "react-helmet";
import { formatText } from "../../utils/formattedText";
import { SpinnerLoader } from "../../components";

const Summarizer:React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState<null | string | unknown>(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_RAPID_API_KEY;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (query === "") {
      setError("No query specified");
      return;
    }
    setLoading(true);
    setResponse("");
    setError(null);

    const url =
      "https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey, // Provide you API key
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
      body: JSON.stringify({ text: query }), // Assuming API expects an object with 'text' property
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResponse(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Text Summarizer</title>
      </Helmet>
      <Root>
        <div className="bg-gradient-to-r p-2 text-white from-indigo-500 to-purple-500 min-h-[calc(100vh-60px)] w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mt-20 gap-5"
          >
            <img src="/images/summarize-1.jpg" alt="bot" width={80} />
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-5">
              ai summarizer
            </h1>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="mb-20 w-full max-w-[300px] md:max-w-[500px] flex flex-col gap-5"
          >
            <textarea
              cols={50}
              rows={10}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your text to summarize"
              className="p-3 text-black"
            ></textarea>
            <button
              type="submit"
              className="p-5 border-2 rounded-md bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-2xl hover:opacity-90"
            >
              Submit
            </button>
          </motion.form>

          {loading && <SpinnerLoader />}
          {(error as string) && (
            <div className="bg-white/50 p-2 px-4 rounded-md text-red-700 text-2xl">
              {error as string}
            </div>
          )}
          {!loading && !error && response && (
            <div className="border w-full md:max-w-[500px] p-4 rounded-2xl bg-purple-800 text-lg leading-8">
              {formatText(response)}
            </div>
          )}
        </div>
      </Root>
    </>
  );
}

export default Summarizer;
