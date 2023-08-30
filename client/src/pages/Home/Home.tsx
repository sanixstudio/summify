import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Root from "../../Layout/Layout";

const Home:React.FC = () => {
  return (
    <Root>
      <div className="bg-gradient-to-r text-white from-indigo-500 pb-10 to-purple-500 min-h-[calc(100vh-60px)] w-full flex flex-col items-center text-xl">
        <motion.h1
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl m-20 mt-15 md:mt-40 font-bold uppercase text-center"
        >
          What do you want to do?
        </motion.h1>
        <div className="flex gap-10 flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              className="w-[200px] h-[200px] border border-white/30 hover:bg-white/10 transition-all flex flex-col justify-center items-center rounded-lg mb-3"
              to="/chatbot"
            >
              <img
                src="/images/chatbot.png"
                alt="chat bot"
                width={100}
                className=""
              />
            </Link>
            <span>Chat with AI Bot</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              className="w-[200px] h-[200px] border border-white/30  hover:bg-white/10 transition-all flex flex-col justify-center items-center rounded-lg mb-3"
              to="/summarizer"
            >
              <img src="/images/summarize-1.jpg" alt="chat bot" width={100} />
            </Link>
            <span>Summarize large Text</span>
          </motion.div>
        </div>
      </div>
    </Root>
  );
};

export default Home;
