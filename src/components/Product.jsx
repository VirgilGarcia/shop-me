import React from 'react';

const Product = ({ product, onDeleteProduct }) => {

  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  return (
    <div>
      <li>
        {product.name}&nbsp;&nbsp;
        {product.quantity > 0 && (
          <span>(x{product.quantity})</span>
        )}
        <input type="button" onClick={handleDelete} value="🗑️" />
      </li>
    </div>
  );
};

export default Product;
