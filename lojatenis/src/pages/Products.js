import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/filters";
import '../styles/products.css';
import '../styles/filters.css';

const initialProducts = [
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
      }, 
      {
        id: 11,
        name: "Tênis Nike Air Max 270",
        price: 799.99,
        image: "https://www.nike.com/lu/en/t/air-max-270-shoes-fTat1UHa", // imagem lateral limpa desde o site oficial Nike
        category: "Esportivo"
      },
      {
        id: 12,
        name: "Tênis Fila Disruptor II",
        price: 379.99,
        image: "https://www.walmart.com/ip/FILA-Disruptor-II-Clear-Logos/836578414", // imagem da silhueta clara e destacada
        category: "Casual"
      },
          {
        id: 13,
        name: "Nike Air Force 1 '07 White",
        price: 749.99,
        image: "https://mckickz.co.uk/products/nike-air-force-1-07-triple-white-cw2288-111", // vista superior, clean
        category: "Casual"
      },
      {
        id: 14,
        name: "Adidas Campus 00s Core Black",
        price: 689.99,
        image: "https://ekicks.eu/it-it/products/adidas-campus-00s-core-black", // ângulo 3/4, logo em evidência
        category: "Casual"
      },
      {
        id: 15,
        name: "Nike Air Force 1 Lateral (PNG Clean)",
        price: 749.99,
        image: "https://wallpapers.com/png/nike-air-force1-sneaker-side-view-ydye7ditlhgx5ykj", // clean lateral PNG
        category: "Casual"
      },
      {
        id: 16,
        name: "Nike Air Force 1 Low '07 White - profile",
        price: 749.99,
        image: "https://avpawn.com/shop/nike-air-force-1-low-07-white-size-10m/", // lateral sobre fundo branco
        category: "Casual"
      },
      {
        id: 17,
        name: "Adidas Superstar Clean View",
        price: 599.99,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8be8e93d94e24f9fbf81afa101122c3d_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
        category: "Casual"
      },
      {
        id: 18,
        name: "Adidas Campus Classic Black",
        price: 699.99,
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f4e33cb8e0a48c6be34af7200f81b66_9366/Campus_00s_Shoes_Black_ID2048_01_standard.jpg",
        category: "Casual"
      },
      {
        id: 19,
        name: "Converse Chuck Taylor All Star White",
        price: 329.99,
        image: "https://images.ctfassets.net/od02wyo8cgm5/2Gr2susx6bJ0YpRP70dNDO/42d16e0c602a9421c5d3870cde8637fb/ChuckTaylorAllStarClassicWhiteHI_Product.jpg",
        category: "Casual"
      },
      {
        id: 20,
        name: "Puma Suede Classic White",
        price: 399.99,
        image: "https://images.puma.net/images/377671/02/sv01/fnd/PNA/w/1000/h/1000/bg/255,255,255",
        category: "Casual"
      },
      {
        id: 21,
        name: "Vans Old Skool Black",
        price: 349.99,
        image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$PDP-FULL-IMAGE$",
        category: "Skate"
      },
      {
        id: 22,
        name: "Asics Gel-Nimbus 25 White/Blue",
        price: 999.99,
        image: "https://cdn.runrepeat.com/i/asics/31971/asics-gel-nimbus-25-white-indigo-blue-men-women-running-shoes-31971-800.jpg",
        category: "Corrida"
      },
      {
        id: 23,
        name: "Mizuno Wave Rider 26 White",
        price: 899.99,
        image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-rider-26-masculino/06/JD8-4991-006/JD8-4991-006_zoom1.jpg",
        category: "Corrida"
      },
      {
        id: 24,
        name: "New Balance 574 Grey",
        price: 699.99,
        image: "https://nb.scene7.com/is/image/NB/m5740gr_nb_02_i?$pdpflexf2$&wid=440&hei=440",
        category: "Casual"
      }
      // ... se quiser, cole aqui os demais 18 itens
    ];

function Products() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    maxPrice: ""
  });

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setFavorites(storedFavs);
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());
    const matchesCategory =
      filters.category === "" || product.category === filters.category;
    const matchesPrice =
      filters.maxPrice === "" || product.price <= Number(filters.maxPrice);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main>
      <h2 style={{ color: '#111', marginBottom: '20px' }}>Pesquisar Produtos</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="products-container">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isFavorite={favorites.includes(p.id)}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Products;