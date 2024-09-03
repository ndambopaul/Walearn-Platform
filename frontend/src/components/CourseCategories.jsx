import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const CourseCategories = () => {
    const { courseCategories } = useContext(DataContext)
    console.log(courseCategories)
  return (
    <section id="course-offerings" className="py-5">
    <div className="container">
        <h2 className="text-center mb-4">Our Course Offerings</h2>
        <div className="row">
            {courseCategories.map((category) => (
                <div className="col-md-3 mb-1" key={category._id}>
                <div className="card h-100 text-center">
                    <div className="card-body">
                        <div className="icon mb-3">
                            <i className={`${category.icon}`}></i>
                        </div>
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.description}</p>
                        <a href="#" className="btn btn-primary">Explore Courses</a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>

  )
}

export default CourseCategories