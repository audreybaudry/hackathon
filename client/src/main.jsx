import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizzPage from "./components/quizz/QuizzPage";
import App from "./App";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {

        path: "/quizz",
        element: <QuizzPage />,},

    { path: "/",
        element: <Homepage />,

      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
