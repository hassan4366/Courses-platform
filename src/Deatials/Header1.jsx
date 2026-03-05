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
                            <div className='col-md-8 mt-5'>
                                <h5 className='text-muted mb-5'>Home &nbsp;&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;Category &nbsp;&nbsp;&nbsp;&nbsp;&gt; &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-primary'>{filteredCourse?.title}</span></h5>
                                <h1 className='font-weight-bold mt-3 text-dark'>{filteredCourse?.title}</h1>
                                <p className='mt-4'>This course is meticulously crafted to provide you with a foundational understanding of the<br /> principles, methodologies, and tools that drive exceptional user experiences in the digital<br /> landscape.</p>
                                <div className='mb-1'>
                                    <p style={{ color: "#FEC84B", fontWeight: "bold", display: "inline", marginRight: "10px" }}>4.6</p>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <i className="fa-solid fa-star icons"></i>
                                    <span className='ml-3'>(651651 rating)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;22 Total Hours. 155 Lectures. All levels </span>
                                </div>
                                <div className='mt-4'>
                                    <img src="/img/Ellipse 5.png" alt="" />
                                    <h6 className='d-inline ml-3'>Created by <span className='text-primary'>{filteredCourse?.mentor}</span></h6>
                                </div>
                            </div>
                            <div className="card p-3 col-md-4" style={{ width: "22rem", position: "absolute", right: "90px" }}>
                                <img src={filteredCourse?.image} className="card-img-top" alt={filteredCourse?.title} />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold text-dark d-inline mr-3">${filteredCourse?.price * 0.5}</h5>
                                    <del>{filteredCourse?.price}</del>
                                    <h5 className="card-title font-weight-bold text-success d-inline ml-3">50% off</h5>
                                    <button className=" btn-dark btn-block w-100 mt-3 p-2 rounded" onClick={() => {
                                        addItem(filteredCourse);
                                        Swal.fire({
                                            title: "Added to Cart!",
                                            text: `${filteredCourse?.title} has been added to your cart.`,
                                            icon: "success",
                                            confirmButtonColor: "#3085d6",
                                        });
                                    }}>
                                        Add to Cart
                                    </button>
                                    <Link to="/Checkout"className="btn btn-light btn-block w-100 mt-3" style={{ backgroundColor: "white", border: "1px solid black", borderRadius: "5px", color: "black" }}>
                                        Buy Now
                                    </Link>
                                    <hr />
                                    <div className='mt-3 icon'>
                                        <h6 className='text-dark font-weight-bold'>Share</h6>
                                        <img src="/img/image 13.png" alt="" style={{ width: "220px" }} />
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