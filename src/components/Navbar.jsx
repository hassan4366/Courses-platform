import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    useEffect(() => {
        // Initialize MDB components after component mounts
        if (window.mdb) {
            window.mdb.Collapse.getOrCreateInstance(document.querySelector('[data-mdb-collapse-init]'));
            document.querySelectorAll('[data-mdb-dropdown-init]').forEach(dropdown => {
                window.mdb.Dropdown.getOrCreateInstance(dropdown);
            });
        }
    }, []);
    return (
        <div>
            <>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
                    {/* Container wrapper */}
                    <div className="container">
                        {/* Toggle button */}
                        <button
                            data-mdb-collapse-init=""
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                                <img src="/img/Frame 22.png" alt="logo" className="img-fluid w-100" />
                            </Link>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link ml-3" to="/categories">
                                        Categories
                                    </Link>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        <div className="col-md-5 col-12 mr-5 d-inline-flex justify-content-center align-items-center">
                            {/* Email input */}
                            <div data-mdb-input-init className="m-auto d-flex w-100 justify-content-center rounded">
                                <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-4" />
                                <input type="email" id="form5Example24" className="form-control m-auto"  placeholder="Search courses..." />
                            </div>
                        </div>
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            <ul className="navbar-nav  mr-4 ">
                                <li className="nav-item">
                                    <Link className="nav-link mr-3" to="/teach">
                                        Teach on Byway
                                    </Link>
                                </li>
                            </ul>
                            {/* Icon */}
                            <a className="text-reset me-3" href="##">
                                <i className="fas fa-shopping-cart" />
                            </a>
                            
                            <div className="dropdown">
                                <Link to="/login" className="b-1">Login</Link>
                            </div>
                            <div className="dropdown">
                                <Link to="/signup" className="b-2">Sign Up</Link>
                            </div>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </>
        </div>
    )
}

export default Navbar