import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Product 1', category: 'Electronics', price: 199.99 },
  { id: 2, name: 'Product 2', category: 'Clothing', price: 29.99 },
  { id: 3, name: 'Product 3', category: 'Electronics', price: 149.99 },
  { id: 4, name: 'Product 4', category: 'Books', price: 9.99 },
  // Add more products as needed
];

function NuovoFiltro() {
  const [componenti, setComponenti] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)
  const [componentiFiltrati, setComponentiFiltrati] = useState([])
  const [marcaFilter, setMarcaFilter] = useState('');
  const [modelloFilter, setModelloFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/componenti')
      .then(response => response.json())
      .then(componentiDalServer => {
        console.log("*****")
        console.log(componentiDalServer)
        setComponenti(componentiDalServer)
        setComponentiFiltrati(componentiDalServer)
      })
      .catch(err => {
        console.log(err)
        // update the error state
        setError(err)
      })
      .finally(() => {
        // wether we sucessfully get the users or not,
        // we update the loading state
        setLoading(false)
      })
  }, [])


  const filteredProducts = componentiFiltrati.filter((product) =>
    product.marca.toLowerCase().includes(marcaFilter.toLowerCase()) &&
    product.modello.toLowerCase().includes(modelloFilter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="filters mt-t pt-5">
        <input
          type="text"
          placeholder="Filter by category"
          value={marcaFilter}
          onChange={(e) => setMarcaFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by max price"
          value={modelloFilter}
          onChange={(e) => setModelloFilter(e.target.value)}
        />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.unicoID}>
            {product.nome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NuovoFiltro;
