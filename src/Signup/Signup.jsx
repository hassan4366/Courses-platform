import React from "react";

function Signup() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0">
            <img
              src="/img/Frame 427319048.png"
              className="img-fluid w-100 h-100 mt-1"
              style={{ objectFit: "cover" }}
              alt="Signup visual"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="w-75">
              <h2 className="text-dark font-weight-bold text-center mt-5 ml-5">
                Create Your Account
              </h2>
              <form className="ml-5 w-100">
                <label htmlFor="firstName" className="font-weight-bold mt-4">
                  Full Name
                </label>
                <div className="form-row">
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="font-weight-bold mt-3">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control p-4"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="font-weight-bold mt-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control p-4"
                    id="email"
                    placeholder="Email ID"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="password" className="font-weight-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control p-4"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label
                      htmlFor="confirmPassword"
                      className="font-weight-bold"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control p-4"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-dark btn-block p-3 mt-3  w-50 rounded"
                >
                  Create Account
                  <i className="fa-solid fa-arrow-right ml-2" />
                </button>
                <div className="text-center mt-4">
                  <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="mx-3 text-secondary">Sign in with</span>
                    <hr className="flex-grow-1" />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className=" btn-outline-secondary  mx-2 px-4 py-3 rounded"
                      style={{ color: "#3b82f6" }}
                    >
                      <i
                        className="fa-brands fa-facebook"
                        style={{
                          color: "#3b82f6",
                          fontSize: "20px",
                          marginRight: "10px",
                        }}
                      />
                      Facebook
                    </button>
                    <button
                      type="button"
                      className=" btn-outline-secondary mx-2 px-5"
                      style={{ color: "#EA4335" }}
                    >
                      <img src="/img/google.png" alt="google" />
                      Google
                    </button>
                    <button
                      type="button"
                      className=" btn-outline-secondary mx-2 px-5"
                    >
                      <img src="/img/image 1.png" alt="microsoft" />
                      Microsoft
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
