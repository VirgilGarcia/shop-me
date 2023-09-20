import React, { useState, useEffect } from 'react';
import './style.css';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = { id: Date.now(), name: product.name, quantity: product.quantity };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="App">
      <h1>Shop<span>Me!</span></h1>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDeleteProduct={deleteProduct} />
      <footer>© 2023 Virgil Garcia</footer>
    </div>
  );
}

export default App;
