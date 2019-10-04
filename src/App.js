import React from "react";
import logo from "./logo.png";
import "./App.scss";

function App() {
  return (
    <div className="App__wrapper">
      <img src={logo} alt="Parikrama Logo" className="App__logo" />
      <p className="App__description">
        Parikrama, is a mobile app to get possible list for Durga Puja 2019
      </p>
      <a
        className="App__button"
        href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40phoenixtw/parikrama-mobile-9388b2c564774f8785a23f8d41b084f4-signed.apk"
      >
        Download
      </a>
    </div>
  );
}

export default App;
