import React from "react";

function Login() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6  align-items-center d-flex justify-content-center">
            <div className="w-75">
              <h1 className="text-dark font-weight-bold text-center mb-5 ml-5">
                Sign in to your account
              </h1>
              <form className="ml-4 w-100">
                <div className="form-group">
                  <label htmlFor="Email" className="font-weight-bold  mt-3">
                    Email
                  </label>
                  <input
                    type="Email"
                    className="form-control p-4"
                    id="username"
                    placeholder="Username or Email ID"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="font-weight-bold mt-3">
                    Password
                  </label>
                  <input
                    type="Text"
                    className="form-control p-4"
                    id="email"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-dark btn-block border-0 p-3 mt-4  w-25 rounded"
                >
                  Sign In
                  <i className="fa-solid fa-arrow-right ml-2" />
                </button>
                <div className="text-center mt-4">
                  {/* Sign with  */}
                  <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="mx-3 text-secondary">Sign in with</span>
                    <hr className="flex-grow-1" />
                  </div>
                  {/* icons register */}
                  <div className="d-flex justify-content-between ">
                    <button
                      type="button"
                      className=" btn-outline-secondary   px-5 py-3 rounded"
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
                      <img
                        src="/img/google.png"
                        alt="google"
                        className="mr-2"
                      />
                      Google
                    </button>
                    <button
                      type="button"
                      className=" btn-outline-secondary mx-2 px-5"
                    >
                      <img
                        src="/img/image 1.png"
                        alt="microsoft"
                        className="mr-2"
                      />
                      Microsoft
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 p-0">
            <img
              src="/img/2db5e36f46d740f4e31aba5b5364cdf2ea7d24db.jpg"
              className="img-fluid w-100 h-100 mt-1"
              style={{ objectFit: "cover" }}
              alt="login visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
