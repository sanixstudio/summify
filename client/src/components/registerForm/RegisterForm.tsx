import { motion } from "framer-motion";

const RegisterForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/30 p-8 rounded-lg shadow-md w-96 text-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block p-2 w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
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
            className="mt-1 p-2 block w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="cPassword"
            name="cPassword"
            className="mt-1 p-2 block w-full border rounded-md shadow-sm outline-none focus:ring focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline font-bold">
          Login
        </a>
      </p>
    </motion.div>
  );
};

export default RegisterForm;
