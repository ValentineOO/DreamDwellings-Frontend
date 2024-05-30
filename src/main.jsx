import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
const redirect_uri = import.meta.env.VITE_AUTH0_REDIRECT_URI


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri,
        audience
      }}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
