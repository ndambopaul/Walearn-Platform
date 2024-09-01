import React from 'react'

const Instructors = () => {
  return (
    <section id="instructors" className="py-5">
    <div className="container">
        <h2 className="text-center mb-4">Meet Our Instructors</h2>
        <div className="row">
            <div className="col-md-4 mb-1">
                <div className="card h-100 text-center">
                    <img src="" className="card-img-top rounded-circle mx-auto mt-3" alt="Instructor 1" style={{"width": "150px"}} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Jane Doe</h5>
                        <p className="card-text">Jane is a seasoned software engineer with 10+ years of experience in full stack development. She specializes in teaching web development and JavaScript frameworks.</p>
                        <div className="social-icons">
                            <a href="https://twitter.com/jane_doe" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/jane_doe" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/jane_doe" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-1">
                <div className="card h-100 text-center">
                    <img src="instructor2.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Instructor 2" style={{"width": "150px"}} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">John Smith</h5>
                        <p className="card-text">John is a data scientist with a passion for AI and machine learning. He has led multiple projects in predictive analytics and is a sought-after speaker in the data science community.</p>
                        <div className="social-icons">
                            <a href="https://twitter.com/john_smith" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/john_smith" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/john_smith" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-1">
                <div className="card h-100 text-center">
                    <img src="instructor3.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Instructor 3" style={{"width": "150px"}} />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Emily Clark</h5>
                        <p className="card-text">Emily is an expert in data analytics with over 8 years of experience in business intelligence and reporting. She is passionate about teaching data-driven decision-making skills.</p>
                        <div className="social-icons">
                            <a href="https://twitter.com/emily_clark" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/emily_clark" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/emily_clark" className="btn btn-outline-primary btn-sm mx-1">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Instructors