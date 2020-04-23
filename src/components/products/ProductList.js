import React, { useContext } from 'react'
import Product from './Product'
import './Product.css'
import { ProductContext } from './ProductProvider'

export default ()=>{
    const {products} = useContext(ProductContext)

    return (
        <>
            <h2>Products</h2>
            <section className="products">
                {
                    products.map(pro=><Product key={pro.id} product = {pro}/>)
                }
            </section>
        </>
    )
}