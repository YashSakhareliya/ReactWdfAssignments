import React from 'react'

function ProductList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <div>
        <h2>Products List</h2>
        <ul>
            {products.map(product => (
                <li>
                    {product.name} - {product.price}
                </li>
            ))}
        </ul>

      
    </div>
  )
}

export default ProductList
