import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.ZOHO.embeddedApp.on("PageLoad", (data) => {
  console.log(data);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App data={data} />
    </React.StrictMode>
  );
});
window.ZOHO.embeddedApp.init();