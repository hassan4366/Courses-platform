import React from 'react'
import './header.css'

function Header() {
    return (
        <div>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="text-center text-md-start mb-3 text-black font-weight-bold">Unlock Your Potential<br></br> with Byway</h1>
                        <p className="text-center text-md-start">Welcome to Byway, where learning knows no bounds. We believe that<br></br> education is the key to personal and professional growth, and we're here to <br></br>guide you on your journey to success.</p>
                        <button className="btn-1">Start your instructor journey</button>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/confident-teacher-explaining-lesson-pupils 1.png" alt="Welcome" className="img-fluid w-100" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header