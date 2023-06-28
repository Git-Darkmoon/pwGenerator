import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./styles/index.css"
import "react-toastify/dist/ReactToastify.css"
import { AppProvider } from "./Components/Context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
