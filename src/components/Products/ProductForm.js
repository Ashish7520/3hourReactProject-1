import React, { useState } from "react";

import "./ProductForm.css";

const ProductForm = ({ addProduct }) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ productId, sellingPrice, productName });
    setProductId("");
    setSellingPrice("");
    setProductName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Id</label>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <label>Selling Price</label>
      <input
        type="number"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
