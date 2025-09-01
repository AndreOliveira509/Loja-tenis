// src/componentes/filters.js
import React from 'react';

function Filters({ filters, setFilters }) {
  const clearFilters = () => {
    setFilters({ searchTerm: "", category: "", maxPrice: "" });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Pesquisar tênis..."
        value={filters.searchTerm}
        onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
        className='search-input'
      />
      <div className="filter-options">
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">Todas categorias</option>
          <option value="Esportivo">Esportivo</option>
          <option value="Casual">Casual</option>
          <option value="Skate">Skate</option>
          <option value="Corrida">Corrida</option>
        </select>
        <input
          type="number"
          placeholder="Preço máximo"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <button className="clear-btn" onClick={clearFilters}>
          Limpar filtros
        </button>
      </div>
    </div>
  );
}

export default Filters;

