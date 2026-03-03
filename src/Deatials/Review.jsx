import React from "react";
import "../Home/courses.css";

function Review() {
  return (
    <div>
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-12">
            <h3 className="font-weight-bold text-dark mt-2">Learner Reviews</h3>
          </div>
          <div className=" d-flex mr-3">
            <i className="fa-solid fa-star icons mt-1"></i>
            <h4 className="font-weight-bold ml-2">4.6</h4>
            <p className="ml-1 mt-1">1,469 reviews</p>
          </div>
          <div className="mb-1">
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <span className="ml-2">100%</span>
          </div>
          <div className="mb-1">
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <span className="ml-2">80%</span>
          </div>
          <div className="mb-1">
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <span className="ml-2">60%</span>
          </div>
          <div className="mb-1">
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <span className="ml-2">40%</span>
          </div>
          <div>
            <i className="fa-solid fa-star icons"></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
            <span className="ml-2">20%</span>
          </div>
        </div>

        <div className="col-md-9 row d-flex">
          <div className="col-md-4 d-flex">
            <img src="/img/Ellipse 19.png" alt="phot"  />
            <h4 className="font-weight-bold">Mark Doe</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
