import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ai-chat-bot-summarizer.onrender.com/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Logged in successfully!");
        localStorage.setItem("authToken", "true");
        navigate("/home");
      } else {
        toast.error("Login failed. Invalid.");
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 401
      ) {
        const { message } = error.response.data;
        toast.error("Login failed. " + message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/30 p-8 rounded-lg shadow-md w-96 text-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 text-black block p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 text-black block w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 px-4 rounded-md hover:scale-105 transition-all"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <a href="/register" className="underline font-bold">
          Register
        </a>
      </p>
      <Toaster />
    </motion.div>
  );
};

export default LoginForm;
