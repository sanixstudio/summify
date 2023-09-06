import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";

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
        console.log(response);
        toast.success("Logged in successfully!");
        localStorage.setItem("authToken", "true");
        console.log(response);
        navigate("/home");
      } else {
        toast.error("Login failed. Invalid credentials.");
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
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-black">
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
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-md hover:scale-105 transition-all"
        >
          Login
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginForm;
