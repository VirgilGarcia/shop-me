import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {

  const [newProduct, setNewProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleInputChange = (e) => {
    setNewProduct(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.trim() !== '') {
      onAddProduct({ name: newProduct, quantity: quantity });
      setNewProduct('');
      setQuantity('');
    }
  };

  return (
    <div className="addProduct">
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <div className='formulaire'>
          <input
            type="text"
            placeholder="Nom du produit"
            value={newProduct}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Quantité"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className='submit'>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>

  );
};

export default AddProductForm;
