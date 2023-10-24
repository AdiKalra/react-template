import React from "react";
import img from "../images/Idea1.png";
function FourthDiv() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-start h-700">
      <h2 className="mx-5 heading">How We Work</h2>
      <div class="d-flex justify-content-between align-items-center">
        <div className="w-50 mx-5">
          <p className="f-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            adipisci deserunt dolorum unde, excepturi quas. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Error sapiente ea corrupti
            adipisci vero enim.
          </p>
          <button type="button" class="btn btn-danger p-4 rounded-pill">
            READ MORE
          </button>
        </div>
        <img src={img} alt="" width={"900px"} height={"400px"} />
      </div>
    </div>
  );
}

export default FourthDiv;
