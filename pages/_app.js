"use client";
import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../src/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
