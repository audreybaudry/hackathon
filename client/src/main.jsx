import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizzPage from "./components/quizz/QuizzPage";
import App from "./App";
import Homepage from "./pages/Homepage";
import Questions from "./components/quizz/Questions";
import Results from "./pages/Results";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/quizz",
        element: <QuizzPage />,
      },
      { path: "/questions", element: <Questions /> },
      { path: "/resultats", element: <Results /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
