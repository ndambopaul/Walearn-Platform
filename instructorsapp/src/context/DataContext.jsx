import { useState, useEffect, createContext } from "react";
import Cookies from 'js-cookie';

import { BACKEND_URL } from "../services/constants";

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
    const [instructorDetails, setInstructorDetails] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [grades, setGrades] = useState([]);

    const token = Cookies.get("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [instructorDataResponse, assignmentsResponse, gradesResponse] = await Promise.all([
                    fetch(`${BACKEND_URL}/users/instructor-profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),
                    fetch(`${BACKEND_URL}/students/assignments`),
                    fetch(`${BACKEND_URL}/students/grades`)
                ]);
    
                const instructorData = await instructorDataResponse.json();
                const assignmentsData = await assignmentsResponse.json();
                const gradesData = await gradesResponse.json();
                setInstructorDetails(instructorData)
                setAssignments(assignmentsData)
                setGrades(gradesData)
               
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchData();
    }, []);

    
    return <DataContext.Provider value={{ instructorDetails, assignments, grades }}>
        {children}
    </DataContext.Provider>;
}