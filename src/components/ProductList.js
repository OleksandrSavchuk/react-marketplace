import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Товари</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} — {p.price} грн</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
