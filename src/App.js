import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SecondDiv from "./components/SecondDiv";
import SkateBoard from "./images/SakteBoard.png";
import ThirdDiv from "./components/ThirdDiv";
import FourthDiv from "./components/FourthDiv";
import FifthDiv from "./components/FifthDiv";
import SixthDiv from "./components/SixthDiv";
import SeventhDiv from "./components/SeventhDiv";

function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="first-container z-0 position-relative">
        <img
          src={SkateBoard}
          alt="na"
          className="position-absolute skateboard-img"
          width={"80%"}
          height={"100%"}
        />
      </div>
      <SecondDiv />
      <ThirdDiv />
      <FourthDiv />
      <FifthDiv />
      <SixthDiv />
      <SeventhDiv />
    </div>
  );
}

export default App;
