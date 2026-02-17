import React, { useContext } from 'react'
import { apiValue } from '../Data/AllData'

function Courses() {
    const data = useContext(apiValue)
  return (
    <div className="courses my-5">
        <div className='container'>
            <div className='row'>
                <h2 className="text-dark font-weight-bold mb-5">Top Courses</h2>
                <div className='col-md-3'>
                    <div className='card'>
                        <img src={data.image} className='card-img-top' alt='course' />
                        <div className='card-body'>
                            <h4 className='card-title'>{data.title}</h4>
                            <p className='card-text'>by {data.mentor}</p>
                            <p className='card-text'>$ {data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses