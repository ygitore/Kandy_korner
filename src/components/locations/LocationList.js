import React, { useContext } from 'react'
import Location from './Location';
import './Location.css';
import { LocationContext } from './LocationProvider';

export default () => {
    const {locations} = useContext(LocationContext)
    return(
        <>
            <h2>Locations</h2>
            <section className="locations">
                {
                    locations.map(loc=><Location key={loc.id} location = {loc} />)
                }
            </section>
        </>
    )
}