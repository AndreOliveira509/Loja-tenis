import React, { useState } from 'react';
import Header from '../componentes/header';
import ProductCard from '../componentes/ProductCard';
import Filters from '../componentes/filters';

function Home() {
  const [products] = useState([
      {
        id: 1,
        name: "Tênis Nike Air Max 270",
        price: 799.99,
        image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/b249549b-7c56-4f89-82bc-0d7cfbfe7c6f/air-max-270-mens-shoes-KkLcGR.png",
        category: "Esportivo"
      },
      {
        id: 2,
        name: "Tênis Adidas Superstar",
        price: 599.99,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8be8e93d94e24f9fbf81afa101122c3d_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
        category: "Casual"
      },
      {
        id: 3,
        name: "Tênis Adidas Campus",
        price: 699.99,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f4e33cb8e0a48c6be34af7200f81b66_9366/Campus_00s_Shoes_Black_ID2048_01_standard.jpg",
        category: "Casual"
      },
      {
        id: 4,
        name: "Tênis Nike Air Force 1",
        price: 749.99,
        image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/22bfa2d8-2dbf-4f87-8cfb-2e8c5ef0ef8e/air-force-1-07-mens-shoes-LfW9w4.png",
        category: "Casual"
      },
      {
        id: 5,
        name: "Tênis Puma Suede Classic",
        price: 399.99,
        image: "https://images.puma.net/images/377671/02/sv01/fnd/PNA/w/1000/h/1000/bg/255,255,255",
        category: "Casual"
      },
      {
        id: 6,
        name: "Tênis Vans Old Skool",
        price: 349.99,
        image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$PDP-FULL-IMAGE$",
        category: "Skate"
      },
      {
        id: 7,
        name: "Tênis Converse Chuck Taylor",
        price: 329.99,
        image: "https://images.ctfassets.net/od02wyo8cgm5/2Gr2susx6bJ0YpRP70dNDO/42d16e0c602a9421c5d3870cde8637fb/ChuckTaylorAllStarClassicWhiteHI_Product.jpg",
        category: "Casual"
      },
      {
        id: 8,
        name: "Tênis Asics Gel-Nimbus 25",
        price: 999.99,
        image: "https://cdn.runrepeat.com/i/asics/31971/asics-gel-nimbus-25-white-indigo-blue-men-women-running-shoes-31971-800.jpg",
        category: "Corrida"
      },
      {
        id: 9,
        name: "Tênis Mizuno Wave Rider 26",
        price: 899.99,
        image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-rider-26-masculino/06/JD8-4991-006/JD8-4991-006_zoom1.jpg",
        category: "Corrida"
      },
      {
        id: 10,
        name: "Tênis New Balance 574",
        price: 699.99,
        image: "https://nb.scene7.com/is/image/NB/m5740gr_nb_02_i?$pdpflexf2$&wid=440&hei=440",
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