import { useState, useEffect, createContext } from "react";
import Cookies from 'js-cookie';

import { BACKEND_URL } from "../services/constants";

export const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const [attendances, setAttendances] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [grades, setGrades] = useState([]);
    const [instructorDetails, setInstructorDetails] = useState(null);

    const token = Cookies.get("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [studentsResponse, attendanceResponse, assignmentsResponse, gradesResponse, instructorDetailsResponse] = await Promise.all([
                    
                    fetch(`${BACKEND_URL}/students`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),

                    fetch(`${BACKEND_URL}/students/attendances`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),

                    fetch(`${BACKEND_URL}/courses/assignments`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),

                    fetch(`${BACKEND_URL}/students/assignments-submissions`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }),

                    fetch(`${BACKEND_URL}/instructors/profile`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    })

                ]);
    
                const studentData = await studentsResponse.json();
                const attendanceData = await attendanceResponse.json();
                const assignmentsData = await assignmentsResponse.json();
                const gradesData = await gradesResponse.json();
                const instructorDetails = await instructorDetailsResponse.json();

                setStudents(studentData);
                setAttendances(attendanceData);
                setAssignments(assignmentsData);
                setGrades(gradesData);
                setInstructorDetails(instructorDetails);
                
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchData();
    }, []);

    
    return <DataContext.Provider value={{ students, attendances, assignments, grades, instructorDetails }}>
        {children}
    </DataContext.Provider>;
}