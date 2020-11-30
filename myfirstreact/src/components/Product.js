import React from "react"

function Product(props){
    return(
        <div>
            <h1>ID: {props.product.id}</h1>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "BDT" })}
            -{props.product.description}</p>
        </div>
    )
}

export default Product