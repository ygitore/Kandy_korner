import React from 'react'
import LocationList from '../components/locations/LocationList'
import { LocationProvider } from './locations/LocationProvider'

export default () => {
    return(
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}