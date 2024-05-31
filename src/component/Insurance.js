import React from 'react'
import Header from './Header'
import Footer from './Footer'
import sectionimg from '../assets/img/section-img.png'

const Insurance = () => {
  return (
    <div>
        <Header/>
                   {/* <!-- Start service --> */}
                   <section className="services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Comprehensive Dental Insurance Services</h2>
                                <img src={sectionimg} alt="Dental Insurance Services" />
                                <p>Our dental insurance plans provide a variety of services to ensure your oral health is well taken care of. Explore our offerings designed to meet all your dental needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-prescription"></i>
                                <h4><a href="service-details.html">Preventive Care</a></h4>
                                <p>Our insurance covers routine check-ups and cleanings to maintain your oral health and prevent any dental issues.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-tooth"></i>
                                <h4><a href="service-details.html">Restorative Treatments</a></h4>
                                <p>From fillings to crowns, our insurance ensures you receive the necessary treatments to restore your smile.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-heart-alt"></i>
                                <h4><a href="service-details.html">Cosmetic Procedures</a></h4>
                                <p>Enhance your smile with our coverage for teeth whitening, veneers, and other cosmetic dental services.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-listening"></i>
                                <h4><a href="service-details.html">Orthodontics</a></h4>
                                <p>Our plans cover orthodontic treatments like braces and aligners to help you achieve a perfectly aligned smile.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-eye-alt"></i>
                                <h4><a href="service-details.html">Dental Implants</a></h4>
                                <p>We provide coverage for dental implants, ensuring you have access to long-lasting solutions for missing teeth.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            {/* <!-- Start Single Service --> */}
                            <div className="single-service">
                                <i className="icofont icofont-blood"></i>
                                <h4><a href="service-details.html">Emergency Dental Care</a></h4>
                                <p>Get immediate attention for dental emergencies with our comprehensive insurance plans that cover urgent care.</p>
                            </div>
                            {/* <!-- End Single Service --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End service --> */}
        <Footer/>
    </div>
  )
}

export default Insurance
