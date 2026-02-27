import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar2({search, setSearch = () => {} }) {
    const [showNav, setShowNav] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
                {/* Container wrapper */}
                <div className="container">
                    {/* Navbar brand */}
                    <Link className="navbar-brand me-2" to="/">
                        <img
                            src="/img/Frame 22.png"
                            className="w-100"
                            alt="logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />
                    </Link>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={showNav}
                        aria-label="Toggle navigation"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div
                        className={`collapse navbar-collapse ${showNav ? "show" : ""}`}
                        id="navbarSupportedContent"
                    >
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link ml-4" to="/category">
                                    Categories
                                </Link>
                            </li>
                        </ul>

                        {/* Search form for desktop */}
                        <form className="d-none d-lg-flex input-group w-50 my-auto position-relative">
                            <input
                                autoComplete="off"
                                type="search"
                                className="form-control rounded px-4 py-3"
                                placeholder="  Search courses..."
                                value={search || ""}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <span className="input-group-text border-0 d-none d-lg-flex position-absolute ">
                                <i className="fas fa-search" />
                            </span>
                        </form>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link mr-3" to="/deatial">
                                    Teach on Byway
                                </Link>
                            </li>
                            <li className="nav-item mt-1">
                                <Link className="nav-link" to="/favorite">
                                    <i className="fa-regular fa-heart fa-lg"></i>
                                </Link>
                            </li>
                            <li className="nav-item mt-1">
                                <Link className="nav-link" to="/cart">
                                    <i className="fas fa-shopping-cart fa-lg" />
                                </Link>
                            </li>
                            <li className="nav-item mt-1">
                                <Link className="nav-link" to="/notification">
                                    <i className="fa-regular fa-bell fa-lg"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notification">
                                    <h4 className='bg-primary' style={{color:"white",width:"30px", height:"30px", textAlign:"center", borderRadius:"50%", lineHeight:"30px"}}>H</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Search form for mobile */}
            <div className="container d-lg-none pb-3">
                <form className="d-flex input-group w-100">
                    <input
                        autoComplete="off"
                        type="search"
                        className="form-control rounded"
                        placeholder="Search courses..."
                        value={search || ""}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default Navbar2