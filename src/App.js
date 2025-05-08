import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Вітаємо на нашому шікарному сайтіку</h1>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
