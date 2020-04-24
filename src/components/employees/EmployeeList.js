import React, { useContext, useState } from "react";
import Employee from './Employee'
import './Employee.css'
import {EmployeeContext} from './EmployeeProvider'
import {Modal, ModalBody, ModalHeader} from 'reactstrap'
import EmployeeForm from "./EmployeeForm";
// import { ManagerContext } from "../managers/ManagerProvider";
// import { LocationContext } from "../locations/LocationProvider";

export default ()=>{
    const {employees} = useContext(EmployeeContext)
    // const {locations} = useContext(LocationContext)
    // const {managers} = useContext(ManagerContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (        
        <>
            <h2>Employees</h2>
            <div className = "fake_employee_link" onClick={toggle}>Hire Employee</div>
            <section className = "employees">
                {
                    employees.map(emp =>
                    {
                        return <Employee key = {emp.id} employee = {emp} />
                    })
                }
            </section>
            <Modal isOpen ={modal} toggle = {toggle}>
                <ModalHeader toggle = {toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler = {toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}