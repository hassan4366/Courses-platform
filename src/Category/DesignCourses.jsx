import React from 'react'
import "../Category/categoy.css"
import { useContext } from 'react'
import { apiValue } from '../Data/AllData'
import '../Home/courses.css'



function DesignCourses({ search }) {
    const { data, error } = useContext(apiValue) || {}
    const courses = data?.courses || []

    if (error) {
        return <h3>Failed to load data.</h3>
    }

    if (!data) {
        return <h3>Loading...</h3>
    }

    const filteredCourses = courses.filter(course =>
        search ? course.title.toLowerCase().includes(search.toLowerCase()) : true
    );

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-dark font-weight-bold">Design Courses</h2>
                    </div>
                    <div className="col-md-3 mt-4">
                        <h4 className="col-md-12 text-dark font-weight-bold mt-2">All Development Courses</h4>
                        <button className="btn-1"><img src="/img/filter.png" className='mr-2' alt="" />Filter</button>
                        <h6 className='font-weight-bold text-dark mt-5'>Rating <i className="fa-solid fa-angle-up" /></h6>
                        <hr />
                        <div className='mb-1'>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                        </div>
                        <div className='mb-1'>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                        </div>
                        <div className='mb-1'>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                        </div>
                        <div className='mb-1'>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-star icons"></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#dad7d7" }}></i>
                        </div>
                        <h6 className='font-weight-bold text-dark mt-5'>Number of Chapters <i className="fa-solid fa-angle-up" /></h6>
                        <hr />
                        <div>
                            <input type="checkbox" id='check-1' className='mr-2' style={{ padding: "50px" }} />
                            <label htmlFor="check-1">1-10</label>
                        </div>
                        <div>
                            <input type="checkbox" id='check-2' className='mr-2' style={{ padding: "50px" }} />
                            <label htmlFor="check-2">10-15</label>
                        </div>
                        <div>
                            <input type="checkbox" id='check-3' className='mr-2' style={{ padding: "50px" }} />
                            <label htmlFor="check-3">15-20</label>
                        </div>
                        <div>
                            <input type="checkbox" id='check-4' className='mr-2' style={{ padding: "50px" }} />
                            <label htmlFor="check-4">20-25</label>
                        </div>
                        <button style={{ border: "none", color: "blue", backgroundColor: "transparent" }}>show more <i className="fa-solid fa-angle-down" style={{ color: "blue" }}></i></button>
                        <h6 className='font-weight-bold text-dark mt-5'>Price <i className="fa-solid fa-angle-up" />
                        </h6>
                        <hr />
                        <h6 className='font-weight-bold text-dark mt-5'>Categoty <i className="fa-solid fa-angle-up" /></h6>
                        <hr />
                    </div>
                    <div className="col-md-9">
                        <div className="courses my-4">
                            <div className='row'>
                                <div className='d-flex justify-content-end align-items-center mb-4'>
                                    <h5 className='mr-4 mt-4'>Sort by</h5>
                                    <button className="btn-1"> Relevance<i className="fa-solid fa-angle-down" /></button>

                                </div>
                                {filteredCourses.map((course) =>
                                    course.id < 10 ? (
                                        <div className='col-md-4 mb-4' key={course.id}>
                                            <div className='card h-100'>
                                                <img
                                                    src={course.image}
                                                    className='card-img-top p-3'
                                                    alt={course.title}
                                                />
                                                <div className='card-body'>
                                                    <h6 className='card-title font-weight-bold'>{course.title}</h6>
                                                    <p className='card-text text-secondary'>by {course.mentor}</p>
                                                    <div className='icons'>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <span className='text-secondary ml-1'>(1200 Ratings)</span>
                                                    </div>
                                                    <p className='text-secondary details'>22 Total Hours. 155 Lectures. Beginner</p>
                                                    <p className='card-text font-weight-bold'>$ {course.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignCourses