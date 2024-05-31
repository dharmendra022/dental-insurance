import React from 'react'
import dentalinsurance from '../assets/img/slider.jpg'
import sectionimg from '../assets/img/section-img.png'
import pf1 from '../assets/img/pf1.jpg'
import pf2 from '../assets/img/pf2.jpg'
import pf3 from '../assets/img/pf3.jpg'
import pf4 from '../assets/img/pf4.jpg'
import client1 from '../assets/img/client1.png'
import client2 from '../assets/img/client2.png'
import client3 from '../assets/img/client3.png'
import client4 from '../assets/img/client4.png'
import client5 from '../assets/img/client5.png'
import contactimg from '../assets/img/contact-img.png'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
    return (
        <div>
            {/* <!-- Header Area --> */}
            <Header/>

            {/* <!-- End Header Area --> */}

            {/* <!-- Slider Area --> */}
            <section className="slider">
                <div className="hero-slider">
                    {/* <!-- Start Single Slider --> */}
                    <div className="single-slider" style={{ backgroundImage: `url(${dentalinsurance})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>We Provide <span>Dental</span> Insurance Services That You Can <span>Trust!</span></h1>
                                        <p>Protect your smile and your budget with our comprehensive dental insurance plans. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Coverage</a>
                                            <a href="#" className="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Slider Area --> */}


            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 ">
                                {/* <!-- single-schedule --> */}
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fas fa-tooth"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Dental Emergencies</span>
                                            <h4>Emergency Coverage</h4>
                                            <p>Rapid response and coverage for unexpected dental emergencies. From toothaches to broken teeth, we have you covered.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* <!-- single-schedule --> */}
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-dentist-chair"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Expert Dentists</span>
                                            <h4>Professional Care</h4>
                                            <p>Receive high-quality dental care from our network of experienced dentists.
                                                From routine cleanings to complex procedures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* <!-- single-schedule --> */}
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-time"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Flexible Hours</span>
                                            <h4>Convenient Appointments</h4>
                                            <p>We offer flexible appointment scheduling to accommodate your busy lifestyle. Book your dental appointments at times that work best for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!--/End Start schedule Area --> */}

            {/* <!-- Start Feautes --> */}
            <section className="Feautes section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You & Your Family</h2>
                                <img src={sectionimg} alt="#" />
                                <p>Secure your smile with our comprehensive dental insurance plans. From routine check-ups to emergency care, we've got you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12">

                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-ambulance-cross"></i>
                                </div>
                                <h3>Emergency Help</h3>
                                <p>Immediate assistance for unexpected dental emergencies. We provide fast, effective care when you need it most.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-features">
                                <div className="signle-icon">
                                    <i className="icofont icofont-medical-sign-alt"></i>
                                </div>
                                <h3>Comprehensive Coverage</h3>
                                <p>Our plans cover routine check-ups, cleanings, and major dental procedures to keep your oral health in top condition.</p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12">

                            <div className="single-features last">
                                <div className="signle-icon">
                                    <i className="icofont icofont-stethoscope"></i>
                                </div>
                                <h3>Preventive Care</h3>
                                <p>Regular preventive care to maintain healthy teeth and gums. Enjoy no waiting periods for preventive services.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* <!--/ End Feautes --> */}

            {/* <!-- Start Fun-facts --> */}
            <div id="fun-facts" className="fun-facts section overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* <!-- Start Single Fun --> */}
                            <div className="single-fun">
                                <i className="icofont icofont-home"></i>
                                <div className="content">
                                    <span className="counter">3468</span>
                                    <p>Hospital Rooms</p>
                                </div>
                            </div>
                            {/* <!-- End Single Fun --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* <!-- Start Single Fun --> */}
                            <div className="single-fun">
                                <i className="icofont icofont-user-alt-3"></i>
                                <div className="content">
                                    <span className="counter">557</span>
                                    <p>Specialist Doctors</p>
                                </div>
                            </div>
                            {/* <!-- End Single Fun --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* <!-- Start Single Fun --> */}
                            <div className="single-fun">
                                <i className="icofont-simple-smile"></i>
                                <div className="content">
                                    <span className="counter">4379</span>
                                    <p>Happy Patients</p>
                                </div>
                            </div>
                            {/* <!-- End Single Fun --> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* <!-- Start Single Fun --> */}
                            <div className="single-fun">
                                <i className="icofont icofont-table"></i>
                                <div className="content">
                                    <span className="counter">32</span>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                            {/* <!-- End Single Fun --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ End Fun-facts --> */}

            {/* <!-- Start Why choose --> */}
            <section className="why-choose section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Offer Comprehensive Dental Insurance Plans</h2>
                                <img src={sectionimg} alt="Dental Insurance" />
                                <p>Our dental insurance plans are designed to provide you and your family with the best dental care at affordable rates. Enjoy peace of mind with our extensive coverage options.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            {/* <!-- Start Choose Left --> */}
                            <div className="choose-left">
                                <h3>About Our Dental Insurance</h3>
                                <p>Our dental insurance plans offer a variety of benefits to ensure your oral health is always in top condition. We cover routine check-ups, emergency dental care, and more.</p>
                                <p>Our network of skilled dentists and specialists are ready to provide the highest quality care for you and your family.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="fas fa-caret-right"></i>Comprehensive Coverage for All Dental Needs</li>
                                            <li><i className="fas fa-caret-right"></i>No Waiting Period for Preventive Services</li>
                                            <li><i className="fas fa-caret-right"></i>Access to a Wide Network of Dentists</li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6">
                                        <ul className="list">
                                            <li><i className="fas fa-caret-right"></i>Affordable Plans for Families</li>
                                            <li><i className="fas fa-caret-right"></i>Emergency Dental Care Coverage</li>
                                            <li><i className="fas fa-caret-right"></i>Regular Check-ups and Cleanings</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Choose Left --> */}
                        </div>
                        <div className="col-lg-6 col-12">
                            {/* <!-- Start Choose Rights --> */}
                            <div className="choose-right">
                                <div className="video-image">
                                    {/* <!-- Video Animation --> */}
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    {/* <!--/ End Video Animation --> */}
                                    <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                                        className="video video-popup mfp-iframe"><i className="fas fa-play"></i></a>
                                </div>
                            </div>
                            {/* <!-- End Choose Rights --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Why choose --> */}

            {/* <!-- Start Call to action --> */}
            <section className="call-action overlay" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="content">
                                <h2>Need Emergency Dental Care? Call Us at 1234 56789</h2>
                                <p>We're here to provide immediate assistance for your dental emergencies. Get the care you need when you need it most.</p>
                                <div className="button">
                                    <a href="#" className="btn">Contact Now</a>
                                    <a href="#" className="btn second">Learn More<i className="fas fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End Call to action --> */}

            {/* <!-- Start portfolio --> */}
            <section className="portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Comprehensive Dental Insurance Plans for Your Peace of Mind</h2>
                                <img src={sectionimg} alt="Dental Insurance" />
                                <p>Our dental insurance plans are designed to cover all your dental needs, from routine check-ups to emergency care, ensuring you and your family always have access to the best dental services.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <div className="owl-carousel portfolio-slider">
                                <div className="single-pf">
                                    <img src={pf1} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf2} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf3} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf4} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf1} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf2} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf3} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                                <div className="single-pf">
                                    <img src={pf4} alt="#" />
                                    <a href="portfolio-details.html" className="btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/ End portfolio --> */}

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

            {/* <!-- Pricing Table --> */}
            {/* <!--/ End Pricing Table --> */}


            {/* <!-- Pricing Table --> */}
            <section className="pricing-table section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Choose the Best Dental Insurance Plan for You</h2>
                                <img src={sectionimg} alt="Dental Insurance Plans" />
                                <p>Our dental insurance plans are designed to provide comprehensive coverage at affordable rates. Select a plan that best suits your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="fas fa-tooth"></i>
                                    </div>
                                    <h4 className="title">Basic Plan</h4>
                                    <div className="price">
                                        <p className="amount">$29<span>/ Per Month</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="fas fa-check"></i>Preventive Care Coverage</li>
                                    <li><i className="fas fa-check"></i>Routine Check-ups</li>
                                    <li><i className="fas fa-check"></i>Basic Dental Treatments</li>
                                    <li className="cross"><i className="fas fa-times"></i>Cosmetic Procedures</li>
                                    <li className="cross"><i className="fas fa-times"></i>Orthodontics</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Get Started</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="fas fa-tooth"></i>
                                    </div>
                                    <h4 className="title">Standard Plan</h4>
                                    <div className="price">
                                        <p className="amount">$49<span>/ Per Month</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="fas fa-check"></i>Preventive Care Coverage</li>
                                    <li><i className="fas fa-check"></i>Routine Check-ups</li>
                                    <li><i className="fas fa-check"></i>Basic & Major Dental Treatments</li>
                                    <li><i className="fas fa-check"></i>Cosmetic Procedures</li>
                                    <li className="cross"><i className="fas fa-times"></i>Orthodontics</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Get Started</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="single-table">
                                {/* <!-- Table Head --> */}
                                <div className="table-head">
                                    <div className="icon">
                                        <i className="fas fa-tooth"></i>
                                    </div>
                                    <h4 className="title">Premium Plan</h4>
                                    <div className="price">
                                        <p className="amount">$79<span>/ Per Month</span></p>
                                    </div>
                                </div>
                                {/* <!-- Table List --> */}
                                <ul className="table-list">
                                    <li><i className="fas fa-check"></i>Preventive Care Coverage</li>
                                    <li><i className="fas fa-check"></i>Routine Check-ups</li>
                                    <li><i className="fas fa-check"></i>Comprehensive Dental Treatments</li>
                                    <li><i className="fas fa-check"></i>Cosmetic Procedures</li>
                                    <li><i className="fas fa-check"></i>Orthodontics</li>
                                </ul>
                                <div className="table-bottom">
                                    <a className="btn" href="#">Get Started</a>
                                </div>
                                {/* <!-- Table Bottom --> */}
                            </div>
                        </div>
                        {/* <!-- End Single Table--> */}
                    </div>
                </div>
            </section>

            {/* <!-- End Blog Area --> */}

            {/* <!-- Start clients --> */}
            <div className="clients overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="owl-carousel clients-slider">
                                <div className="single-clients">
                                    <img src={client1} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client2} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client3} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client4} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client5} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client1} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client2} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client3} alt="#" />
                                </div>
                                <div className="single-clients">
                                    <img src={client4} alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/Ens clients --> */}

            {/* <!-- Start Appointment --> */}
            <section className="appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                                <img src={sectionimg} alt="#" />
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <form className="form" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabindex="0"><span
                                                className="current">Department</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">Department</li>
                                                    <li data-value="2" className="option">Cardiac Clinic</li>
                                                    <li data-value="3" className="option">Neurology</li>
                                                    <li data-value="4" className="option">Dentistry</li>
                                                    <li data-value="5" className="option">Gastroenterology</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <div className="nice-select form-control wide" tabindex="0"><span
                                                className="current">Doctor</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected ">Doctor</li>
                                                    <li data-value="2" className="option">Dr. Akther Hossain</li>
                                                    <li data-value="3" className="option">Dr. Dery Alex</li>
                                                    <li data-value="4" className="option">Dr. Jovis Karon</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Date" id="datepicker" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-4 col-12">
                                        <div className="form-group">
                                            <div className="button">
                                                <button type="submit" className="btn">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <p>( We will be confirm by an Text Message )</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="appointment-image">
                                <img src={contactimg} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Appointment --> */}

            {/* <!-- Start Newsletter Area --> */}
            <section className="newsletter section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6  col-12">
                            {/* <!-- Start Newsletter Form --> */}
                            <div className="subscribe-text ">
                                <h6>Sign up for newsletter</h6>
                                <p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br /> homero alterum.</p>
                            </div>
                            {/* <!-- End Newsletter Form --> */}
                        </div>
                        <div className="col-lg-6  col-12">
                            {/* <!-- Start Newsletter Form --> */}
                            <div className="subscribe-form ">
                                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                    <input name="EMAIL" placeholder="Your email address" className="common-input"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"
                                        required="" type="email" />
                                    <button className="btn">Subscribe</button>
                                </form>
                            </div>
                            {/* <!-- End Newsletter Form --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /End Newsletter Area --> */}

            <Footer />

        </div>
    )
}

export default Home
