import React from 'react'

const CourseCategories = () => {
  return (
    <section id="course-offerings" className="py-5">
    <div className="container">
        <h2 className="text-center mb-4">Our Course Offerings</h2>
        <div className="row">
            <div className="col-md-3 mb-1">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-code fa-3x"></i>
                        </div>
                        <h5 className="card-title">Software Development</h5>
                        <p className="card-text">Master the art of software engineering with hands-on courses in programming, web development, and more.</p>
                        <a href="#" className="btn btn-primary">Explore Courses</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-1">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-database fa-3x"></i>
                        </div>
                        <h5 className="card-title">Data Science</h5>
                        <p className="card-text">Unlock the power of data with our comprehensive courses in data analysis, statistics, and visualization.</p>
                        <a href="#" className="btn btn-primary">Explore Courses</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-1">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-chart-bar fa-3x"></i>
                        </div>
                        <h5 className="card-title">Data Analytics</h5>
                        <p className="card-text">Learn how to analyze data to drive business decisions with courses in data mining, reporting, and more.</p>
                        <a href="#" className="btn btn-primary">Explore Courses</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-1">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className="fas fa-robot fa-3x"></i>
                        </div>
                        <h5 className="card-title">Machine Learning</h5>
                        <p className="card-text">Dive into the world of AI with our machine learning courses covering algorithms, neural networks, and more.</p>
                        <a href="#" className="btn btn-primary">Explore Courses</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default CourseCategories