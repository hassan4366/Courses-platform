import React, { useContext } from "react";
import { apiValue } from "../Data/AllData";
import { useCart } from "react-use-cart";
import { useParams, useLocation } from "react-router-dom";

function Payment() {
  const { cartTotal } = useCart();
  const context = useContext(apiValue);
  // id is retrieved from the URL /checkout/:id
  const { id } = useParams();
  const location = useLocation();

  if (!context) {
    return <h3>Context not found.</h3>;
  }

  const { data, error } = context;

  if (error) {
    return <h3>Failed to load data.</h3>;
  }

  if (!data) {
    return <h3>Loading...</h3>;
  }

  // 1. Define courses to solve the 'not defined' error
  const courses = data?.courses || [];

  // 2. Solve the "Price Move" - capture data from location.state
  const displayPrice = location.state?.price || (cartTotal - 10 + 20).toFixed(2);
  const displayTitle = location.state?.title || "Order Details";

  // Find the specific course if checking out a single item via "Buy Now"
  const selectedCourse = courses.find(c => c.id === parseInt(id));

  return (
    <main className="page">
      <section className="shopping-cart dark">
        <div className="container">
          <h2 className="text-dark font-weight-bold mt-5 d-inline-block mr-5">
            Checkout Page
          </h2>

          <h6 className="mb-5 d-inline">
            Details &gt; Shopping Cart &gt;
            <span className="text-primary"> Checkout</span>
          </h6>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4 border border-light rounded-4 border-3">
                <div className="checkout-form p-4 border-3 rounded">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        State/Union Territory
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <h5 className="fw-bold mb-3">Payment Method</h5>

                  {/* Credit Card */}
                  <div className="card p-3 mb-3 border-0  bg-light">
                    <div className="d-flex justify-content-between  align-items-center mb-3">
                      <div>
                        <input
                          type="radio"
                          name="payment"
                          defaultChecked
                          className="form-check-input ml-1"
                        />
                        <span className="fw-bold">Credit/Debit Card</span>
                      </div>

                      <img
                        src="/img/visa.png"
                        alt="visa"
                        style={{ height: "25px" }}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Name of Card</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name of card"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Card Number"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">CVC/CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="card p-3 border-0  bg-light mt-2 shadow-sm">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <input
                          type="radio"
                          name="payment"
                          className="form-check-input ml-1"
                        />
                        <span className="fw-bold">PayPal</span>
                      </div>

                      <img
                        src="/img/peybal.png"
                        alt="paypal"
                        style={{ height: "25px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 m-auto">
                <h4 className="text-dark font-weight-bold">
                  {selectedCourse ? selectedCourse.title : displayTitle}
                </h4>
                <div className="summary">
                  <div className="summary-item">
                    <span className="text">Price</span>
                    <span className="price font-weight-bold text-dark">
                      {/* Use the passed price if available, otherwise cart total */}
                      ${location.state?.price || cartTotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Only show static adjustments if coming from the Cart checkout */}
                  {!location.state?.price && (
                    <>
                      <div className="summary-item">
                        <span className="text">Discount</span>
                        <span className="price font-weight-bold text-dark">
                          $-10.00
                        </span>
                      </div>
                      <div className="summary-item">
                        <span className="text">Tax</span>
                        <span className="price font-weight-bold text-dark">
                          $20.00
                        </span>
                      </div>
                    </>
                  )}

                  <div className="summary-item">
                    <span className="text">Total</span>
                    <span className="price font-weight-bold text-dark">
                      ${displayPrice}
                    </span>
                  </div>

                  <hr />
                </div>
                <button className="btn btn-primary w-100 mt-3 py-3 fw-bold">
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Payment;