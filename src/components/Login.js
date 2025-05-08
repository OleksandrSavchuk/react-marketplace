import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', form);
      localStorage.setItem('token', response.data.accessToken);
      alert('Успішний вхід!');
      navigate('/products');
    } catch (err) {
      console.error(err);
      alert('Невірний логін або пароль');
    }
  };

  return (
    <div>
      <h2>Вхід</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Електронна пошта: </label>
          <input type="email" name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Пароль: </label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default Login;
