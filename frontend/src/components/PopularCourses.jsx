import React from 'react'

const PopularCourses = () => {
  return (
    <section id="popular-courses" className="py-5">
    <div className="container">
        <h2 className="text-center mb-4">Popular Courses</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-laptop-code fa-3x"></i>
                        </div>
                        <h5 className="card-title">Full Stack Web Development</h5>
                        <p className="card-text">Become a proficient full stack developer by mastering front-end and back-end technologies.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-chart-line fa-3x"></i>
                        </div>
                        <h5 className="card-title">Data Science with Python</h5>
                        <p className="card-text">Gain expertise in data analysis and machine learning with Python, one of the most popular languages in the field.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-brain fa-3x"></i>
                        </div>
                        <h5 className="card-title">Deep Learning Specialization</h5>
                        <p className="card-text">Delve into deep learning with hands-on projects on neural networks, CNNs, RNNs, and more.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default PopularCourses