import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";

const RegisterForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !cPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== cPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ai-chat-bot-summarizer.onrender.com/api/auth/register",
        {
          username,
          email,
          password,
        }
      );

      if (response.status === 201) {
        toast.success("Registered successfully!");
        setTimeout(() => {
          onClose();
          navigate(0);
        }, 2000);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 404
      ) {
        const { message } = error;
        toast.error(message);
      } else if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        const { message } = error.response.data;
        toast.error(message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-black">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="block text-sm font-medium">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block text-black p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
        />
        <br />
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block text-black p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
        />
        <br />
        <label htmlFor="password" className="block text-sm font-medium">
          Password:
        </label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block text-black p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
        />
        <br />
        <label htmlFor="cPassword" className="block text-sm font-medium">
          Confirm Password:
        </label>
        <input
          type="password"
          value={cPassword}
          id="cPassword"
          onChange={(e) => setCPassword(e.target.value)}
          className="mt-1 block text-black p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
        />
        <br />
        <Button
          type="submit"
          disabled={loading}
          className={`${loading && "bg-gray-400"} w-full `}
        >
          {loading ? "Registering..." : "Register"}
        </Button>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="underline font-bold">
            Login
          </a>
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterForm;
