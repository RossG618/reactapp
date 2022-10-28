import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-ugs5ayii6o2obmch.us.auth0.com"
    clientId="pT1cI0TuJ1soJbulCa0DwtBKY4RJakqx"
    redirectUri={"https://spartan-net.netlify.app/account"}
  >

      <App />
  </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
