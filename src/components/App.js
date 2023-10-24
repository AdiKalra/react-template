import "./App.css";
import { useEffect } from "react";

import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import FourthDiv from "./FourthDiv";
import FifthDiv from "./FifthDiv";
import SixthDiv from "./SixthDiv";
import SeventhDiv from "./SeventhDiv";
import Navbar from "./Navbar";

function App() {
  var slideIndex = 1;
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  useEffect(() => {
    showDivs(slideIndex);
  }, []);

  return (
    <div className="App">
      <div class="backgroundContainer">
        <div class="MainDiv">
          <div class="fIRSTiMAGE">
            <Navbar />

            <div class="Skate">
              <img src="FirstDiv/SakteBoard.png" alt="" />
            </div>
            <div class="readMore">
              <div class="inputbut">
                <a href="/">
                  <input type="button" value="READ MORE" class="input1" />
                </a>
              </div>
            </div>
          </div>

          <SecondDiv />
          <ThirdDiv />
          <FourthDiv />
          <FifthDiv plusDivs={plusDivs} />
          <SixthDiv />
          <SeventhDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
