import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/v1/products', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProducts(response.data);
      } catch (err) {
        console.error('Не вдалося завантажити товари', err);
        alert('Не вдалося завантажити товари');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Список товарів</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title} - {product.price} грн</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
