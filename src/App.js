// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
