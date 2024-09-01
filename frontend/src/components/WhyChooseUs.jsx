import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className="container mt-2 text-center icon-section bg-light py-5">
    <h2>Why Choose Us?</h2>
    <div className="row">
        <div className="col-md-3">
            <i className="fas fa-chalkboard-teacher"></i>
            <h4>Expert Instructors</h4>
            <p>Learn from industry experts with real-world experience.</p>
        </div>
        <div className="col-md-3">
            <i className="fas fa-clock"></i>
            <h4>Flexible Learning</h4>
            <p>Study at your own pace with our flexible course schedules.</p>
        </div>
        <div className="col-md-3">
            <i className="fas fa-laptop-code"></i>
            <h4>Hands-on Projects</h4>
            <p>Get practical experience with hands-on projects.</p>
        </div>
        <div className="col-md-3">
            <i className="fas fa-users"></i>
            <h4>Community Support</h4>
            <p>Join a community of like-minded learners.</p>
        </div>
    </div>
</div>
  )
}

export default WhyChooseUs