import { createContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../services/constants";
import Cookies from 'js-cookie';

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
    const [courseCategories, setCourseCategories] = useState([])
    const [courseSubCategories, setCourseSubCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [studentDetails, setStudentDetails] = useState(null)
    const [assignments, setAssignments] = useState([])

    const token = Cookies.get('token');
    console.log(token)

    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const [categoriesResponse, subCategoriesResponse, coursesResponse, studentResponse] = await Promise.all([
                    fetch(`${BACKEND_URL}/courses/categories`),
                    fetch(`${BACKEND_URL}/courses/sub-categories`),
                    fetch(`${BACKEND_URL}/courses`),
            
                    fetch(`${BACKEND_URL}/users/student-profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),
                ]);
    
                const categoriesData = await categoriesResponse.json();
                const subCategoriesData = await subCategoriesResponse.json();
                const coursesData = await coursesResponse.json();
                const studentData = await studentResponse.json();
                
    
                setCourseCategories(categoriesData);
                setCourseSubCategories(subCategoriesData);
                setCourses(coursesData);
                setStudentDetails(studentData);
                
                
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchCategoriesData();
    }, []);

    return <DataContext.Provider value={{ courseCategories, courseSubCategories, courses, studentDetails }}>
        {children}
    </DataContext.Provider>
}