import React, { useContext } from "react";
import Employee from './Employee'
import './Employee.css'
import {EmployeeContext} from './EmployeeProvider'

export default ()=>{
    const {employees} = useContext(EmployeeContext)

    return (
        <>
            <h2>Employees</h2>
            <section className = "employees">
                {
                    employees.map(emp => <Employee key = {emp.id} employee = {emp} />)
                }
            </section>
        </>
    )
}