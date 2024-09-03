import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { BACKEND_URL } from "../services/constants";

const ContactUs = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [message, setMessage] = useState("I won't mind a call for explanation");
  const [interestedIn, setInterestedIn] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const { courseSubCategories } = useContext(DataContext);

  const handleSubmit = async(e) => {
    e.preventDefault()
     
    const messageData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      content: message,
      course_interested: interestedIn
    }

    try {
      const response = await fetch(`${BACKEND_URL}/notifications/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
      })

      if (response.ok) {
        window.alert("Your message has been received, we will get back to you soon enough. Thank you!")
        window.location.reload()
      } else {
        window.alert("Something went wrong!")
      }

    } catch (error) {
      console.log(error)
    }

    console.log(messageData)
  }

  return (
    <section id="contact-us" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-8">
            <h5>Get in Touch</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      name="first_name"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      required
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
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label>What are you interested in?</label>
                <select className="form-select" id="interested_in" name="interested_in" onChange={(e) => setInterestedIn(e.target.value)} required>
                    {courseSubCategories.map((sub_category) => (
                      <option value={sub_category.name} key={sub_category._id}>{sub_category.name}</option>
                    ))}
                    
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Help us understand you and your needs better!"
                  onChange={(e) => setMessage(e.target.value)}
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
            <h5></h5>
            <p className="btn btn-outline-primary btn-sm mx-1"><i class="fa-solid fa-phone"></i> +254745491093</p>
            <p className="btn btn-outline-primary btn-sm mx-1"><i class="fa-solid fa-envelope"></i> paulkadabo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
