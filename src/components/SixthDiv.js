import React from "react";
import img from "../images/Lady5.jpg";
function SixthDiv() {
  return (
    <div className="container p-5 h-650 my-5">
      <div class="d-flex flex-column justify-content-evenly align-items-center p-5 w-100 m-auto g-10">
        <h1 className="heading">What Client Says</h1>
        <div class="d-flex align-items-center g-10">
          <img src={img} alt="" />
          <div className="p-5">
            <p className="w-100 f-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              inventore ea veniam, facilis numquam repudiandae tenetur suscipit
              debitis, consequatur sunt qui! Corporis, quod natus? Dolor
              cupiditate maxime eligendi recusandae fugiat.
            </p>
            <br />
            <span className="f-20">Jinny Snow, Company CEO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthDiv;
