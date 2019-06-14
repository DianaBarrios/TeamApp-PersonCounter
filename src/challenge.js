import React from "react";
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

        <div>
          <ImgRecognition />
        </div>
      </div>
    );
  }
}

export default Challenge;
