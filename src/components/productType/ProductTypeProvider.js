import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const productTypeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductType = productType => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
            .then(getProductTypes)
    }

    /*
        Load all productTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(
        () => {
            getProductTypes()
        },
        []
    )

    useEffect(
        () => {
            console.log("****  productType APPLICATION STATE CHANGED  ****")
        },
        [productTypes]
    )


    return (
        <productTypeContext.Provider value={{
            productTypes, addProductType
        }}>
            {props.children}
        </productTypeContext.Provider>
    )
}