import React from 'react'

function Checkout() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h4 className="font-weight-bold mt-5 text-dark">
              Transform your life through education
            </h4>
            <p className="mt-2 ext-secondary">
              Learners around the world are launching new careers, advancing in
              <br />
              their fields, and enriching their lives.
            </p>
            <button className="btn-dark text-light p-3 mt-1 rounded">
              Checkout Courses <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="/img/3c8a918ba4bc9b83e6326f5da50c08bfbe7e9ea6.png"
              alt="Checkout"
              className="img-fluid w-75 ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout