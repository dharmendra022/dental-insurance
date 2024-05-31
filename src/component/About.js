import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p className='mt-2'>Welcome to <span className="company-name">Your Dental Insurance Company Name</span>, where we are dedicated to providing comprehensive dental insurance coverage to individuals and families across the nation. Our mission is to ensure that everyone has access to high-quality dental care without financial barriers.</p>
                </div>

                <div className="commitment">
                    <h3>Our Commitment</h3>
                    <p className='mt-2'>At <span className="company-name">Your Dental Insurance Company Name</span>, we understand the importance of oral health and its impact on overall well-being. That's why we're committed to offering affordable and flexible dental insurance plans tailored to meet the diverse needs of our members.</p>
                </div>

                <div className="coverage">
                    <h3>Comprehensive Coverage</h3>
                    <p className='mt-2'>With our dental insurance plans, you can enjoy peace of mind knowing that you and your loved ones are covered for a wide range of dental services, including:</p>
                    <ul>
                        <li>Routine check-ups and cleanings</li>
                        <li>Preventive care such as fluoride treatments and sealants</li>
                        <li>Restorative treatments like fillings, crowns, and bridges</li>
                        <li>Periodontal treatments for gum disease</li>
                        <li>Oral surgeries, including extractions and wisdom tooth removal</li>
                        <li>Orthodontic services, including braces and clear aligners</li>
                    </ul>
                </div>

                <div className="providers">
                    <h3>Network of Providers</h3>
                    <p className='mt-2'>We've partnered with a network of trusted dental professionals nationwide to ensure that you have access to quality care wherever you are. Whether you prefer to visit a general dentist for routine care or need to see a specialist for more complex procedures, our extensive network has you covered.</p>
                </div>

                <div className="customer-service">
                    <h3>Exceptional Customer Service</h3>
                    <p className='mt-2'>At <span className="company-name">Your Dental Insurance Company Name</span>, we prioritize customer satisfaction above all else. Our friendly and knowledgeable customer service team is here to assist you every step of the way, from choosing the right plan for your needs to processing claims and answering any questions you may have.</p>
                </div>

                <div className="join-us mb-5">
                    <h3>Join Us Today</h3>
                    <p className='mt-2'>Join the thousands of satisfied members who trust <span className="company-name">Your Dental Insurance Company Name</span> for their dental insurance needs. Whether you're an individual looking for coverage or an employer seeking benefits for your employees, we have a plan for you.</p>
                    <p>Contact us today to learn more about our dental insurance plans and take the first step toward a healthier smile!</p>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default About
