import React from "react"
import ReactDOM from "react-dom/client"
import "./css/index.css"
import App from "./App"
import "slick-carousel/slick/slick.css"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "slick-carousel/slick/slick-theme.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
)
