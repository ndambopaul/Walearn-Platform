import { createContext, useState, useEffect } from "react";
import { BACKEND_URL } from "../services/constants";

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
    const [courseCategories, setCourseCategories] = useState([])
    const [courseSubCategories, setCourseSubCategories] = useState([])

    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const [categoriesResponse, subCategoriesResponse] = await Promise.all([
                    fetch(`${BACKEND_URL}/courses/categories`),
                    fetch(`${BACKEND_URL}/courses/sub-categories`)
                ]);
    
                const categoriesData = await categoriesResponse.json();
                const subCategoriesData = await subCategoriesResponse.json();
    
                setCourseCategories(categoriesData);
                setCourseSubCategories(subCategoriesData);
            } catch (error) {
                console.error("Failed to fetch course categories or sub-categories:", error);
            }
        };
    
        fetchCategoriesData();
    }, []);

    return <DataContext.Provider value={{ courseCategories, courseSubCategories }}>
        {children}
    </DataContext.Provider>
}