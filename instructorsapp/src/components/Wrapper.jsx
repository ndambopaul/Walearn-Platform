import React from 'react';
import Sidebar from './Sidebar';

import "../Dashboard.css"

const Wrapper = ({ children }) => {
  return (
    <>
    
    <Sidebar />
    <div className="content">
    {children}
    </div>
    </>
  )
}

export default Wrapper