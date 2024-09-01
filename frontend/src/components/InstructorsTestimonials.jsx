import React from 'react'

const InstructorsTestimonials = () => {
  return (
    <section id="instructors-testimonials" className="py-5 bg-light">
    <div className="container">
        <h2 className="text-center mb-4">What Our Instructors Say</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <img src="instructor1.jpg" className="rounded-circle mb-3" alt="Instructor 1" style={{"width": "80px"}} />
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="card-text">"Teaching on this platform has been a fantastic experience. The tools provided make it easy to connect with students and deliver high-quality content. I’m proud to be part of this community."</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <img src="instructor2.jpg" className="rounded-circle mb-3" alt="Instructor 2" style={{"width": "80px"}} />
                        <h5 className="card-title">John Smith</h5>
                        <p className="card-text">"This platform is a game-changer for both instructors and students. The user-friendly interface and wide reach allow me to share my knowledge with learners from around the world."</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <img src="instructor3.jpg" className="rounded-circle mb-3" alt="Instructor 3" style={{"width": "80px"}} />
                        <h5 className="card-title">Emily Clark</h5>
                        <p className="card-text">"The support from the team and the tools available on this platform have made it easy for me to create and manage courses effectively. I highly recommend this platform to other educators."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default InstructorsTestimonials