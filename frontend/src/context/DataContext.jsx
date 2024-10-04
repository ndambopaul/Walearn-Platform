import { createContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../services/constants";
import Cookies from 'js-cookie';

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
    const [studentDetails, setStudentDetails] = useState({})
    
    const token = Cookies.get('token');

    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const [studentResponse] = await Promise.all([
                    
                    fetch(`${BACKEND_URL}/students/student-profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),
                ]);
    
                const studentData = await studentResponse.json();
                setStudentDetails(studentData);
                
                
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchCategoriesData();
    }, []);
    

    return <DataContext.Provider value={{ studentDetails }}>
        {children}
    </DataContext.Provider>
}