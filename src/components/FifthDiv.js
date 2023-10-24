import React from "react";
import img1 from "../images/Lady1.png";
import img2 from "../images/lady2.png";
import img3 from "../images/Lady3.png";
function FifthDiv() {
  return (
    <div className="h-750 d-flex flex-column align-items-center justify-content-evenly">
      <h2 className="heading">Our Team</h2>
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-400 m-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-400 m-auto" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-400 m-auto" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default FifthDiv;
