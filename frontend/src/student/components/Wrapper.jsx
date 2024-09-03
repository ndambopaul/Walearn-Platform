import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import "../Dashboard.css"

const Wrapper = ({ children }) => {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="content">
    {children}
    </div>
    </>
  )
}

export default Wrapper