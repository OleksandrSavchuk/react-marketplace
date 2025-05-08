import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    role: 'USER'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/auth/register', form);
      alert('Успішна реєстрація!');
    } catch (err) {
      console.error(err);
      alert('Помилка реєстрації');
    }
  };

  return (
    <div>
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Імʼя: </label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Фамілія: </label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Електронна пошта: </label>
          <input type="email" name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Пароль: </label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Підтвердіть пароль: </label>
          <input type="password" name="passwordConfirmation" value={form.passwordConfirmation} onChange={handleChange} required />
        </div>
        <div>
          <label>Роль: </label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="USER">Покупець</option>
            <option value="SELLER">Продавець</option>
          </select>
        </div>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}

export default Register;
