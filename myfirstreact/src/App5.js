import React from "react"
import Product from "./components/Product"
import products from "./vschoolProducts"

function App5() {
/*     const productComponents=products.map(item => <Product id={item.id} 
        name={item.name} 
        price={item.price} 
        description={item.description} />) */
        const productComponents=products.map(item => <Product id={item.id} 
            product={item}/>)

  return (
    <div>
        {productComponents}
    </div>
  )
}

export default App5