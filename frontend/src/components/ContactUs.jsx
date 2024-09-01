import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-8">
            <h5>Get in Touch</h5>
            <form>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone_number"
                      name="phone_number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <select className="form-select" id="interested_in" name="interested_in">
                    <option>What are you interested in?</option>
                    <option>Software Development Bootcamp</option>
                    <option>Data Science Bootcamp</option>
                    <option>Machine Learning Bootcamp</option>
                    <option>Frontend Development Bootcamp</option>
                    <option>Backend Development Bootcamp</option>
                    <option>Generative AI Bootcamp</option>
                    <option>Data Analytics Bootcamp</option>
                    <option>I don't know yet</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Help us understand you and your needs better!"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <p>You can reach us through our social media channels:</p>
            <div className="social-icons mb-3">
              <a
                href="https://twitter.com/your_company"
                className="btn btn-outline-primary btn-sm mx-1"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://facebook.com/your_company"
                className="btn btn-outline-primary btn-sm mx-1"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://linkedin.com/company/your_company"
                className="btn btn-outline-primary btn-sm mx-1"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
            <h5>Our Location</h5>
            <p>1234 Education Lane, Knowledge City, 56789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
