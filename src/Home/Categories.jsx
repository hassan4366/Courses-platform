import React from 'react'

function Categories() {
  return (
    <div className="categories my-5">
        <div className='container'>
            <div className='row'>
                <h2 className="text-dark font-weight-bold mb-5">Top Categories</h2>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="/img/Group 136.png" alt="Card image" className="card-img-top img-fluid img-1" />
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold mb-3">Astrology</h4>
                            <p>11 Courses</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="/img/Group 136 (1).png" alt="Card image" className="card-img-top img-fluid img-1" />
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold mb-3">Development</h4>
                            <p>12 Courses</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="/img/Group 136 (2).png" alt="Card image" className="card-img-top img-fluid img-1" />
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold mb-3">Marketing</h4>
                            <p>12 Courses</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card">
                        <img src="/img/Group 136 (3).png" alt="Card image" className="card-img-top img-fluid img-1" />
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold mb-3">Physics</h4>
                            <p>14 Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories