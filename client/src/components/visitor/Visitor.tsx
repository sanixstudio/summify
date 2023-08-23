import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Visitor = () => {
  return (
    <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center m-4"
      >
        <Link
          to="/home"
          className="block border-2 px-6 outline-none focus:bg-white/10 focus:rounded-3xl py-4 mb-2 hover:rounded-3xl md:hover:bg-white/10 transition-all active:bg-black/10"
        >
          <h1 className="text-3xl sm:text-4xl uppercase text-white font-bold">
            Explore as Visitor
          </h1>
        </Link>
        <span className="block text-white">No Login Needed</span>
      </motion.div>
    </div>
  );
};

export default Visitor;
