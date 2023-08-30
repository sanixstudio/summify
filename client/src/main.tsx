import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./App.tsx";
import { SpinnerLoader } from "./components/index.tsx";
import Home from "./pages/Home/Home.tsx";
import { AiChatBot, Login, Register, Summarizer } from "./pages/index.ts";
import { AuthProvider } from "./context/AuthContext.js";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { CookiesProvider } from "react-cookie";

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
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    <CookiesProvider>
      <AuthProvider>
        <Theme>
          <RouterProvider router={router} fallbackElement={<SpinnerLoader />} />
        </Theme>
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);
