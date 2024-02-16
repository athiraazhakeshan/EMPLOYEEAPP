import {createContext,useContext,useState} from "react";

const EmployeeContext=createContext();

export const EmpolyeeProvider=({children})=>{

    const [employeeData,setEmployeeData]=useState([]);

    const updateEmployeeData=(newEmployee)=>{
        
        setEmployeeData([...employeeData,newEmployee]);
    };
    return(
        <EmployeeContext.Provider value={{employeeData,updateEmployeeData}}>
        {children}
        </EmployeeContext.Provider>
    );
};
export const useEmployeeContext=()=>useContext(EmployeeContext);