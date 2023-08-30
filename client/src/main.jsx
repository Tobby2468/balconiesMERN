import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Auth0Provider
   domain="dev-2nm244ul22oof21k.us.auth0.com"
   clientId="bznes13sQfJ2eukeL0R059Rpkl1atgrh"
   authorizationParams={{
    redirect_uri: "http://127.0.0.1:5173"
   }}
   audience="http://127.0.0.1:8000"
   scope="openid profile email"
   >
   
   
   <App />
   </Auth0Provider>
  </React.StrictMode>
);
