import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer ">
                {/* <!-- Footer Top --> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>About Us</h2>
                                    <p>Welcome to Your Dental Insurance Company Name, where we are dedicated to providing comprehensive dental insurance coverage to individuals and families across the nation. Our mission is to ensure that everyone has access to high-quality dental care without financial barriers.</p>
                                    {/* <!-- Social --> */}
                                    <ul className="social">
                                        <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="/"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-vimeo-v"></i></a></li>
                                        <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
                                    </ul>
                                    {/* <!-- End Social --> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer f-link">
                                    <h2>Quick Links</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <ul>
                                                <li><a href="/"><i className="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                                <li><Link to="/about"><i className="fa fa-caret-right" aria-hidden="true"></i>About Us</Link></li>
                                                <li><Link to="/insurance"><i className="fa fa-caret-right" aria-hidden="true"></i>Insurance</Link></li>
                                                <li><Link to="/contact"><i className="fa fa-caret-right" aria-hidden="true"></i>Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Open Hours</h2>
                                    <p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
                                    <ul className="time-sidual">
                                        <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                        <li className="day">Saturday <span>9.00-18.30</span></li>
                                        <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="single-footer">
                                    <h2>Newsletter</h2>
                                    <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                    <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                        <input name="email" placeholder="Email Address" className="common-input" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Your email address'" required="" type="email" />
                                        <button className="button"><i className="icofont icofont-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Footer Top -->
                <!-- Copyright --> */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="copyright-content">
                                    <p>© Copyright 2024  |  All Rights Reserved by <a href="/" target="_blank">..com</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ End Copyright --> */}
            </footer>
        </div>
    )
}

export default Footer
