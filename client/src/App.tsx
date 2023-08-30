import React from "react";
import "./App.css";
import { LoginForm, Visitor } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen gap-2 overflow-hidden text-xl">
      <Visitor />
      <span className="hidden text-3xl absolute lg:block top-1/2 left-1/2 -ml-10 -mt-10 rounded-full bg-white p-2.5 py-3 shadow-lg">
        OR
      </span>
      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 py-4">
        <LoginForm />
      </div>
    </div>
  );
}

export default App
