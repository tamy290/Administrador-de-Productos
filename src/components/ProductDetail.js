import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`/api/productos/${id}`)
            .then(response => response.json())
            .then(data => setProducto(data))
            .catch(error => console.error('Error al obtener el producto:', error));
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{producto.titulo}</h2>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
        </div>
    );
};

export default ProductDetail;
