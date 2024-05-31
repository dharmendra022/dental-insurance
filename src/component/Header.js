import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="header">
                {/* <!-- Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5 col-12">
                                {/* <!-- Contact --> */}
                                <ul className="top-link">
                                <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/insurance">Insurance</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                                {/* <!-- End Contact --> */}
                            </div>
                            <div className="col-lg-6 col-md-7 col-12">
                                {/* <!-- Top Contact --> */}
                                <ul className="top-contact">
                                    <li><i className="fas fa-phone"></i>+880 1234 56789</li>
                                    <li><i className="fas fa-envelope"></i><a
                                        href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                                </ul>
                                {/* <!-- End Top Contact --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Topbar -->
                <!-- Header Inner --> */}
                <div className="header-inner">
                    <div className="container">
                        <div className="inner">
                            <div className="row align-items-center mb-1">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="logo">
                                        <a href="/" className='bold-text'>Dental Insurance</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-right">
                                    <div className="get-quote">
                                        <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Header Inner --> */}
            </header>
        </div>
    )
}

export default Header
