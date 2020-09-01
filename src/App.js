import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import Books from './components/Books/Books';

function App() {
  return (
    <div>
      <Header />
      <Subheader />
      <Books />
    </div>
  );
}

export default App;
