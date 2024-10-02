import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Teacher Dashboard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#profile">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/students">Students</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/courses">My Courses</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/assignments">Assignments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/grades">Grades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#settings">Settings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#logout">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar