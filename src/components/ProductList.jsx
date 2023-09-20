import React from 'react';
import Product from './Product';

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <div className="productList">
      {products.length === 0 ? (
        <p>Aucun produit dans votre liste.. 😢</p>
      ) : (
        <div>
          <p>Il y a {products.length} produit(s) dans votre liste !</p>
          <ul>
            {products.map((product) => (
              <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
