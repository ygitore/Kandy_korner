import React, { useContext, useRef, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import {Button } from 'reactstrap'
import { LocationContext } from '../locations/LocationProvider'

export default (props) => {       
    const {addEmployee} = useContext(EmployeeContext)
    const {locations} = useContext(LocationContext)
    const {employeeName} = useRef()
    const {manager} = useRef()
    const {fullTime} = useRef()
    const {employeeWage} = useRef()
    const {location} = useRef()

    const hireEmployee = () => {
        debugger
        let isManager = ""
        if(manager.current.value !== "0"){
            manager.current.value === "1" ? isManager = true : isManager = false
        }else{
            window.alert("Incorrect selection made")
        }
        let isFullTime = ""
        if(isFullTime.current.value !== "0"){
            fullTime.current.value === "1" ? isFullTime = true : isFullTime = false
        }else{
            window.alert("Incorrect selection made")
        }
        const empLocation = ""
        if(location.current.value !== "0"){
            empLocation = location.current.value
        }else{
            window.alert("Incorrect choice")
        }
        const newEmployee = {
            name: employeeName.current.value,
            manager: isManager,
            fullTime: isFullTime,
            location: parseInt(empLocation),
            hourlyRate: employeeWage.current.value
        }
        addEmployee(newEmployee).then(props.toggler)
        
    }
    return (
        <form>
            <input type="text"
                placeholder="employee name"
                ref = {employeeName}
                autoFocus
                required
            />
            
            <select ref={manager}  defaultValue = "">
                <option value = "0">Are you manager?</option>
                <option value = "1">Yes</option>
                <option value = "2">No</option>
            </select>
            <select ref = {location} defaultValue = "">
                <option value = "0">Assign to location</option>
                {
                    locations.map(loc=>(<option key = {loc.id} value = {loc.id}>{loc.address}</option>))
                }
            </select>
            <select ref={fullTime}>
                <option value = "0">Fulltime employee?</option>
                <option value = "1">Yes</option>
                <option value = "2">No</option>                
            </select>
            <input type="text"
                placeholder="per hour"
                ref = {employeeWage}
                autoFocus
            />
            <Button onClick = {e=>{
                e.preventDefault()
                hireEmployee()
            }}>Save employee</Button>
        </form>
    )
}