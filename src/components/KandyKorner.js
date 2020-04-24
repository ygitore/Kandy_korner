import React from 'react'
import LocationList from '../components/locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'
import { ProductProvider } from './products/ProductProvider'
import ProductList from './products/ProductList'
import {EmployeeProvider} from '../components/employees/EmployeeProvider'
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
                <EmployeeList />
            </EmployeeProvider>
        </>
    )
}