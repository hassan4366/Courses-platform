import React from "react";
import "../Home/courses.css";

function Review() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side */}
        <div className="col-md-3">
          <h3 className="fw-bold text-dark mb-5">Learner Reviews</h3>

          <div className="d-flex align-items-center mb-2">
            <h4 className="fw-bold me-2">4.6</h4>
            <i className="fa-solid fa-star icons"></i>
            <small className="ms-2 text-muted">146,951 reviews</small>
          </div>
          {/* 5 Stars */}
          <div className="mb-2 d-flex align-items-center icons">
            <div className="me-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <span className="text-dark ml-2">100%</span>
            </div>
          </div>

          {/* 4 Stars */}
          <div className="mb-2 d-flex align-items-center">
            <div className="me-2">
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <span className="text-dark ml-2">80%</span>
            </div>
          </div>

          {/* 3 Stars */}
          <div className="mb-2 d-flex align-items-center">
            <div className="me-2 text-warning">
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <span className="text-dark ml-2">60%</span>
            </div>
          </div>

          {/* 2 Stars */}
          <div className="mb-2 d-flex align-items-center">
            <div className="me-2 text-warning">
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <span className="text-dark ml-2">40%</span>
            </div>
          </div>

          {/* 1 Star */}
          <div className="mb-2 d-flex align-items-center">
            <div className="me-2">
              <i className="fa-solid fa-star icons"></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
              <span className="text-dark ml-2">20%</span>
            </div>
          </div>
        </div>
        {/* Right Side Reviews */}
        <div className="col-md-9 mt-5">
          <div className="card p-3 mb-3 shadow-sm">
            <div className="d-flex align-items-start">
              <img
                src="/img/Ellipse 19.png"
                alt="profile"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <div className="d-flex align-items-center mb-1">
                  <h6 className="fw-bold me-2 mb-0">Mark Doe</h6>
                  <div className=" me-2">
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                  </div>
                  <small className="text-muted">
                    Reviewed on 22nd March, 2024
                  </small>
                </div>
                <p className="text-muted mb-0">
                  I was initially apprehensive, having no prior design
                  experience. But the instructor, John Doe, did an amazing job
                  of breaking down complex concepts into easily digestible
                  modules. The video lectures were engaging, and the real-world
                  examples really helped solidify my understanding.
                </p>
              </div>
            </div>
          </div>
          <div className="card p-3 mb-3 shadow-sm">
            <div className="d-flex align-items-start">
              <img
                src="/img/Ellipse 19.png"
                alt="profile"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <div className="d-flex align-items-center mb-1">
                  <h6 className="fw-bold me-2 mb-0">Mark Doe</h6>
                  <div className="me-2">
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                  </div>
                  <small className="text-muted">
                    Reviewed on 22nd March, 2024
                  </small>
                </div>
                <p className="text-muted mb-0">
                  I was initially apprehensive, having no prior design
                  experience. But the instructor, John Doe, did an amazing job
                  of breaking down complex concepts into easily digestible
                  modules. The video lectures were engaging, and the real-world
                  examples really helped solidify my understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-3 mb-3 shadow-sm">
            <div className="d-flex align-items-start">
              <img
                src="/img/Ellipse 19.png"
                alt="profile"
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <div className="d-flex align-items-center mb-1">
                  <h6 className="fw-bold me-2 mb-0">Mark Doe</h6>
                  <div className=" me-2">
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                    <i className="fa-solid fa-star icons"></i>
                  </div>
                  <small className="text-muted">
                    Reviewed on 22nd March, 2024
                  </small>
                </div>
                <p className="text-muted mb-0">
                  I was initially apprehensive, having no prior design
                  experience. But the instructor, John Doe, did an amazing job
                  of breaking down complex concepts into easily digestible
                  modules. The video lectures were engaging, and the real-world
                  examples really helped solidify my understanding.
                </p>
              </div>
            </div>
          </div>

          <button className="btn btn-outline-secondary px-5 py-3 rounded">
            View more Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;