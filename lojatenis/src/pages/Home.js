import React, { useState } from 'react';
import Header from '../componentes/header';
import ProductCard from '../componentes/ProductCard';
import Filters from '../componentes/filters';

function Home() {
  const [products] = useState([
    {
      id: 1,
      name: "Tênis Nike Air Max",
      price: 799.99,
      image: "https://via.placeholder.com/150",
      category: "Esportivo"
    },
    {
      id: 2,
      name: "Tênis Adidas Superstar", 
      price: 599.99,
      image: "https://via.placeholder.com/150",
      category: "Casual"
    },
    {
        id: 3,
        name: "Tênis Adidas Campus", 
        price: 699.99,
        image: "https://via.placeholder.com/150",
        category: "Casual"
      }
  ]);
  
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    maxPrice: ''
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesCategory = filters.category === '' || product.category === filters.category;
    const matchesPrice = filters.maxPrice === '' || product.price <= filters.maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return React.createElement('div', null,
    React.createElement(Header, null),
    React.createElement(Filters, { filters, setFilters }),
    React.createElement('div', { className: 'products' },
      filteredProducts.map(product => 
        React.createElement(ProductCard, { key: product.id, product })
      )
    )
  );
}

export default Home;