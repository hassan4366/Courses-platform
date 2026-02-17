import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="mt-5">
      {/* <!-- Footer --> */}
      <footer className="footer-home text-center p-5 text-lg-start  text-white">
        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="/img/64776fb9758b9efdddae0fa8e3523483de7a45b0.png" alt="logo" className="img-fluid w-25" />
                </h6>
                <p>
                  Empowering learners through accessible and engaging online
                  education.
                  <br /> Byway is a leading online learning platform dedicated
                  to providing high-quality, flexible, and affordable
                  educational experiences.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2">Get Help</h6>
                <p>
                  <a href="#!" className="">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="">
                    Latest Articles
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2">Programs</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Art & Design
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Business
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    IT & Software
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Languages
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Programming
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                <p>Address: 123 Main Street, Anytown, CA 12</p>
                <p>Tel: +(123) 456-7890</p>
                <p>Mail: bywayedu@webkul.in</p>
                <p className="">
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ "background-color": "#3b5998" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* <!-- Github --> */}
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ "background-color": "#333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  {/* <!-- Google --> */}
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ "background-color": "#4285F4" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  {/* <!-- Twitter --> */}
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ "background-color": "#1da1f2" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  {/* <!-- Linkedin --> */}
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{ "background-color": "#0082ca" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default Footer;
