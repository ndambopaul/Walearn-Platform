import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-5">
    <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
            <div className="col-md-6">
                <h5>Get in Touch</h5>
                <form>
                    <div className="form-group mb-3">
                        <label for="name">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group mb-3">
                        <label for="email">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group mb-3">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
            <div className="col-md-6">
                <h5>Connect with Us</h5>
                <p>You can reach us through our social media channels:</p>
                <div className="social-icons mb-3">
                    <a href="https://twitter.com/your_company" className="btn btn-outline-primary btn-sm mx-1">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://facebook.com/your_company" className="btn btn-outline-primary btn-sm mx-1">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://linkedin.com/company/your_company" className="btn btn-outline-primary btn-sm mx-1">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
                <h5>Our Location</h5>
                <p>1234 Education Lane, Knowledge City, 56789</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default ContactUs