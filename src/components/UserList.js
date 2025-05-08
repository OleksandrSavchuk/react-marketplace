import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/v1/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(response.data);
      } catch (err) {
        console.error('Не вдалося завантажити користувачів', err);
        alert('Не вдалося завантажити користувачів');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName}, {getRoleLabel(user.role)}</li>
        ))}
      </ul>
    </div>
  );
}

const getRoleLabel = (role) => {
    switch (role) {
      case 'ROLE_USER':
        return 'покупець';
      case 'ROLE_ADMIN':
        return 'адмін';
      case 'ROLE_SELLER':
        return 'продавець';
      default:
        return role; // якщо інша роль
    }
  };
  

export default UserList;
