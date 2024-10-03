import { createContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../services/constants";
import Cookies from 'js-cookie';

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
    const [courseCategories, setCourseCategories] = useState([])
    const [courseSubCategories, setCourseSubCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [studentDetails, setStudentDetails] = useState({})
    const [assignments, setAssignments] = useState([])

    const token = Cookies.get('token');
    

    return <DataContext.Provider value={{ courseCategories, courseSubCategories, courses, studentDetails }}>
        {children}
    </DataContext.Provider>
}