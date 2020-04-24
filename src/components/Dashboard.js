import React from 'react'
import LocationList from './locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'
import { ProductProvider } from './products/ProductProvider'
import ProductList from './products/ProductList'
import {EmployeeProvider} from './employees/EmployeeProvider'
import EmployeeList from './employees/EmployeeList'

export default () => {
    return(
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
            <ProductProvider>
                <ProductList />
            </ProductProvider>
            <EmployeeProvider>
                <LocationProvider>
                    <EmployeeList />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}