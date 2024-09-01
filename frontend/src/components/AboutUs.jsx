import React from 'react'

const AboutUs = () => {
  return (
  
<div className="container mt-5 py-5" id="about">
    <div className="row">
        <div className="col-lg-6 mb-4">
            <h2>About Us</h2>
            <p>We are dedicated to empowering individuals with the skills they need to excel in the dynamic world of technology. Our mission is to provide high-quality, project-based learning experiences that foster practical skills and career growth. We believe in the transformative power of education and strive to create an inclusive, engaging, and hands-on learning environment.</p>
            <p>Our vision is to be a leading platform for software development and data-related courses, enabling students to thrive in their chosen fields through real-world projects, expert guidance, and a supportive community.</p>
            <a href="#" className="btn btn-primary mt-3">Learn More</a>
        </div>
        <div className="col-lg-6">
            <div className="row">
               
                <div className="col-md-6 mb-4 text-center">
                    <img src="team-member1.jpg" alt="Team Member 1" className="rounded-circle mb-2" style="width: 100px; height: 100px;" />
                    <h5>Jane Doe</h5>
                    <p className="text-muted">Founder & Lead Instructor</p>
                </div>
                
                <div className="col-md-6 mb-4 text-center">
                    <img src="team-member2.jpg" alt="Team Member 2" className="rounded-circle mb-2" style="width: 100px; height: 100px;" />
                    <h5>John Smith</h5>
                    <p className="text-muted">Head of Data Science</p>
                </div>
                
                <div className="col-md-6 mb-4 text-center">
                    <img src="team-member3.jpg" alt="Team Member 3" className="rounded-circle mb-2" style="width: 100px; height: 100px;" />
                    <h5>Emily Brown</h5>
                    <p className="text-muted">Machine Learning Specialist</p>
                </div>
                <div className="col-md-6 mb-4 text-center">
                    <img src="team-member4.jpg" alt="Team Member 4" className="rounded-circle mb-2" style="width: 100px; height: 100px;" />
                    <h5>Michael Lee</h5>
                    <p className="text-muted">Full-Stack Developer</p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default AboutUs