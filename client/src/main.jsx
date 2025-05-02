import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

// import axios from "axios";
// import customFetch from "./utils/customFetch.js";

// const data = await axios.get("/api/v1/test");
// console.log(data);

// const data = await customFetch.get("/test");
// console.log(data);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <ToastContainer position='top-center' />
//   </React.StrictMode>
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </StrictMode>
);
