import React from 'react'

export default (props) => {
    return(
        <section className="product">
            <section>Product: {props.product.productName}</section>
            <section>Product Price: ${props.product.productPrice}</section>
            <section>Product type Id: {props.product.productTypeId}</section>
        </section>
    )
}