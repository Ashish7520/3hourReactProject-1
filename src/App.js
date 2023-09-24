import React, { useState, useEffect } from "react";
import ProductForm from "./components/Products/ProductForm";
import ProductList from "./components/Products/ProductList";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    updateTotalValue(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    updateTotalValue(updatedProducts);
  };

  const updateTotalValue = (productList) => {
    const total = productList.reduce(
      (sum, product) => sum + parseFloat(product.sellingPrice),
      0
    );
    setTotalValue(total);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <div className="totalValue">Total Value: {totalValue}</div>
    </div>
  );
};

export default App;
