import React from 'react'

const Team = () => {
  return (
   
    <div className="container py-5" id="team">
        <div className="text-center mb-5">
            <h2>Meet Our Team</h2>
            <p className="text-muted">Our team is composed of experienced professionals dedicated to providing top-quality education and guidance.</p>
        </div>
        <div className="row">
           
            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch mb-1">
                <div className="card shadow-sm border-0">
                    <img src="images/paulndambo.jpg" className="card-img-top image-fluid rounded-top" alt="Jane Doe" />
                    <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-title mb-0">Paul Ndambo</h5>
                        <p className="text-muted small">Head of Software Development</p>
                        <p className="card-text small">Expert in Python, Full-Stack Development, and Machine Learning.</p>
                        <div className="mt-auto">
                            <a href="#" className="btn btn-outline-primary btn-sm me-2"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="btn btn-outline-info btn-sm me-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-outline-dark btn-sm"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
          
            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch mb-1">
                <div className="card shadow-sm border-0">
                    <img src="images/paulndambo.jpg" className="card-img-top image-fluid rounded-top" alt="Jane Doe" />
                    <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-title mb-0">John Doe</h5>
                        <p className="text-muted small">Head of Data Science</p>
                        <p className="card-text small">Expert in Python, Full-Stack Development, and Machine Learning.</p>
                        <div className="mt-auto">
                            <a href="#" className="btn btn-outline-primary btn-sm me-2"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="btn btn-outline-info btn-sm me-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-outline-dark btn-sm"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch mb-1">
                <div className="card shadow-sm border-0">
                    <img src="images/paulndambo.jpg" className="card-img-top image-fluid rounded-top" alt="Jane Doe" />
                    <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-title mb-0">James Doe</h5>
                        <p className="text-muted small">Head of Data Science</p>
                        <p className="card-text small">Expert in Python, Full-Stack Development, and Machine Learning.</p>
                        <div className="mt-auto">
                            <a href="#" className="btn btn-outline-primary btn-sm me-2"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="btn btn-outline-info btn-sm me-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="btn btn-outline-dark btn-sm"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    

  )
}

export default Team