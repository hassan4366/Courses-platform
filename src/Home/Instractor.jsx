import React from "react";

function Instractor() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex my-5">
            <div>
              <img src="/img/Capture.PNG" alt="Instructor"  />
            </div>
            <div className="ml-4">
              <h5 className="font-weight-bold  text-dark">
                Become an Instructor
              </h5>
              <p className="mt-2 text-secondary">
                Instructors from around the world teach millions of students on
                Byway.
                <br />
                We provide the tools and skills to teach what you love.
              </p>
              <button className="btn-dark p-2 rounded border-0">
                Start Your Instructor Journey
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instractor;
