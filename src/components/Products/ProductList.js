import React from "react";

import "./ProductList.css";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.productId}>
          <span>{`Product Name: ${product.productName}, Selling Price: ${product.sellingPrice}`}</span>
          <button onClick={() => deleteProduct(product.productId)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
