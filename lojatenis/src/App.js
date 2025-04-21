import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return React.createElement('div', { className: 'app' }, React.createElement(Home, null));
}

export default App;