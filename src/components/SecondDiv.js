import React from "react";
import Laptop from "../images/Laptop.png";
function SecondDiv() {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center second-container position-relative mb-5">
        <div class="d-flex flex-column mb-3">
          <h1 className="heading">Who We Are</h1>
          <div class="d-flex flex-column align-items-start">
            <p className="f-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates delectus perferendis vel sequi tenetur corrupti
              repellendus neque, id ab ipsa alias fuga eos placeat excepturi
              quidem dolorum blanditiis sed?
            </p>
            <button type="button" class="btn btn-danger p-4 rounded-pill">
              READ MORE
            </button>
          </div>
        </div>
        <img src={Laptop} alt="Laptop" />
      </div>
    </div>
  );
}

export default SecondDiv;
