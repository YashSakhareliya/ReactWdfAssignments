import React from 'react'

function ProductInfo() {
    const products = [
        { name: 'oil', price: 500, availability: true },
        { name: 'Soap', price: 200, availability: false },
        { name: 'shampoo', price: 300, availability: true },
        { name: 'detergent', price: 400, availability: false },
        { name: 'bathroom cleaner', price: 600, availability: true },
    ]
  return (
    <div>
        <h1>Products Info</h1>
      <ul>
        {products.map(product =>{
            return <li>name: {product.name} | Price: {product.price} | Availability: {product.availability}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductInfo
