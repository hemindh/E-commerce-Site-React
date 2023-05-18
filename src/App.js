import React from 'react';
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Cart/Cart';




function App() {

  
   
  
  return (
    <div className="App">
      {/* <Cart /> */}
        <Header />
        <ProductList />
    </div>
  );
}

export default App;
