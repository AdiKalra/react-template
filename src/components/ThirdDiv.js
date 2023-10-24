import React from "react";
import img1 from "../images/Firstlogo.png";
import img2 from "../images/Second.png";
import img3 from "../images/Third.png";
import img4 from "../images/Fourth.png";
import img5 from "../images/Fifth.png";
import img6 from "../images/Six.png";
function ThirdDiv() {
  return (
    <div class="container h-750">
      <h1 className="text-center my-5 heading">What We Do</h1>

      <div class="container text-center">
        <div class="row my-50">
          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img1} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>We Do Best</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img2} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>We Do Best</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img3} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>Best Company</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row my-50">
          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img4} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>Nice Idea</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img5} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>Professional</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex flex-row g-10">
              <img src={img6} alt="" width={"80px"} height={"80px"} />
              <div className="d-flex flex-column align-items-start">
                <h3>Great Services</h3>
                <div className="text-start f-20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  numquam enim, nostrum voluptates itaque labore!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdDiv;
