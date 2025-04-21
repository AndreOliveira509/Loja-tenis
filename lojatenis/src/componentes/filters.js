import React from 'react';

function Filters({ filters, setFilters }) {
  return React.createElement('div', { className: 'filters' },
    // Barra de pesquisa
    React.createElement('input', {
      type: 'text',
      placeholder: 'Pesquisar tênis...',
      value: filters.searchTerm,
      onChange: (e) => setFilters({...filters, searchTerm: e.target.value})
    }),
    // Restante dos filtros
    React.createElement('select', {
      value: filters.category,
      onChange: (e) => setFilters({...filters, category: e.target.value})
    },
      React.createElement('option', { value: '' }, 'Todas categorias'),
      React.createElement('option', { value: 'Esportivo' }, 'Esportivo'),
      React.createElement('option', { value: 'Casual' }, 'Casual')
    ),
    React.createElement('input', {
      type: 'number',
      placeholder: 'Preço máximo',
      value: filters.maxPrice,
      onChange: (e) => setFilters({...filters, maxPrice: e.target.value})
    })
  );
}

export default Filters;