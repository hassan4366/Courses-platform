import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { apiValue } from '../Data/AllData';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

function Cart() {
    const {
        items,
        removeItem,
        isEmpty,
        cartTotal,
        totalItems,
    } = useCart();
    const { data, error } = useContext(apiValue) || {}

    if (isEmpty)
        return (
            <div className="text-center mt-5">
                <img
                    src="/img/cart.png"
                    style={{ width: "350px" }}
                    alt="Empty Cart"
                    className="img-fluid mx-auto d-block mt-5"
                />
                <h2 style={{ color: "#3085d6" }}>Your Cart is Empty</h2>
                <p className="text-muted">
                    Looks like you haven't added anything to your cart yet.
                </p>
                <Link to="/category" className="btn main-1 mt-3">
                    Start Shopping
                </Link>
            </div>
        );

    if (error) {
        return <h3>Failed to load data.</h3>
    }

    if (!data) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            <main className="page">
                <section className="shopping-cart dark">
                    <div className="container">
                        <h2 className='text-dark font-weight-bold mt-5 d-inline-block mr-5'>Shopping Cart</h2>
                        <h6 className=' mb-5 d-inline'>Category &nbsp;&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;Details &nbsp;&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-primary'>Shopping Cart</span></h6>
                        <p className='mt-'>{totalItems}&nbsp;&nbsp;Course in cart</p>
                        <hr style={{ width: "67%" }} />

                        <div className="content p-3">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="items">
                                        {items.map((item) => (
                                            <div className="product" key={item.id}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <img
                                                            className="img-fluid mx-auto d-block image"
                                                            src={item.image || '/assets/img/image.jpg'}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="info">
                                                            <div className="row align-items-center">
                                                                <div className="col-md-11 product-name">
                                                                    <div className="product-name">
                                                                        <h4 className="text-dark font-weight-bold">{item.title}</h4>
                                                                        <h6 className="text-muted">by&nbsp;&nbsp;{item.mentor}</h6>
                                                                        <h5 className="d-inline-block mr-2" style={{ color: "#FFD700" }}>{item.rating}</h5>
                                                                        <div className='mb-1 d-inline'>
                                                                            <i className="fa-solid fa-star icons"></i>
                                                                            <i className="fa-solid fa-star icons"></i>
                                                                            <i className="fa-solid fa-star icons"></i>
                                                                            <i className="fa-solid fa-star icons"></i>
                                                                            <i className="fa-solid fa-star icons"></i>
                                                                        </div>
                                                                        <h6 className="text-muted d-inline ml-2">(250 rating)</h6>
                                                                        <h6 className="text-dark d-inline ml-2">{item.chapters}&nbsp;&nbsp;Total Hours. 155 Lectures.</h6>
                                                                        <button onClick={() => removeItem(item.id)} style={{ backgroundColor: "transparent", color: "#3B82F6", border: "none", margin: "0 10px" }}>Save for later</button>
                                                                        <button onClick={() => removeItem(item.id)} style={{ backgroundColor: "transparent", color: "#DC2626", border: "none" }}>Remove</button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-1 price ">
                                                                    <h4 className="text-dark font-weight-bold">${item.price.toFixed(2)}</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-4 m-auto" style={{}}>
                                    <h4 className="text-dark font-weight-bold">Order Details</h4>
                                    <div className="summary">
                                        <div className="summary-item">
                                            <span className="text">Price</span>
                                            <span className="price font-weight-bold text-dark">${cartTotal.toFixed(2)}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="text">Discount</span>
                                            <span className="price font-weight-bold text-dark">$-10.00</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="text">Tax</span>
                                            <span className="price font-weight-bold text-dark">$20.00</span>
                                        </div>
                                        <hr />
                                        <div className="summary-item">
                                            <span className="text">Total</span>
                                            <span className="price font-weight-bold text-dark">${(cartTotal - 10 + 20).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-lg btn-block mt-3"
                                        style={{
                                            borderRadius: "10px"
                                            , fontSize: "12px"
                                        }}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Cart