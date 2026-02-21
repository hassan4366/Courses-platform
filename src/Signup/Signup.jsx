import React from 'react'

function Signup() {
  return (
    <div>
        <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="col-md-6 p-0">
                        <img
                            src="/img/Frame 427319048.png"
                            className="img-fluid w-100 "
                            style={{ objectFit: 'cover' }}
                            alt="Signup visual"
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="w-75">
                            <h2 className="text-dark font-weight-bold text-center mb-4">
                                Create Your Account
                            </h2>
                            <form>
                                <label htmlFor="firstName" className="font-weight-bold">
                                    Full Name
                                </label>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control p-3"
                                            id="firstName"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control p-3"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="font-weight-bold">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control p-3"
                                        id="username"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="font-weight-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control p-3"
                                        id="email"
                                        placeholder="Email ID"
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="password" className="font-weight-bold">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control p-3"
                                            id="password"
                                            placeholder="Enter Password"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="confirmPassword" className="font-weight-bold">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control p-3"
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark btn-block py-3 mt-2">
                                    Create Account &nbsp;
                                    <i className="fa-solid fa-arrow-right" />
                                </button>
                                <div className="text-center mt-4">
                                    <p className="text-secondary d-block mb-2">Sign up with</p>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-outline-secondary  mx-2 px-4" style={{color:"#3b82f6"}}>
                                        <i className="fa-brands fa-facebook" style={{ color: "#3b82f6" ,fontSize:"20px", marginRight:"10px"}} />
                                            Facebook
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary mx-2 px-4" style={{color:"#EA4335"}}>
                                        <i className="fa-brands fa-google" style={{ color: "#EA4335" ,fontSize:"20px", marginRight:"10px"}} />
                                            Google
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary mx-2 px-4">
                                        <i className="fa-brands fa-microsoft" style={{ color: "rgb(0, 0, 0)" ,fontSize:"20px", marginRight:"10px"}} />
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
  )
}

export default Signup