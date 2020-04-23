import React from 'react'
import LocationList from '../components/locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'
import { ProductProvider } from './products/ProductProvider'
import ProductList from './products/ProductList'

export default () => {
    return(
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </>
    )
}