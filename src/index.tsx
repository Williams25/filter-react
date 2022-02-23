import React from "react";
import ReactDOM from "react-dom";
import { AnimeProvider } from "src/context/AnimesProvider";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
