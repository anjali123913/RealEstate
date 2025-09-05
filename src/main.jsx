import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="782500494915-pu0hkedog3omeoudi2qr4p6bei90gjsh.apps.googleusercontent.com"> */}

  
      <App />
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
