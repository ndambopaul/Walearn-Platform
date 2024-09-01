import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center">
        <div className="container">
            <p>© 2024 Walearn Inc. All rights reserved.</p>
            <p>
                <a href="#">Contact Us</a> | 
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a>
            </p>
            <div>
                <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer