import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData';
import { Link, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';

function Header1() {
    const { addItem } = useCart();
    const { id } = useParams()
    const { data, error } = useContext(apiValue) || {}
    const courses = data?.courses || []

    if (error) {
        return <h3>Failed to load data.</h3>
    }

    if (!data) {
        return <h3>Loading...</h3>
    }
    return (
        <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
            <div className='container'>
                <div className='row'>
                    {courses.filter(course => course.id === parseInt(id)).map(filteredCourse => (
                        <React.Fragment key={filteredCourse.id}>
                            <div className='col-lg-8 mt-5'>
                                <h5 className='text-muted mb-4 mb-md-5'>Home > Category > <span className='text-primary'>{filteredCourse?.title}</span></h5>
                                <h1 className='fw-bold mt-3 text-dark' style={{ fontSize: 'calc(1.3rem + 1.2vw)' }}>{filteredCourse?.title}</h1>
                                <p className='mt-4'>This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.</p>
                                <div className='mb-1'>
                                    <p style={{ color: "#FEC84B", fontWeight: "bold", display: "inline", marginRight: "10px" }}>4.6</p>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <span className='ms-3 text-muted d-block d-sm-inline mt-2 mt-sm-0'>(651,651 ratings) | 22 Total Hours . 155 Lectures . All levels </span>
                                </div>
                                <div className='mt-4'>
                                    <img src="/img/Ellipse 5.png" alt="" />
                                    <h6 className='d-inline ms-3'>Created by <span className='text-primary'>{filteredCourse?.mentor}</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-5">
                                <div className="card p-3 shadow-sm mx-auto" style={{ maxWidth: "22rem" }}>
                                    <img src={filteredCourse?.image} className="card-img-top" alt={filteredCourse?.title} />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold text-dark d-inline me-3">${filteredCourse?.price * 0.5}</h5>
                                        <del className="text-muted">${filteredCourse?.price}</del>
                                        <h5 className="card-title fw-bold text-success d-inline ms-3">50% off</h5>
                                        <button className="btn btn-dark w-100 mt-3 p-2 rounded" onClick={() => {
                                            addItem({ ...filteredCourse, price: filteredCourse.price * 0.5 });
                                            Swal.fire({
                                                title: "Added to Cart!",
                                                text: `${filteredCourse?.title} has been added to your cart.`,
                                                icon: "success",
                                                confirmButtonColor: "#3085d6",
                                            });
                                        }}>
                                            Add to Cart
                                        </button>
                                        <Link
                                            to={`/checkout/${filteredCourse.id}`}
                                            // Passing price and title to the Payment page state
                                            state={{ price: (filteredCourse?.price * 0.5).toFixed(2), title: filteredCourse?.title }}
                                            onClick={() => addItem({ ...filteredCourse, price: filteredCourse.price * 0.5 })}
                                            className="btn btn-light w-100 mt-3" style={{ backgroundColor: "white", border: "1px solid black", borderRadius: "5px", color: "black" }}>
                                            Buy Now
                                        </Link>
                                        <hr />
                                        <div className='mt-3 icon'>
                                            <h6 className='text-dark fw-bold'>Share</h6>
                                            <img src="/img/image 13.png" alt="" className="img-fluid" style={{ maxWidth: "220px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header1