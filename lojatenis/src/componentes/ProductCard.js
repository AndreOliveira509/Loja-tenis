import React from 'react';

function ProductCard({ product }) {
  return React.createElement('div', { className: 'product-card' },
    React.createElement('img', { src: product.image, alt: product.name }),
    React.createElement('h3', null, product.name),
    React.createElement('p', null, `R$ ${product.price.toFixed(2)}`),
    React.createElement('p', null, product.category)
  );
}

export default ProductCard;