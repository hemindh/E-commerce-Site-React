import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import {Routes , Route} from 'react-router-dom'
import SinglePage from './Single/SinglePage';




function App() {

  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
