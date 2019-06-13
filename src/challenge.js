import React from "react";
import { Route, Link } from "react-router-dom";
import ImgRecognition from "./components/ImgRecognition.jsx";

class Challenge extends React.Component {
  render() {
    return (
      <div>
        <div class="container ml-5">
          <header className="Challenge-header">
            <h1 class="text-secondary font-weight-bold">
              Engineering Challenge 2
            </h1>
          </header>
        </div>

        <div class="container my-5">
          <img
            src="https://us-central1-core-228912.cloudfunctions.net/raspberry-pi-a7?apiKey=MFDW!!HQ_!CCPK?Q?QJEGAKQ!ENFM%3C%3E(XGQ}BXAMM%3CQ:&dummy="
            class="img-fluid"
            alt="Responsive image"
          />
        </div>

        <div>
          <ImgRecognition />
        </div>
      </div>
    );
  }
}

export default Challenge;
