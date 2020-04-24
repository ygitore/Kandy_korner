import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ManagerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ManagerProvider = (props) => {
    const [managers, setManagers] = useState([])

    const getManagers = () => {
        return fetch("http://localhost:8088/managers")
            .then(res => res.json())
            .then(setManagers)
    }

    const addManager = manager => {
        return fetch("http://localhost:8088/managers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(manager)
        })
            .then(getManagers)
    }

    /*
        Load all Managers when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(
        () => {
            getManagers()
        },
        []
    )

    useEffect(
        () => {
            console.log("****  Manager APPLICATION STATE CHANGED  ****")
        },
        [managers]
    )


    return (
        <ManagerContext.Provider value={{
            managers, addManager
        }}>
            {props.children}
        </ManagerContext.Provider>
    )
}