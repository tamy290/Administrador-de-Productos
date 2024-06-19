import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/api/productos')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error al obtener los productos:', error));
    }, []);

    return (
        <div>
            <h2>Listado de Productos</h2>
            <ul>
                {productos.map(producto => (
                    <li key={producto._id}>
                        <a href={`/productos/${producto._id}`}>{producto.titulo}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
