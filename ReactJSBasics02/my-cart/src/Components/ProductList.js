import React from 'react'
import Product from "./Product.js"

export default function ProductList( props ) {
    console.log(props)
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
        return <Product product={product} key = {i} increamentQuantity={props.increamentQuantity} decreamentQt = {props.decreamentQty} index={i} removeItem={props.removeItem}/>
    }
    ) :
    <h1>No Products in the Cart</h1>
  )
}
