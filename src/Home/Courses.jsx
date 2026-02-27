import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData'
import './courses.css'
import { Link } from 'react-router-dom'

function Courses() {
  const { data, error } = useContext(apiValue) || {}
  const courses = data?.courses || []

  if (error) {
    return <h3>Failed to load data.</h3>
  }

  if (!data) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="courses my-4">
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className="text-dark font-weight-bold ">
              Top Courses
            </h2>
            <Link to="/all-courses" className="float-right mb-4">See All</Link>
          </div>

          {courses.map((course) =>
            course.id > 6 ? (
              <div className='col-md-3 mb-4' key={course.id}>
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
  )
}

export default Courses
