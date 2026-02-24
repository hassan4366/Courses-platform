import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData'
import '../Home/instructors.css'

function Popular() {
    const { data, error } = useContext(apiValue) || {}
    const mentors = data?.mentors ?? []

    if (error) {
        return <h3>Failed to load data.</h3>
    }

    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <div className="courses my-5 ">
            <div className='container'>
                <div className='row'>
                    <h2 className="text-dark font-weight-bold mb-5">
                        Popular Mentors
                    </h2>

                    {mentors.map((course) => (
                        <div className='col-md-2 col-6 m-auto h-100' key={course.id}>
                            <div className='card h-100'>
                                <img
                                    src={course.image}
                                    className='card-img-top p-3'
                                    alt={course.name}
                                />
                                <div className='card-body'>
                                    <h6 className='card-title font-weight-bold text-dark text-center'>{course.name}</h6>
                                    <p className='card-text text-secondary text-center'>by {course.jobTitle}</p>
                                    <hr />
                                    <div className='icons d-flex justify-content-start'>
                                        <i className="fa-solid fa-star"></i>
                                        <span className='text-secondary ml-1'> {course.rating}</span>
                                        <span className='text-secondary ml-1'>( {course.students} Students)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular