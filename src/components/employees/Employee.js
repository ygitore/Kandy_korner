import React from 'react'

export default (props) => {
    return (
        <section className = "employee">
            <section>Name: {props.employee.name}</section>
            <section>Working at: {props.employee.address}</section> 
            <section>Is Manager: {props.employee.manager}</section>
            <section>FullTime: {props.employee.fullTime}</section>
            <section>Wage: ${props.employee.hourlyRate}</section>
        </section>
    )
}