import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import { SpinnerLoader } from "./components/index.tsx";
import Home from "./pages/Home.tsx";
import { AiChatBot, Summarizer } from "./pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/chatbot",
    element: <AiChatBot />,
  },
  {
    path: "/summarizer",
    element: <Summarizer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<SpinnerLoader />} />
  </React.StrictMode>
);
